import axios from "axios"
import React, { useState, useEffect, useContext } from "react"
import { useLocation } from "react-router-dom"

import { Spinner } from "react-bootstrap"
import InfiniteScroll from "react-infinite-scroll-component"
import API from "../../api/API"
import ProjectCard from "./ProjectCard"
import { FilterContext } from "../filter/FilterContext"
import ProjectNotFound from "./ProjectNotFound"
import { UserManagerContext } from "../utils/UserManagerContext"

function ProjectBar(props) {
  const { filtersContext } = useContext(FilterContext)
  const [filters] = filtersContext

  const search = new URLSearchParams(useLocation().search).get("search")

  const filtersQuery = filters
    ? `&tag=${filters
        .filter((item) => item.isToggled === true)
        .map((item) => item.name)
        .join("+")}`
    : ""
  const searchQuery = search ? `&name=${search}` : ""

  const [isLoading, setIsLoading] = useState(true)
  const [projects, setProjects] = useState(null)
  const [projectsIndex, setProjectsIndex] = useState(0)
  const [hasMore, setHasMore] = useState(true)
  const [scrollLoading, setScrollLoading] = useState(false)
  const projectsCount = 30

  const UserManager = useContext(UserManagerContext)

  useEffect(() => {
    const source = axios.CancelToken.source()

    API.get(`/v1/projects?count=${projectsCount}${searchQuery}${filtersQuery}`, {
      cancelToken: source.token
    })
      .then((response) => {
        if (response.status === 200) {
          setProjects(response.data)
          setIsLoading(false)
        }
      })
      .catch((error) => {
        if (!axios.isCancel(error) && error.response && error.response.status === 401)
          UserManager.accessToken().then((token) =>
            localStorage.setItem("accessToken", token)
          )
        !axios.isCancel(error) && console.log(error)
      })

    return () => {
      source.cancel()
    }
  }, [searchQuery, filtersQuery, UserManager])

  const fetchMore = () => {
    setScrollLoading(true)
    API.get(
      `/v1/projects?count=${projectsCount}&start=${
        projectsIndex + 30
      }${searchQuery}${filtersQuery}`
    )
      .then((response) => {
        if (response.status === 200) {
          if (response.data !== null) {
            setProjectsIndex((prev) => prev + 30)
            setProjects((prev) => [...prev, ...response.data])
          } else setHasMore(false)
          setScrollLoading(false)
        }
      })
      .catch((error) => {
        if (error.response && error.response.status === 401)
          UserManager.accessToken().then((token) =>
            localStorage.setItem("accessToken", token)
          )
        console.log(error)
      })
  }

  return (
    <>
      {isLoading && (
        <div className="loading-item">
          <Spinner
            animation="border"
            variant="primary"
            role="status"
            style={{ width: "70px", height: "70px" }}
          >
            <span className="sr-only">Loading...</span>
          </Spinner>
        </div>
      )}
      <div className="project-container content__project-container">
        {projects && (
          <InfiniteScroll
            dataLength={projects.length}
            hasMore={hasMore}
            next={fetchMore}
            className="project-container content__project-container"
          >
            {projects &&
              projects.map((item, index) => (
                <ProjectCard {...item} key={index} />
              ))}
          </InfiniteScroll>
        )}
        {!projects && !isLoading && <ProjectNotFound />}
      </div>
      {scrollLoading && (
        <div className="loading-item">
          <Spinner
            animation="border"
            variant="primary"
            role="status"
            style={{ marginBottom: "20px" }}
          >
            <span className="sr-only">Loading...</span>
          </Spinner>
        </div>
      )}
    </>
  )
}

export default ProjectBar