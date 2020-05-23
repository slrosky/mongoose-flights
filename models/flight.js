const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const destinationSchema = new Schema({
  airport: {
    type: String,
    enum: ['AUS', 'DFW', 'DEN', 'LAX' & 'SAN']
    },
  arrival: Date,
});

const flightSchema = new Schema({
    airline: {
      type: String,
      default: 'n/a'
    },
    airport: {
      type: String,
      default: 'DEN',
      enum: ['AUS', 'DFW', 'NEW', 'SAN', 'DEN']
    },
    flightNo: {
      type: Number,
      require: Number,
      default: Number,
      min: 10,
      max: 9999
    },
    departs: {
        type: Date,
        default: function() {
          return new Date().getFullYear();
        },
        min: 2020
      },
      destinations: {
        type: [destinationSchema]
      }
});


module.exports = mongoose.model('Flight', flightSchema);