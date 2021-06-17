import React, { useState } from "react"
import { Button } from "react-bootstrap"

import MilestoneDeleteModal from "./MilestoneDeleteModal"
import MilestoneShowModal from "./MilestoneShowModal"
import MilestoneUploadModal from "./MilestoneUploadModal"

function MilestoneButton(props) {
  const { name, variant, data, setData, id } = props

  const [show, setShow] = useState(false)
  const handleShowClose = () => setShow(false)
  const handleShow = () => setShow(true)

  const [upload, setUpload] = useState(false)
  const handleUploadClose = () => setUpload(false)
  const handleUpload = () => setUpload(true)

  const [remove, setRemove] = useState(false)
  const handleRemoveClose = () => setRemove(false)
  const handleRemove = () => setRemove(true)

  const onClickEvent =
    name === "Смета" || name === "Функциональное задание"
      ? handleShow
      : name === "Удалить смету" || name === "Удалить ФЗ"
      ? handleRemove
      : handleUpload
  
  return (
    <>
      <Button variant={variant} onClick={onClickEvent}>
        {name}
      </Button>
      {(data && (name === "Смета" || name === "Функциональное задание")) && <MilestoneShowModal
        name={name}
        handleClose={handleShowClose}
        show={show}
        data={data}
      />}
      {(name === "Добавить смету" || name === "Добавить ФЗ") && <MilestoneUploadModal
        name={name}
        handleClose={handleUploadClose}
        show={upload}
        id={id}
        setData={setData}
      />}
      {(data && (name === "Удалить смету" || name === "Удалить ФЗ")) && <MilestoneDeleteModal
        name={name}
        handleClose={handleRemoveClose}
        show={remove}
        id={id}
        data={data}
        setData={setData}
      />}
    </>
  )
}

export default MilestoneButton
