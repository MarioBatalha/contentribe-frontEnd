const nodemailer = require('nodemailer');
const { host, port, user, pass} = require('../config/mail.json');
const path = require('path');

const hbs = require('nodemailer-express-handlebars')

const transport = nodemailer.createTransport({
    host,
    port,
    auth: {
      user,
      pass
    }
  });

transport.use('compile', hbs({
    viewEngine: 'handlebars',
    viewPath: path.resolve('./src/assets/resource/mail/'),
    extName: '.html',
}));

  module.exports = transport;