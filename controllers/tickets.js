const Flight = require('../models/flight');
const Ticket = require('../models/ticket');

module.exports = {
    new: newTicket,
    create,
    addTicket
}

function addTicket(req, res) {
  // Ticket.find({flight: flight._id}, function(err, tickets){
    //   flight.ticket.push(req.body.ticketId);
    //   flight.save(function(err) {
    //     res.redirect(`/flights/${flight._id}`);
    //   });
    // });
    Flight.findById(req.params.id, function(err, flight){
      req.body.flight = flight;
      const newTicket = new Ticket(req.body)
      newTicket.save(function (err) {
        res.redirect(`/flights/${flight._id}`);
      })
    })
  }

function newTicket(req, res) {
    res.render('tickets/new', {flightId: req.params.id});
}

function create(req, res) {
  Ticket.create(req.body, function (err, ticket) {
    res.redirect('/ticket/new');
  });
}