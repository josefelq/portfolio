const express = require("express"),
  app = express(),
  nodeMailer = require("nodemailer"),
  bodyParser = require("body-parser"),
  PORT = process.env.PORT || 5000;

require("dotenv").config();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const transporter = nodeMailer.createTransport({
  host: "smtp-mail.outlook.com", // hostname
  secureConnection: false, // TLS requires secureConnection to be false
  port: 587, // port for secure SMTP
  tls: {
    ciphers: "SSLv3"
  },
  auth: {
    user: "josefelipeq@live.com",
    pass: "password"
  }
});

transporter.verify((error, success) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Server is ready to take messages");
  }
});

app.post("/send-email", (req, res, next) => {
  const name = req.body.values.name;
  const subject = req.body.values.subject;
  const email = req.body.values.email;
  const message = req.body.values.message;
  const content = `name: ${name} \n email: ${email} \n message: ${message} `;

  const mail = {
    from: name,
    to: "josefelipeq@live.com",
    subject: subject,
    text: content
  };

  res.send(mail);
  /*
  transporter.sendMail(mail, (err, data) => {
    if (err) {
      res.json({
        msg: "fail"
      });
    } else {
      res.json({
        msg: "success"
      });
    }
  });
  */
});

app.use(express.static("public"));
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
  const path = require("path");
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

app.listen(PORT);
