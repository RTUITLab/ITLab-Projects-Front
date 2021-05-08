import axios from "axios"
import React, { useState } from "react"
import { Modal, Button, Alert, Spinner } from "react-bootstrap"

function MilestoneDeleteModal(props) {
  const { name, show, handleClose, data, setData, id: milestone_id } = props

  const [isError, setIsError] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const url = name === "Удалить смету" ? data.estimate_url : name === "Удалить ФЗ" ? data.func_task_url : null

  const handleDelete = () => {
    const fileId = url.split("/").pop()
    setIsLoading(true)

    axios({
      method: "DELETE",
      url: `${process.env.REACT_APP_MFS_HOST}/mfs/files/${fileId}`,
      headers: {
        Authorization: `Bearer ${process.env.REACT_APP_MFS_TOKEN}`
      }
    })
      .then((response) => {
        if (response.data === "Successfully deleted file!") {
          updateFileURL()
        }
      })
      .catch((error) => {
        setIsLoading(false)
        setIsError(true)
        console.log(error)
      })
  }

  const updateFileURL = () => {
    const endpoint =
      name === "Удалить смету"
        ? `/projects/estimate/${milestone_id}`
        : `/projects/task/${milestone_id}`

    axios({
      method: "DELETE",
      url: `${process.env.REACT_APP_API_HOST}${endpoint}`,
      headers: {
        "Content-Type": "application/json"
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
