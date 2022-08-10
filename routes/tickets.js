const express = require('express');
const router = express.Router();
const ticketsCtrl = require('../controllers/tickets');


router.post('/movies/:id/tickets', ticketsCtrl.createTicket);


module.exports = router;