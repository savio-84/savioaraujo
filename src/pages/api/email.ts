import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  host: 'smtp-mail.outlook.com',
  port: 587,
  secure: false,
  auth: {
    user: 'savioaraujo34@hotmail.com',
    pass: '3d3ba8c06723a3a7697bba0636a1f4304787aeb0',
  },
});

export { transporter };