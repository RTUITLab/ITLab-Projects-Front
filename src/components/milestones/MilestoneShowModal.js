import React from "react"
import { Modal, Button } from "react-bootstrap"

function MilestoneShowModal(props) {
  const { show, handleClose, name, data } = props

  const url = `${process.env.REACT_APP_MFS_HOST}/mfs${
    name === "Смета"
      ? data.estimate_url
      : "Функциональное задание"
      ? data.func_task_url
      : null
  }`

  return (
    <Modal
      show={show}
      onHide={handleClose}
      size="xl"
      centered={true}
      style={{ padding: 0 }}
    >
      <Modal.Header closeButton>
        <Modal.Title>{name}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <iframe
          style={{ width: "100%", height: "60vh" }}
          title="googledocs-iframe"
          src={`https://docs.google.com/gview?url=${url}&embedded=true`}
          frameBorder="0"
        />
      </Modal.Body>
      <Modal.Footer>
        <a href={url} target="_blank" rel="noreferrer">
          <Button variant="primary">Скачать</Button>
        </a>
      </Modal.Footer>
    </Modal>
  )
}

export default MilestoneShowModal
