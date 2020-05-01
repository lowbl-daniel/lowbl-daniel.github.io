import React, { Component } from 'react';
import Modal from './modal';

export default class Porfolio extends Component {

  state = {
    showModal: false,
    modalKey: null,
    modalTitle: "ModalTitle",
    modalMsg : "ModalMsg",
    modalPics : "UrlStrings", //parse it at reactFragments
    modalVideo: "",
    modalAward:"",
    modalRoles: "",
  }

 toggleModal = (key, title, msg, vidURL, award, role) => {
   this.setState({
      showModal: !this.state.showModal,
       modalKey: key,
       modalTitle: title,
       modalMsg: msg,
       modalVideo: vidURL,
       modalAward: award,
       modalRoles: role,
   }
   );
 }

  render() {
    let resumeData = this.props.resumeData;
    
    
    return (
      <section id="portfolio">
      <div className="row">
        <div className="twelve columns collapsed">
          <h1>Check Out Some of My Works.</h1>
          <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
          {
            resumeData.portfolio && resumeData.portfolio.map((item)=>{
              return(
                <div className="columns portfolio-item" onClick={() => {this.toggleModal(item, item.name, item.internalDescription, item.videoURL, item.awards, item.roles);}}>
                  <div className="item-wrap">
                      <img src={`${item.imgurl}`} alt={item.name} className="item-img"/>
                        <div className="overlay">
                          <div className="portfolio-item-meta">
                          <h5>{item.name}</h5>
                          <p>{item.description}</p>
                          </div>
                      </div>
                  </div>
                </div>
              )
            })
          }
          </div>
        </div>
      </div>

            <Modal
              show={this.state.showModal}
              closeCallback={() => {this.toggleModal(null, "" , "", "", "", "")}}
              customClass="custom_modal_class"
            >
              <React.Fragment>
                <h2>{this.state.modalTitle}</h2>
                  {this.state.modalVideo !== "" &&
                  <iframe title="Project Video" src={`${this.state.modalVideo}`} width="480" height="273" frameBorder="0" className="embedVid" allowFullScreen></iframe>}
                  
                  {this.state.modalVideo === "" && this.state.modalKey !== null &&
                    <img src={`${this.state.modalKey.imgurl}`} alt={this.state.modalTitle} width="480" height="273" frameBorder="0"/>}

                <div classNamae="Container">
                <div className="row">
                {
                  resumeData.portfolio && resumeData.portfolio.map((item)=>{
                    if(item === this.state.modalKey)
                    {
                      return item.modalPicURL.map((url) => {
                        return(
                         <div className="item-wrap">
                         <div className="columns modal-item">
                             <img src={`${url}`} alt={url.name} className="modal-item" style={{width:'100px', height:'70px'}}/>
                        </div>
                        </div>
                        )
                      })
                    }                   
                    return null;
                })
                }
                </div>
                </div>
                
                <div className = "modalText">
                <h6>Description</h6>
                <div className="modalText">
                {((String)(this.state.modalMsg)).split('\n').map((item, key)=>{return <span key={key}>{item}<br/></span>})}
                </div>
                
                {this.state.modalAward !== "" && <h6>Awards</h6>}
                {this.state.modalAward !== "" && ((String)(this.state.modalAward)).split('\n').map((item, key)=>{return <span key={key}>{item}<br/></span>})}
                <h6>Roles</h6>
                {((String)(this.state.modalRoles)).split('\n').map((item, key)=>{return <span key={key}>{item}<br/></span>})}

                </div>
              </React.Fragment>
            </Modal>
          
  </section>
        );
  }
}