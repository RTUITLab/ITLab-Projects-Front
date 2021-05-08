import React, { useState } from "react"
import { Modal, Button, Form, Spinner, Alert } from "react-bootstrap"
import axios from "axios"

function MilestoneShowModal(props) {
  const { name, show, handleClose, id: milestone_id, setData } = props

  const [isError, setIsError] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [fileData, setFileData] = useState(null)

  const handleFile = (event) => {
    const file = event.target.files.item(0)
    const data = new FormData()
    data.append("uploadingForm", file)
    setFileData(data)
  }

  const handleUpload = () => {
    setIsLoading(true)
    axios({
      method: "POST",
      url: `${process.env.REACT_APP_MFS_HOST}/mfs/files/upload`,
      data: fileData,
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${process.env.REACT_APP_MFS_TOKEN}`
      }
    })
      .then((response) => {
        if (response.status === 200) updateFileURL(response.data.id)
      })
      .catch((error) => {
        setIsError(true)
        setIsLoading(false)
        console.log(error)
      })
  }

  const updateFileURL = (id) => {
    const endpoint =
      name === "Добавить смету"
        ? "/projects/estimate"
        : name === "Добавить ФЗ"
        ? "/projects/task"
        : null

    axios({
      method: "POST",
      url: `${process.env.REACT_APP_API_HOST}${endpoint}`,
      data: {
        id: id,
        milestone_id: milestone_id
      },
      headers: {
        "Content-Type": "application/json"
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
        console.log(error)
      })
  }

  return (
    <Modal
      show={show}
      onHide={() => { setFileData(null); setIsError(false); handleClose() }}
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
        <Button
          variant="secondary"
          onClick={handleClose}
        >
          Отмена
        </Button>
      </Modal.Footer>
    </Modal>
  )
}

export default MilestoneShowModal
