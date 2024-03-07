"use server"

const DataModel = require("./model");

export default async function editContact(contact) {
    const response = await DataModel.Contact.update({'FirstName': contact.FirstName, 'LastName': contact.LastName, 'Email': contact.Email, 'Phone': contact.Phone, 'Address': contact.Address }, {where: { 'ContactID': contact.ContactID}}).then((result) => {return(result)});
    return(response);
}