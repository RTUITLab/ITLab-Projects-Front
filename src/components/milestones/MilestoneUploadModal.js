import React, { useContext, useState } from "react"
import { Modal, Button, Form, Spinner, Alert } from "react-bootstrap"
import axios from "axios"
import { UserManagerContext } from "../utils/UserManagerContext"

function MilestoneShowModal(props) {
  const { name, show, handleClose, id: milestone_id, setData } = props

  const [isError, setIsError] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [fileData, setFileData] = useState(null)

  const UserManager = useContext(UserManagerContext)

  const handleFile = (event) => {
    const file = event.target.files.item(0)
    const data = new FormData()
    data.append("uploadingForm", file)
    setFileData(data)
  }

  const handleUpload = () => {
    setIsLoading(true)

    const API_URL = localStorage
      .getItem("projectsAPIUrl")
      .split("/")
      .slice(0, -1)
      .join("/")

    axios({
      method: "POST",
      url: `${API_URL}/mfs/files/upload`,
      data: fileData,
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${localStorage.getItem("accessToken")}`
      }
    })
      .then((response) => {
        if (response.status === 200) updateFileURL(response.data.id)
      })
      .catch((error) => {
        setIsError(true)
        setIsLoading(false)
        if (error.response && error.response.status === 401)
          UserManager.accessToken().then((token) =>
            localStorage.setItem("accessToken", token)
          )
        console.log(error)
      })
  }

  const updateFileURL = (id) => {
    const API_URL = localStorage.getItem("projectsAPIUrl")

    const endpoint =
      name === "Добавить смету"
        ? "/v1/estimate"
        : name === "Добавить ФЗ"
        ? "/v1/task"
        : null

    axios({
      method: "POST",
      url: `${API_URL}${endpoint}`,
      data: {
        id: id,
        milestone_id: milestone_id
      },
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("accessToken")}`
      }
    })
      .then((response) => {
        setIsLoading(false)
        if (response.status === 201)
          setData({
            milestone_id: milestone_id,
            [name === "Добавить смету"
              ? "estimate_url"
              : "func_task_url"]: `/download/${id}`
          })
      })
      .catch((error) => {
        setIsError(true)
        setIsLoading(false)
        if (error.response && error.response.status === 401)
          UserManager.accessToken().then((token) =>
            localStorage.setItem("accessToken", token)
          )
        console.log(error)
      })
  }

  return (
    <Modal
      show={show}
      onHide={() => {
        setFileData(null)
        setIsError(false)
        handleClose()
      }}
      centered={true}
      style={{ padding: 0 }}
    >
      <Modal.Header closeButton>
        <Modal.Title>{name}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group>
            {isError && (
              <Alert variant="danger">
                При загрузке произошла ошибка, попробуйте позже!
              </Alert>
            )}
            <p>Прикрепите файл</p>
            <input
              type="file"
              id="milestone-upload-input"
              label="Прикрепите файл для загрузки"
              onChange={handleFile}
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        {fileData && !isLoading && (
          <Button variant="primary" onClick={handleUpload}>
            Загрузить
          </Button>
        )}
        {fileData && isLoading && (
          <Button variant="primary" disabled>
            <Spinner
              as="span"
              animation="border"
              size="sm"
              role="status"
              aria-hidden="true"
            />
            <span className="sr-only">Loading...</span>
          </Button>
        )}
        <Button variant="secondary" onClick={handleClose}>
          Отмена
        </Button>
      </Modal.Footer>
    </Modal>
  )
}

export default MilestoneShowModal
