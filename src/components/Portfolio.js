import React, { Component } from 'react';
import Modal from './modal';
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";


export default class Porfolio extends Component {

  constructor() {
    super();
  this.state = {
    showModal: false,
    modalKey: null,
    modalTitle: "ModalTitle",
    modalMsg : "ModalMsg",
    modalPics : "UrlStrings", //parse it at reactFragments
    modalVideo: "",
    modalVideoThumbnail: "",
    modalAward:"",
    modalRoles: "",
    modalContents: [],

    showFullscreenButton: true,
    showGalleryFullscreenButton: true,
    showPlayButton: false,
    showGalleryPlayButton: false,
    showNav: true,
    isRTL: false,
    slideDuration: 450,
    slideInterval: 2000,
    slideOnThumbnailOver: false,
    thumbnailPosition: 'bottom',
    showVideo: {},
    useWindowKeyDown: true,
    onChanged: false,
  }

 this.toggleModal = (key, title, msg, vidURL, vidthumb, award, role) => {
   this.setState({
       showModal: !this.state.showModal,
       modalKey: key,
       modalTitle: title,
       modalMsg: msg,
       modalVideo: vidURL,
       modalVideoThumbnail: vidthumb,
       modalAward: award,
       modalRoles: role,
       modalContents: [],
       onChanged: false
   }
   );
 }

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
                <div className="columns portfolio-item" onClick={() => {this.toggleModal(item, item.name, item.internalDescription, item.videoURL, item.videoThumbnail, item.awards, item.roles);}}>
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
              closeCallback={() => {this.toggleModal(null, "" , "", "", "", "", "")}}
              customClass="custom_modal_class">
                
                
                <React.Fragment>
                {                 
                  this.state.onChanged === false && this.state.modalVideo !== "" &&
                    this.state.modalContents.push({
                      thumbnail: this.state.modalVideoThumbnail,
                      embedUrl: `${this.state.modalVideo}`,
                      renderItem: this._renderVideo.bind(this)
                    })
                    //  {this.state.modalVideo === "" && this.state.modalKey !== null &&
                    //  <img src={`${this.state.modalKey.imgurl}`} alt={this.state.modalTitle} width="480" height="273" frameBorder="0"/>}
                    
                    



                }
    
                  <div className="Container">
                  <div className="row">
                  {

                     this.state.onChanged === false && resumeData.portfolio && resumeData.portfolio.map((item)=>{                   
                     if(item === this.state.modalKey)
                     {
                        this.setState({onChanged: true});
                         return item.modalPicURL.map((url) => {           
                                this.state.modalContents.push({
                                original: `${url}`,
                                thumbnail: `${url}`})
                         })
                        
                     }           

                     return null;
                 })
                 } 
                </div>
                </div>
                
                

                  
                <h2>{this.state.modalTitle}</h2>
                {                      
                  this.renderGallery(this.state.modalContents)
                }

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


// SetupModalHelper(props, portfolio){

//   let arr = [];
// return (

//   <div>
//     {               
//       this.state.modalVideo !== "" &&
//       arr.push({
//         thumbnail: this.state.modalVideoThumbnail,
//         embedUrl: `${this.state.modalVideo}`,
//         renderItem: this._renderVideo.bind(this)
//       })
//     }
    
//    <div className="Container">
//    <div className="row">
//    { 

//        portfolio && portfolio.map((item)=>
//        {                   
//         if(item === this.state.modalKey)
//         {
//            this.setState({onChanged: true});
//             return item.modalPicURL.map((url) => {           
//               arr.push({
//                    original: `${url}`,
//                    thumbnail: `${url}`})
//             })
            
//             this.setState({modalContents: arr })
//         }             

//        return null;
//    })
//    } 
//   </div>
//   </div>
//   </div>


// )}




 renderGallery(images)
{
  return(
    <section className='slidegallery'>
    <ImageGallery 
    items={images} 
    onClick={this._onImageClick.bind(this)}
    onImageLoad={this._onImageLoad}
    onSlide={this._onSlide.bind(this)}
    onPause={this._onPause.bind(this)}
    onScreenChange={this._onScreenChange.bind(this)}
    onPlay={this._onPlay.bind(this)}
    infinite={false}
    showBullets={true}
    showFullscreenButton={this.state.showFullscreenButton && this.state.showGalleryFullscreenButton}
    showPlayButton={this.state.showGalleryPlayButton}
    showThumbnails={this.state.showThumbnails}
    showIndex={false}
  //  showNav={false}
    //isRTL={this.state.isRTL}
    //thumbnailPosition={this.state.thumbnailPosition}
    //slideDuration={parseInt(this.state.slideDuration)}
    //slideInterval={parseInt(this.state.slideInterval)}
   // slideOnThumbnailOver={this.state.slideOnThumbnailOver}
    additionalClass="slidegallery-image-gallery"
    useWindowKeyDown={this.state.useWindowKeyDown}

    
    />
    <div className='slidegallery-sandbox'>

  </div>
</section>);

}


  _onImageClick(event) {
   // console.debug('clicked on image', event.target, 'at index', this._imageGallery.getCurrentIndex());
  }

  _onImageLoad(event) {
    //console.debug('loaded image', event.target.src);
  }

  _onSlide(index) {
    this._resetVideo();
    //console.debug('slid to index', index);
  }

  _onPause(index) {
    //console.debug('paused on index', index);
  }

  _onScreenChange(fullScreenElement) {
    //console.debug('isFullScreen?', !!fullScreenElement);
  }

  _onPlay(index) {
    //console.debug('playing from index', index);
  }

  _handleInputChange(state, event) {
    if (event.target.value > 0) {
      this.setState({[state]: event.target.value});
    }
  }

  _handleCheckboxChange(state, event) {
    this.setState({[state]: event.target.checked});
  }

  _handleThumbnailPositionChange(event) {
    this.setState({thumbnailPosition: event.target.value});
  }


  _resetVideo() {

    this.setState({showVideo: {}});

    // if (this.state.showPlayButton) {
    //   this.setState({showGalleryPlayButton: true});
    // }

    if (this.state.showFullscreenButton) {
      this.setState({showGalleryFullscreenButton: true});
    }
  }

  _toggleShowVideo(url) {
    const showVideo = this.state;
    this.setState({
      showVideo: {
        ...showVideo,
        [url]: !showVideo[url]
      }
    });

    if (!showVideo[url]) {
      if (this.state.showFullscreenButton) {
        this.setState({showGalleryFullscreenButton: false});
      }
    }
  }

  _renderVideo(item) {
    return (
      <div>
        {
            <div className='video-wrapper'>
                <a
                  className='close-video'
                  onClick={this._toggleShowVideo.bind(this, item.embedUrl)}
                >
                </a>
                <iframe
                  width='560'
                  height='315'
                  src={item.embedUrl}
                  frameBorder='0'
                  allowFullScreen
                >
                </iframe>
            </div>
        }
      </div>
    )}
}