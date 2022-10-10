const express = require('express')
 
const path = require('path')
 
const app = express()
 
const PORT = process.env.PORT || 3000
 
app.use(express.static(path.join(__dirname + "public")))
 
app.listen(PORT)

/*// Server.js contains routes for the contact form on the "Get in touch" page. 

const express = require("express");
const router = express.Router();
const cors = require("cors");
const nodemailer = require("nodemailer");
const app = express();

require('dotenv').config()

app.use(cors());
app.use(express.json());
app.use("/", router);
app.listen(5000, () => console.log("Server Running"));

const contactEmail = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.REACT_APP_EMAIL,
      pass: process.env.REACT_APP_PASSWORD,
    },
  });
  
  contactEmail.verify((error) => {
    if (error) {
      console.log(error);
    } else {
      console.log("Ready to Send");
    }
  });

  router.post("/contact", (req, res) => {
    const name = req.body.name;
    const email = req.body.email;
    const message = req.body.message; 
    const mail = {
      from: name,
      to: "dlowryinquiries@gmail.com",
      subject: "Contact Form Submission",
      html: `<p>Name: ${name}</p>
             <p>Email: ${email}</p>
             <p>Message: ${message}</p>`,
    };
    contactEmail.sendMail(mail, (error) => {
      if (error) {
        res.json({ status: "ERROR" });
      } else {
        res.json({ status: "Sent!" });
      }
    });
  });*/