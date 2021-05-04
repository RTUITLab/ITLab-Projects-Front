import React, { useState } from "react"
import { Button, Modal } from "react-bootstrap"

function MilestoneButton(props) {

  const { name, variant, url } = props

  const [show, setShow] = useState(false)

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  return (
    <>
      <Button variant={variant} onClick={handleShow}>
        {name}
      </Button>

      <Modal show={show} onHide={handleClose} size="xl" centered={true} style={{ padding: 0 }}>
        <Modal.Header closeButton>
          <Modal.Title>{name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <iframe
            style={{ width: "100%", height: "60vh" }}
            title="officeapps-iframe"
            src={`https://view.officeapps.live.com/op/embed.aspx?src=${url}`}
            frameBorder="0"
          />
        </Modal.Body>
        <Modal.Footer>
          <a href={url} target="_blank" rel="noreferrer">
            <Button variant="primary">Скачать</Button>
          </a>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default MilestoneButton
