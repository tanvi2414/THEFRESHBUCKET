const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const twilio = require('twilio');

const app = express();
const port = 5000;

// Twilio Credentials
const accountSid = 'ACcc148235fa5faf93ed0c2a71109c4d14';
const authToken = 'b6c4ccecc8f238122cf29b777995b7fb';
const client = new twilio(accountSid, authToken);
const fromPhoneNumber = '+14153673160'; // Your Twilio phone number

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Endpoint to send SMS
app.post('/api/send-sms', (req, res) => {
  const { name, email, phone, selectedProducts } = req.body;

  // Example logic to determine the phone number to send the SMS to
  const toPhoneNumber = '+918275921843'; // Replace with your verified number

  // Twilio SMS sending logic
  client.messages
    .create({
      body: `Hello I am ${name}, I have selected: ${selectedProducts}. Email: ${email}, Phone: ${phone}`,
      from: fromPhoneNumber, // Use the correct variable name
      to: toPhoneNumber,
    })
    .then((message) => {
      console.log('SMS sent successfully:', message.sid);
      res.send({ success: true, message: 'SMS sent successfully' });
    })
    .catch((error) => {
      console.error('Failed to send SMS:', error);
      res.status(500).send({ success: false, message: 'Failed to send SMS', error });
    });
});


app.use(express.static('public', {
  setHeaders: (res, path, stat) => {
    if (path.endsWith('.js')) {
      res.setHeader('Content-Type', 'application/javascript');
    }
  }
}));

// Start server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
