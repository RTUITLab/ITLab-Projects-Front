import React, { useEffect, useState } from "react"
import { useLocation } from "react-router-dom"
import axios from "axios"
import InfiniteScroll from 'react-infinite-scroll-component'

import { Spinner } from "react-bootstrap"
import API from "../../api/API"
import IssueCard from "./IssueCard"

function IssueBar() {
  const search = new URLSearchParams(useLocation().search).get("search")
  const searchQuery = search ? `&name=${search}` : ""

  const [isLoading, setIsLoading] = useState(true)
  const [issues, setIssues] = useState(null)
  const [issuesIndex, setIssuesIndex] = useState(0)
  const [hasMore, setHasMore] = useState(true)
  const [scrollLoading, setScrollLoading] = useState(false)
  const issuesCount = 30

  useEffect(() => {
    const source = axios.CancelToken.source()

    API.get(`/projects/issues?count=${issuesCount}${searchQuery}`, {
      cancelToken: source.token
    }).then((response) => {
      setIssues(response.data)
      setIsLoading(false)
    })

    return () => {
      source.cancel()
    }
  }, [searchQuery])

  const fetchMore = () => {
    setScrollLoading(true)
    API.get(
      `/projects/issues?count=${issuesCount}&start=${
        issuesIndex + 30
      }${searchQuery}`
    )
      .then((response) => {
        if (response.data !== null) {
          setIssuesIndex((prev) => prev + 30)
          setIssues((prev) => [...prev, ...response.data])
        } else setHasMore(false)
        setScrollLoading(false)
      })
      .catch((error) => console.log(error))
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
      <div className="tasks-container">
        <div className="section-title-container">
          <p className="section-title">Текущие задачи</p>
          <hr className="section-hr" />
        </div>
        <div className="tasks">
          {issues && (
            <InfiniteScroll
              dataLength={issues.length}
              hasMore={hasMore}
              next={fetchMore}
              className="tasks"
            >
              {issues &&
                issues.map((item, index) => (
                  <IssueCard
                    url={item.html_url}
                    tags={item.labels}
                    name={item.title}
                    description={item.body}
                    author={item.user}
                    date={item.created_at}
                    key={index}
                  />
                ))}
            </InfiniteScroll>
          )}
        </div>
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

export default IssueBar
