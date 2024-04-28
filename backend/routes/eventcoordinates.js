// // backend/server.js
// console.log("Starting server...");
// const express = require('express');
// const bodyParser = require('body-parser');

// const app = express();
// const PORT = process.env.PORT || 3000;

// app.use(bodyParser.json());

// app.post('/api/storeCoordinates', (req, res) => {
//   const { latitude, longitude } = req.body;
//   console.log('Latitude:', latitude);
//   console.log('Longitude:', longitude);
//   console.log("Starting server...");
//   res.status(200).send('Coordinates stored successfully.');
// });

// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });
// console.log("Starting server...");
// module.exports = router;