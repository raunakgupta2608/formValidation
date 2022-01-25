import React, { useEffect, useState } from 'react';
import '../App.css';
import { Button, Form, FormGroup, Label, Input, Alert, ListGroup, ListGroupItem, Badge } from 'reactstrap';

function FormComponent() {

  const initalValues = {username: '', age: '', email: '', phone: ''};
  const [formValue, setFormValue] = useState(initalValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const {username, age, email, phone} = formValue;

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormValue({...formValue, [name]: value})
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValue));
    setIsSubmit(true)
  }

  useEffect(() => {
    console.log(formErrors)
    if(Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValue)
      // setTimeout(() => {
      //   setFormValue(initalValues)
      //   setFormErrors({})
      //   setIsSubmit(false)
      // },5000)
    }
  }, [formErrors])
  const validate = (values) => {
    const errors = {};
    const regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    const regexPhone = /[0-9]{10}/
    const regexName = /^[a-z]*$/
    const {username, age, email, phone} = values;

    if(!username) {
      errors.username = "Name is required"
    } else if(!regexName.test(username)) {
      errors.username = "Only Alphabets without space allowed"
    }
    if(!age) {
      errors.age = "Age is required"
    } else if(age > 150 || age <= 0) {
      errors.age = "Age cannot be greater than 150 or less than or equal to 0"
    }
    if(!email) {
      errors.email = "Email is required"
    } else if(!regexEmail.test(email)) {
      errors.email = "Please specify the email in correct format"
    }
    if(!phone) {
      errors.phone = "Phone is required"
    } else if(!regexPhone.test(phone)) {
      errors.phone = "Please enter a valid 10 digit Phone Number"
    }
    return errors
  }

  return (
  <>
    <div className='form_container'>
    <h4>Form</h4>
    <Form className="lg-8" onSubmit={handleSubmit}>
        <FormGroup>
          <Label for="username">Name</Label>
          <Input type="username" name="username" id="username" onChange={handleChange} value={username}/>
        </FormGroup>
        {formErrors.username ? <Alert color="danger">{ formErrors.username  }</Alert> : ''}
        <FormGroup>
          <Label for="age">Age</Label>
          <Input type="number" name="age" id="age" onChange={handleChange} value={age}/>
        </FormGroup>
        {formErrors.age ? <Alert color="danger">{ formErrors.age  }</Alert> : ''}
        <FormGroup>
          <Label for="email">Email</Label>
          <Input type="text" name="email" id="email" onChange={handleChange} value={email}/>
        </FormGroup>
        {formErrors.email ? <Alert color="danger">{ formErrors.email  }</Alert> : ''}
        <FormGroup>
          <Label for="phone">Phone Number</Label>
          <Input type="tel" id="phone" name="phone" onChange={handleChange} value={phone}/>
        </FormGroup>
        {formErrors.phone ? <Alert color="danger">{ formErrors.phone  }</Alert> : ''}
        <Button type='submit'>Submit</Button>
    </Form> 
    </div>

    {isSubmit ? <div className='displayData'>
        <ListGroup>
            <ListGroupItem>Name : <Badge color="secondary">{ username }</Badge></ListGroupItem>
            <ListGroupItem>Age : <Badge color="secondary">{ age }</Badge></ListGroupItem>
            <ListGroupItem>Email : <Badge color="secondary">{ email }</Badge></ListGroupItem>
            <ListGroupItem>Phone :<Badge color="secondary">{ phone }</Badge></ListGroupItem>
        </ListGroup>
    </div> : ''}
  </> 
  )
}

export default FormComponent;