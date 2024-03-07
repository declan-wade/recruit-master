"use client"

import React, {useEffect} from 'react'
import editContact from "@/app/data/editContact";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import GetOneContact from '@/app/data/getOneContact'

export default function ModifyContactForm({id}: any ) {
    const [response, setResponse] = React.useState({})
    const [isEditing, setIsEditing] = React.useState(false)
    const [contact, setContact] = React.useState({
        FirstName: '',
        LastName: '',
        Email: '',
        Phone: '',
        Address: ''
    });

    const handleLoad = async() => {
        const payload = await GetOneContact(id)
        setContact(payload)
    }

    const handleEdit = () => {
        setIsEditing(true)
    }

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
        editContact(contact)
            .then(result => {setResponse(result)})
        setIsEditing(false)
    };

    React.useEffect(() => {
        console.log(response)
    }, [response])

    React.useEffect(() => {
        handleLoad();
    }, [])

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
                    readOnly={!isEditing}
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
                    readOnly={!isEditing}
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
                    readOnly={!isEditing}
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
                    readOnly={!isEditing}
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
                    readOnly={!isEditing}
                />
            </div>
            <br></br>
            <Button type="submit" className="btn btn-primary" disabled={!isEditing}>Save</Button>
            <>  </>
            <Button onClick={handleEdit} className="btn btn-warning" disabled={isEditing}>Edit</Button>
        </Form>
    );
}
