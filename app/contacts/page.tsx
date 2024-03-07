"use client";
import React from "react";
import NavDropdown from "react-bootstrap/NavDropdown";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ContactTable from "@/app/contacts/contactTable";

export default function Contacts() {
    return (
        <div className="container-fluid">
            <Row>
                <Col className="col-md-12 ps-0 pe-0">
                    <Navbar sticky="top" expanded className="bg-info-subtle border-bottom">
                        <Navbar.Brand className="ps-3" href="#home">Recruit Master</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="me-auto">
                                <Nav.Link href="#home">Home</Nav.Link>
                                <Nav.Link href="#link">Link</Nav.Link>
                                <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                                    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.2">
                                        Another action
                                    </NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                    <NavDropdown.Divider/>
                                    <NavDropdown.Item href="#action/3.4">
                                        Separated link
                                    </NavDropdown.Item>
                                </NavDropdown>
                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>
                </Col>
            </Row>
            <Row>
                <Col className="col-md-2 bg-dark-subtle ps-0 pe-0 border-end">
                    <Nav defaultActiveKey="/contacts" className="flex-column">
                        <Nav.Link href="/">Applications</Nav.Link>
                        <Nav.Link eventKey="/contacts">Contacts</Nav.Link>
                        <Nav.Link eventKey="link-2">Listings</Nav.Link>
                        <Nav.Link eventKey="link-3">Positions</Nav.Link>
                        <Nav.Link eventKey="link-4">Disciplines</Nav.Link>
                    </Nav>
                </Col>
                <Col className="col-md-10 ps-0 pe-0">
                    <Nav variant="underline" className="bg-dark-subtle border-bottom" defaultActiveKey="/contacts">
                        <Nav.Item className="ps-3">
                            <Nav.Link href="/contacts" eventKey="/contacts">All Contacts</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="/contacts/create" href="/contacts/create">Create New Contact</Nav.Link>
                        </Nav.Item>
                    </Nav>
                    <br></br>
                    <div className="container-fluid ps-3 pe-3">
                        <h3>All Contacts</h3>
                        <ContactTable />
                    </div>
                </Col>
            </Row>
        </div>
    );
}
