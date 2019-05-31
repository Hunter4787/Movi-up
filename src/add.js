// import React, { Component } from 'react';
// import Modal from 'react-modal';


// class AddMv extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             modalIsOpen: false
//         }
//     }
//     openModal=()=> {
//         this.setState({modalIsOpen: true});
//       }
     
//       afterOpenModal=()=> {
//         // references are now sync'd and can be accessed.
//         this.subtitle.style.color = '#f00';
//       }
     
//       closeModal=()=> {
//         this.setState({modalIsOpen: false});
//       }
//     render() {
//         const customStyles = {
//             content : {
//               top                   : '50%',
//               left                  : '50%',
//               right                 : 'auto',
//               bottom                : 'auto',
//               marginRight           : '-50%',
//               transform             : 'translate(-50%, -50%)'
//             }
//           };

          
//         return (
//             <div className="col-lg-4 col-md-6 col-sm-12 add-mrgn">
//                  <img onMouseOver="" onClick={this.openModal} src={require('./plus.jpg')} alt="ajouter un element" />
//                 <Modal
//           isOpen={this.state.modalIsOpen}
//           onAfterOpen={this.afterOpenModal}
//           onRequestClose={this.closeModal}
//           style={customStyles}
//           contentLabel="Add Modal"
//         >
 
//           <h2 ref={subtitle => this.subtitle = subtitle}>Hello</h2>
//           <button onClick={this.closeModal}>close</button>
//           <div>Add new movie</div>
//           <form>
//             <input type="text"/>
//             <input type="file"/>
//             <input type="text"/>
//             <button>tab navigation</button>
            
//           </form>
//         </Modal>
//                 </div>)
//     }
// }

// export default AddMv;
import React from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Col,
   Form, FormGroup, Label, Input } from 'reactstrap';
import StarRatingComponent from 'react-star-rating-component';

class Add extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
          modal: false,
          rating: 1,
          title:"",
          tof:"",
      };
  }

  handlechangeTitle=(e)=>{
   this.setState({title:e.target.value})
  }

  handlechangeImg=(e)=>{
    this.setState({tof: URL.createObjectURL(e.target.files[0])})
  }

  toggle=() =>{
      this.setState(prevState => ({
          modal: !prevState.modal
      }));
  }
  onStarClick=(nextValue) =>{
      this.setState({ rating: nextValue },);
  }

  addMovie=()=>{
    this.props.newMovie(this.state.rating,this.state.tof,this.state.title)
  }
  
  render() {
      return (
          <div className="col-lg-4 col-md-6 col-sm-12 add-mrgn">
              <Button color="secondary" onClick={this.toggle}>+</Button>
              <Modal isOpen={this.state.modal} modalTransition={{ timeout: 700 }} backdropTransition={{ timeout: 1300 }}
                  toggle={this.toggle} className={this.props.className}>
                  <ModalHeader toggle={this.toggle}>Add New Movie</ModalHeader>
                  <ModalBody>
                      <Form>
                          <FormGroup row>
                              <Label for="exampleTitle" sm={2}>Title</Label>
                              <Col sm={10}>
                                  <Input type="Title" name="Title" id="exampleTitle" 
                                  value={this.state.title} onChange={this.handlechangeTitle}/>
                              </Col>
                          </FormGroup>
                         
                          <FormGroup row>
                              <Label for="exampleRating" sm={2}>Rating</Label>
                              <Col sm={10}>
                                  <StarRatingComponent
                                      name="rate1"
                                      starCount={5}
                                      onStarClick={this.onStarClick} value={this.state.rating}
                                  />
                              </Col>
                          </FormGroup>
                        <FormGroup row>
                              <Label for="exampleFile" sm={2}>File</Label>
                              <Col sm={10}>
                                  <Input type="file" name="file" id="exampleFile" onChange={this.handlechangeImg}/>
                              </Col>
                        </FormGroup>
                      </Form>
                  </ModalBody>
                  <ModalFooter>
                      <Button color="primary" onClick={(e)=>{this.toggle(e);this.addMovie(e)}}>Add</Button>{' '}
                      <Button color="secondary" onClick={this.toggle}>Cancel</Button>
                  </ModalFooter>
              </Modal>
          </div>
      );
  }
}

export default Add;