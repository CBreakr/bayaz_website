//Maybe a form to fill out that sends to my email?
//First name / last name / email / message all required
//-Include link to press kit here as well
import React from 'react'
import { Button, Form } from 'react-bootstrap';
import { SocialIcon } from 'react-social-icons'
import './Component.css'
import './Contact.css'


const Contact = () => {
  return (
    <div id="contact" className='page-wrapper component'>
      <div className=''>
      <h1 className="section-title">Contact</h1>
        <div className="row justify-content-around">
      <div className="col-5" id="contact-content">
      <h3 style={{margin: "3vh auto 3vh auto"}} id='merch'><a id="link" href='https://thenuclears.bandcamp.com/merch'>Buy a record! Buy a shirt! Buy both- Christmas is right around the corner!</a></h3>  
      </div>
      <div className="col-4">
          <Form id='contact-form'>
            <Form.Text>
              <h2 className='content-header page-content'>Send Us A Line!</h2>
              <p className='content-header page-content'>Booking queries, press requests, hate-mail, etc.: This forwards to our band email, so we'll check it and get back to you ASAP!</p>
            </Form.Text>
            <Form.Group className="mb-3" controlId="formBasicFirstName">
              <Form.Label className='form-label page-content'>First Name</Form.Label>
            
              <Form.Control className="formFields" type="text" placeholder="First Name" required/>
            
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicLastName">
              <Form.Label className='form-label page-content'>Last Name</Form.Label>
              <Form.Control className="formFields" type="text" placeholder="Last Name" required/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label className='form-label page-content'>Email address</Form.Label>
                <Form.Control className="formFields" type="email" placeholder="Enter email" required/>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label className='form-label page-content'>Message</Form.Label>
              <Form.Control className="formFields" as="textarea" rows={3}  type="textarea" placeholder="Write Your Message" required/>
            </Form.Group>
            <Button id="form-button" type="submit">
              Fire Away
            </Button>
      </Form>
      </div>
          <div className= "d-flex justify-content-center socialIconContainer">
            <SocialIcon className='socialIcon' url="https://www.facebook.com/bayazband" />
            <SocialIcon className='socialIcon' url="https://twitter.com/TheNuclears" />
            <SocialIcon className='socialIcon' url="https://www.instagram.com/bayazband/" />
            <SocialIcon className='socialIcon' url="https://www.youtube.com/user/bmavericknukes" />
            <SocialIcon className='socialIcon' network="email" url="mailto:bayaztheband@gmail.com" />
          </div>
        </div>
      </div>
    </div>
    
  )
}

export default Contact

