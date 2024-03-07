"use client"

import React from 'react'
import getAllContacts from "@/app/data/getAllContacts";
import Table from 'react-bootstrap/Table'
import Button from 'react-bootstrap/Button'

export default function ContactTable() {

    const [contacts, setContacts] = React.useState([])

    const getContacts = async() => {
        const payload = await getAllContacts();
        setContacts(payload)
    }

    React.useEffect(()=> {
        getContacts();
    },[])

    React.useEffect( () => {
        console.log(contacts)
    },[contacts])

    if (contacts.length === 0) {
        return <p>No records.</p>;
    }

    return(
        <Table striped bordered hover>
            <thead>
            <tr>
                <th>Contact ID</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Address</th>
                <th>Created</th>
                <th>Modified</th>
                <th>Actions</th>
            </tr>
            </thead>
            <tbody>
            {contacts.map((contact: any) => (
                <tr key={contact.ContactID}>
                    <td>{contact.ContactID}</td>
                    <td>{contact.FirstName || 'N/A'}</td>
                    <td>{contact.LastName || 'N/A'}</td>
                    <td>{contact.Email || 'N/A'}</td>
                    <td>{contact.Phone || 'N/A'}</td>
                    <td>{contact.Address || 'N/A'}</td>
                    <td>{new Date(contact.DateTimeCreated).toLocaleString()}</td>
                    <td>{new Date(contact.DateTimeModified).toLocaleString()}</td>
                    <td><Button size="sm" href={`/contacts/${contact.ContactID}/`}>Manage</Button></td>
                </tr>
            ))}
            </tbody>
        </Table>
    )
}