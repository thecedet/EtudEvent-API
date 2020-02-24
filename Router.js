const express = require("express")

const account = require("./routes/account")
const annonce = require("./routes/annonce")

const mail = require("./utils/sendMail")

exports.router = (() => {

    const Router = express.Router()

    Router.route("/account/create").post(account.create)
    Router.route("/account/validate/:token").get(account.validate)
    Router.route("/account/connect").post(account.connect)
    Router.route("/account/list").get(account.list)

    Router.route("/annonce/").get(annonce.select)

    return Router
})()