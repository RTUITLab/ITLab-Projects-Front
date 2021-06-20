import React, { useState, useEffect, useRef } from "react"
import { Modal, Button } from "react-bootstrap"

function MilestoneShowModal(props) {
  const { show, handleClose, name, data } = props

  const API_URL = localStorage.getItem("projectsAPIUrl").split('/').slice(0, -1).join('/')

  const url = `${API_URL}/mfs${
    name === "Смета"
      ? data.estimate_url
      : "Функциональное задание"
      ? data.func_task_url
      : null
  }`

  const [iframeUrl, setIframeURL] = useState(null)
  const [iframeLoaded, setIframeLoaded] = useState(false)

  useEffect(() => {
    setIframeURL(url)
  }, [url])

  const frameRef = useRef()

  useEffect(() => {
    let iframeInterval

    if (show) {
      iframeInterval = setInterval(() => {
        if (frameRef.current && !iframeLoaded)
          frameRef.current.src = `https://docs.google.com/viewer?url=${iframeUrl}&embedded=true`
      }, 2000)

      if (iframeLoaded) clearInterval(iframeInterval)
    }

    return () => clearInterval(iframeInterval)
  }, [iframeLoaded, show, iframeUrl])

  return (
    <Modal
      show={show}
      onHide={() => {
        setIframeLoaded(false)
        handleClose()
      }}
      size="xl"
      centered={true}
      style={{ padding: 0 }}
    >
      <Modal.Header closeButton>
        <Modal.Title>{name}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <iframe
          ref={frameRef}
          style={{ width: "100%", height: "60vh" }}
          title="googledocs-iframe"
          src={`https://docs.google.com/viewer?url=${iframeUrl}&embedded=true`}
          onLoad={() => setIframeLoaded(true)}
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
