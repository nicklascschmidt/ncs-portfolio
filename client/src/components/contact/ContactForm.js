import React from "react";
import { Button, Form, FormGroup, Label, Input, FormText, Col } from 'reactstrap';

class ContactForm extends React.Component {
  constructor(props) {
      super(props);

      this.state = {
        submitterSubject: '',
        submitterMessage: '',
        mailTo: 'mailto',
        emailName: 'nicklas.c.schmidt',
        emailDomain: 'gmail.com',
        completeMailTo: null,
      };
  }

  componentDidMount = () => {
    this.setState({
      completeMailTo: this.state.hiddenMailTo
    });
  };

  handleChange = event => {
    let { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleSubmit = event => {
    event.preventDefault();

    let { mailTo, emailName, emailDomain, submitterSubject, submitterMessage } = this.state;
    this.setState({
      completeMailTo: `${mailTo}:${emailName}@${emailDomain}?subject=${submitterSubject}&body=${submitterMessage}`
    }, () => {    
      window.location.href = this.state.completeMailTo;
    });
  }


  render() {
    return (
      <Form>
        <FormGroup row>
          <Label for="formSubject" sm='3' md='2'>Subject</Label>
          <Col sm='9' md='10'>
            <Input type="text" name="submitterSubject" id="formSubject" placeholder="ex. Interview Scheduling" value={this.state.submitterSubject} onChange={event => this.handleChange(event)} />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="formMessage" sm='3' md='2'>Message</Label>
          <Col sm='9' md='10'>
            <Input type="textarea" name="submitterMessage" id="formMessage" placeholder="ex. You rock and we want to hire you!" value={this.state.submitterMessage} onChange={event => this.handleChange(event)} />
          </Col>
        </FormGroup>
        <FormGroup className='text-left'>
          <Button className='mx-auto' onClick={this.handleSubmit}>Submit*</Button>
          <Label className='m-2'><FormText color="muted">*submit will open external default mail client</FormText></Label>
        </FormGroup>
      </Form>
    );
  }
}

export default ContactForm;
