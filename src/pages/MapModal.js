import React, { Component } from 'react'
import{Button, Modal, ModalBody, ModalDialog, ModalFooter, ModalHeader, ModalTitle, Popover}
  from 'react-bootstrap'
import Map from './Map'
import MapImg from './images/mapbtn.jpg'


class MapModal extends React.Component{
  constructor(props, context) {
    super(props, context);

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);

    this.state = {
      show: false
    };
  }

  handleClose() {
    this.setState({ show: false });
  }

  handleShow() {
    this.setState({ show: true });
  }

  render(){
    const popover = (
      <Popover id="modal-popover" title="trail map"></Popover>
    );

    return(
      <div>
        <button id="mapBtn" className="mapBtn" onClick={this.handleShow}>
          <img className="mapImg"src={MapImg}/>
        </button>
        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>Cuyuna Lakes Trails</Modal.Header>
          <Modal.Body data-w="100%" closeButton>
            <Map />
          </Modal.Body>
        </Modal>

      </div>
    );
  }
}

export default MapModal;
