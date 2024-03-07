"use server"

const DataModel = require("./model");

export default async function createContact(contact) {
    const response = await DataModel.Contact.create({'FirstName': contact.FirstName, 'LastName': contact.LastName, 'Email': contact.Email, 'Phone': contact.Phone, 'Address': contact.Address }).then((result) => {return(result)});
    return(response._options);
}