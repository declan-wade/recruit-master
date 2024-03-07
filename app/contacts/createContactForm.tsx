"use client"

import React, {useEffect} from 'react'
import createContact from "@/app/data/createContact";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'


export default function CreateContactForm() {
    const [response, setResponse] = React.useState({})
    const [contact, setContact] = React.useState({
        FirstName: '',
        LastName: '',
        Email: '',
        Phone: '',
        Address: ''
    });

    const handleChange = (e: any) => {
        const { name, value } = e.target;
        setContact(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async(e: any) => {
        e.preventDefault();
        console.log('Submitting contact', contact);
        createContact(contact)
        .then(result => {setResponse(result)})
    };

    React.useEffect(() => {
        console.log(response)
    }, [response])

    return (
        <Form onSubmit={handleSubmit}>
            <div className="form-group">
                <Form.Label for="FirstName">First Name</Form.Label>
                <Form.Control
                    type="text"
                    className="form-control"
                    id="FirstName"
                    name="FirstName"
                    value={contact.FirstName}
                    onChange={handleChange}
                />
            </div>

            <div className="form-group">
                <Form.Label for="LastName">Last Name</Form.Label>
                <Form.Control
                    type="text"
                    className="form-control"
                    id="LastName"
                    name="LastName"
                    value={contact.LastName}
                    onChange={handleChange}
                />
            </div>

            <div className="form-group">
                <Form.Label for="Email">Email</Form.Label>
                <Form.Control
                    type="email"
                    className="form-control"
                    id="Email"
                    name="Email"
                    value={contact.Email}
                    onChange={handleChange}
                />
            </div>

            <div className="form-group">
                <Form.Label for="Phone">Phone</Form.Label>
                <Form.Control
                    type="text"
                    className="form-control"
                    id="Phone"
                    name="Phone"
                    value={contact.Phone}
                    onChange={handleChange}
                />
            </div>

            <div className="form-group">
                <Form.Label for="Address">Address</Form.Label>
                <Form.Control
                    type="text"
                    className="form-control"
                    id="Address"
                    name="Address"
                    value={contact.Address}
                    onChange={handleChange}
                />
            </div>

            <Button type="submit" className="btn btn-primary">Submit</Button>
        </Form>
    );
}
