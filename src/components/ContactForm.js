import emailjs from 'emailjs-com';
import React  from 'react';

export default function ContactUs (props) {

let msg = props.data;
  function sendEmail(e)
  {
    e.preventDefault();
    msg("sending message...");

    //todo: shift to github environment with CI
    emailjs.sendForm('service_v8siwlh', 'template_m3v69e8', e.target, 'CqMUq6DbCOcRhkQJJ')
      .then((result) => {
          msg("Message successfully sent");
          console.log(result.text);
      }, (error) => {
         msg("Failed to send message");
          console.log(error.text);
      });
  }

  return(
    <div>
        <div className="container">
        <form onSubmit={sendEmail}>
                <div className="row pt-5 mx-auto">
                    <div className="col-8 form-group mx-auto">
                        <input type="text" className="form-control" placeholder="Name" name="from_name"/>
                    </div>
                    <div className="col-8 form-group pt-2 mx-auto">
                        <input type="email" className="form-control" placeholder="Email Address" name="from_email"/>
                    </div>
                    <div className="col-8 form-group pt-2 mx-auto">
                        <textarea className="form-control" id="" cols="30" rows="8" placeholder="Your message" name="message"></textarea>
                    </div>
                    <div className="col-8 pt-3 mx-auto">
                        <input type="submit" className="btn btn-info" value="Send Message"></input>
                    </div>
                </div>
            </form>
        </div>
    </div>
)
}