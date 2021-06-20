import React, { useState } from 'react'
import { Button, Modal } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import EditTask from '../Redux/Actions/EditTask';
function EditItem({item}) {
    const [itemUpdated, setItemUpdated] = useState(item.text)
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const dispatch = useDispatch()
    const updateItem=()=>{
      if(itemUpdated != ""){
      dispatch(EditTask({id:item.id, text:itemUpdated }));
      handleClose();}
      else{alert("empty...")}
    }
  
    return (
      <>
        <Button variant="success" onClick={handleShow}>
          Edit
        </Button>
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <input 
            value={itemUpdated}
            onChange={(e)=>setItemUpdated(e.target.value)}
            />
            </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={updateItem}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
  export default EditItem
  