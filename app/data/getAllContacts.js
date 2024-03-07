"use server"

const DataModel = require("./model");

export default async function getAllContacts() {
    const response = await DataModel.Contact.findAll().then((result) => {return(result)});
    const payload = response.map(contact => contact.get({ plain: true }));
    console.log(payload)
    return(payload);
}