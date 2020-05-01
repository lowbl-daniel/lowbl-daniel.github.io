import React, { Component } from 'react';

export default  class Resume extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="resume">

         <div className="row education">

            <div className="two columns header-col">
               <h1><span>Education</span></h1>
            </div>

            <div className="ten columns main-col">
              {
                resumeData.education && resumeData.education.map((item)=>{
                  return(
                    <div className="row item">
                       <div className="twelve columns">
                          <img src={`${item.SchoolLogo}`} alt={item.SchoolLogo.name} className="aboutlogo"/>   
                          <h3>{item.UniversityName}</h3>                 
                          <p className="info">
                          {item.specialization}
                          </p>
                          <p className="date">{item.StartEndDate}</p>

                          <p className="achievements">
                          {item.Achievements !=="" && <h5>Achievements</h5>}
                          {item.Achievements !== "" &&
                          ((String)(item.Achievements)).split('\n').map((item, key)=>{return <span key={key}>{item}<br/></span>})}
                          </p>
                       </div>
                    </div>
                  )
                })
              }
            </div>
         </div>
        <div className="row work">
            <div className="two columns header-col">
               <h1><span>Work</span></h1>
            </div>

            <div className="ten columns main-col">
              {
                resumeData.work && resumeData.work.map((item) => {
                  return(
                    <div className="row item">
                       <div className="twelve columns"> 
                        <img src={`${item.CompanyLogo}`} alt={item.CompanyLogo.name} className="aboutlogo"/>   
                          <h3>{item.CompanyName}</h3>
                          <p className="date">{item.StartEndDate}</p>   
                          <h5>Roles and responsibilities</h5>
                          <p className="info">
                          {((String)(item.specialization)).split('\n').map((item, key)=>{return <span key={key}>{item}<br/></span>})}
                          </p>
                          <br></br>
                          <h5>Projects</h5>
                          <p className="projects">
                          {((String)(item.Projects)).split('\n').map((item, key)=>{return <span key={key}>{item}<br/></span>})}
                          </p>

                          <p className="achievements">
                          {item.Achievements !=="" && <h5>Achievements</h5>}
                          {item.Achievements !== "" && 
                          ((String)(item.Achievements)).split('\n').map((item, key)=>{return <span key={key}>{item}<br/></span>})}
                          </p>

                          <p>
                                      ___________________________________________________  
                          </p>
                       </div>
                    </div>
                  )
                })
              }
            </div> 
         </div>


         <div className="row skill">

            <div className="two columns header-col">
               <h1><span>Skills</span></h1>
            </div>

            <div className="ten columns main-col">

               <p>
               {resumeData.skillsDescription}
               </p>

   				<div className="bars">

   				   <ul className="skills">
                {
                  resumeData.skills && resumeData.skills.map((item) => {
                    return(
                      <li>
                      <span className={`bar-expand ${item.skillname.toLowerCase().replace('++', 'plusplus').replace('#', 'sharp')}`}>
                      </span><em>{item.skillname}</em>
                      </li>
                    )
                  })
                }

   					</ul>

   				</div>

   			</div>

         </div>

      </section>
    );
  }
}