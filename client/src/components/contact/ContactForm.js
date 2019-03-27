import React from "react";
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

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
        <FormGroup>
          <Label for="formSubject">Subject</Label>
          <Input type="text" name="submitterSubject" id="formSubject" placeholder="ex. Interview Scheduling" value={this.state.submitterSubject} onChange={event => this.handleChange(event)} />
        </FormGroup>
        <FormGroup>
          <Label for="formMessage">Message</Label>
          <Input type="textarea" name="submitterMessage" id="formMessage" placeholder="ex. You rock and we want to hire you!" value={this.state.submitterMessage} onChange={event => this.handleChange(event)} />
        </FormGroup>
        <Button onClick={this.handleSubmit}>Submit*</Button>
        <FormText color="muted">
          *submit will open external default mail client
        </FormText>
      </Form>
    );
  }
}

export default ContactForm;
