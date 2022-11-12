import React, { Component } from 'react';

export default class About extends Component {
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

                  <h2>Contact Details</h2>
                  <p className="address">       
                  Email: {resumeData.email}
       				</p>
                  </div>
               </div>
            </div>
         </div>
      </section>
    );
  }
}