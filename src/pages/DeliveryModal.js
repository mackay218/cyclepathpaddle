import React, { Component } from 'react'
import{Button, Modal, ModalBody, ModalDialog, ModalFooter, ModalHeader, ModalTitle, Popover}
  from 'react-bootstrap'


class DeliveryModal extends React.Component{
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
        <button id="deliveryBtn" className="deliveryBtn"
          onClick={this.handleShow}>Delivery Schedule
        </button>

        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton></Modal.Header>
          <Modal.Body data-w="100%" closeButton>
            <div className="deliverySchedule">
              <h1>Delivery Schedule</h1>
                <h4>drop off and pick up schedule</h4>
                <h3>Monday-Saturday</h3>
                <ul>
                  <li>9:30 AM</li>
                  <li>1:30 PM</li>
                  <li>5:30 PM</li>
                </ul>
                <h3>Sunday</h3>
                <ul>
                  <li>10:30 AM</li>
                  <li>2:30 PM</li>
                </ul>
                <p><b>NO DELIVERIES WITHOUT A RESERVATION</b></p>
                <p>Reservations must be made at least 2 days in advance.</p>
                <p>For deliveries to locations over 5 miles from Crosby,
                  a fee of $2.00 per mile applies.
                </p>
                <p>
                  There is a $100 flat fee for shuttles to the Pine River
                  and Mississippi River.
                </p>
            </div>
          </Modal.Body>
        </Modal>

      </div>
    );
  }
}

export default DeliveryModal
