import axios from "axios"
import React, { useContext, useState } from "react"
import { Modal, Button, Alert, Spinner } from "react-bootstrap"
import { UserManagerContext } from "../utils/UserManagerContext"

function MilestoneDeleteModal(props) {
  const { name, show, handleClose, data, setData, id: milestone_id } = props

  const [isError, setIsError] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const url = name === "Удалить смету" ? data.estimate_url : name === "Удалить ФЗ" ? data.func_task_url : null

  const UserManager = useContext(UserManagerContext)

  const handleDelete = () => {
    const fileId = url.split("/").pop()
    setIsLoading(true)

    const API_URL = localStorage.getItem("projectsAPIUrl").split('/').slice(0, -1).join('/')

    axios({
      method: "DELETE",
      url: `${API_URL}/mfs/files/${fileId}`,
      headers: {
        Authorization: `Bearer ${localStorage.getItem("accessToken")}`
      }
    })
    .then((response) => {
      if (response.status === 200) {
        if (response.data === "Successfully deleted file!") {
          updateFileURL()
        }
      }
    })
    .catch((error) => {
      setIsLoading(false)
      setIsError(true)
      if (error.response && error.response.status === 401)
        UserManager.accessToken().then(token => localStorage.setItem("accessToken", token))
      console.log(error)
    })
  }

  const updateFileURL = () => {

    const API_URL = localStorage.getItem("projectsAPIUrl")

    const endpoint =
      name === "Удалить смету"
        ? `/v1/estimate/${milestone_id}`
        : `/v1/task/${milestone_id}`

    axios({
      method: "DELETE",
      url: `${API_URL}${endpoint}`,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("accessToken")}`
      }
    })
    .then((response) => {
      if (response.status === 200) {
        setIsLoading(false)
        setData(null)
      }
    })
    .catch((error) => {
      setIsLoading(false)
      setIsError(true)
      if (error.response && error.response.status === 401)
        UserManager.accessToken().then(token => localStorage.setItem("accessToken", token))
      console.log(error)
    })
  }

  return (
    <Modal
      show={show}
      onHide={() => { setIsError(false); handleClose() }}
      centered={true}
      style={{ padding: 0 }}
    >
      <Modal.Header closeButton>
        <Modal.Title>{name}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {isError && (
          <Alert variant="danger">
            При удалении произошла ошибка, попробуйте позже!
          </Alert>
        )}
        Подтвердите, чтобы {name.toLowerCase()}?
      </Modal.Body>
      <Modal.Footer>
        {isLoading ? (
          <Button variant="danger" disabled>
            <Spinner
              as="span"
              animation="border"
              size="sm"
              role="status"
              aria-hidden="true"
            />
            <span className="sr-only">Loading...</span>
          </Button>
        ) : (
          <Button variant="danger" onClick={handleDelete}>
            Удалить
          </Button>
        )}
        <Button variant="secondary" onClick={handleClose}>
          Отмена
        </Button>
      </Modal.Footer>
    </Modal>
  )
}

export default MilestoneDeleteModal
