"use server"

import {where} from "sequelize";

const DataModel = require("./model");

export default async function getOneContact(id) {
    const identifier = await id
    console.log(identifier)
    const response = await DataModel.Contact.findOne({where: {'ContactID':identifier }}).then((result) => {return(result)});
    const payload = response.get({ plain: true });
    console.log(payload)
    return(payload);
}