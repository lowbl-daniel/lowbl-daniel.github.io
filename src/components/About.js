import React, { Component } from 'react';
import Modal from './modal';
import ContactUs from './ContactForm';

export default class About extends Component {

   constructor(props){
      super(props);
      this.setmessage.bind(this);
   }


   state = {
      showModal: false,
      modalStatus: "",
    }

   //user Email
   //name, email, subject, sendmessage 
   toggleModal = () => {
      this.setState({
         showModal: !this.state.showModal,
         modalStatus: "",
      });
    }


    setmessage = (msg) => {
      this.setState({
         modalStatus: msg,
      });
   }

  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="about">
         <div className="row">

            <div className="three columns">

               <img className="profile-pic"  src="images/ProfilePic.jpg" alt="" />

            </div>

            <div className="nine columns main-col">

               <h2>About Me</h2>
               <p>
               {
                  ((String)(resumeData.aboutme)).split('\n').map((item, key)=>{return <span key={key}>{item}<br/></span>})

               }
               </p>

               <div className="row">

                  <div className="columns contact-details">

                  <h2>Drop me a Query</h2>
                  <p className="address">
                  <button onClick={() => this.toggleModal()}>
                     {resumeData.email}
                  </button>
       				</p>
                  </div>
               </div>
            </div>
         </div>

         <Modal
              show={this.state.showModal}
              closeCallback={() => {this.toggleModal()}}
              customClass="custom_modal_class">
          <React.Fragment>
          <div className = "modalText">
          <h3>Contact Form</h3>
          <p></p>
          <ContactUs data={this.setmessage.bind(this)}/>   
          {this.state.modalStatus}
         </div>
          </React.Fragment>
         </Modal>
      </section>
    );
  }
}