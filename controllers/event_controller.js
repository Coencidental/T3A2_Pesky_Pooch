const Event = require('../database/models/event_model')
const cloudinaryUpload = require('../middleware/cloudinaryUpload')

getEvents = async (req, res) => {
  const events = await Event.find()
  if (events) {
    res.json(events)
  } else {
    res.status(500).json({ errors: "Unable to retrieve events from MongoDB" })
  }
}

updateEvent = async (req, res) => {
  const event = await Event.findByIdAndUpdate(req.body._id, {
    name: req.body.name,
    description: req.body.description,
    location: req.body.location
  })
  .then(res => res.status(200))
  .catch(err => {
    console.log(err)
    res.status(500).json({ errors: "Unable to update event" })
  })
}

deleteEvent = async (req, res) => {
  await Event.findByIdAndDelete(req.headers.eventid)
  .then(res => res.send("Successfully deleted event from MongoDB"))
  .catch(err => {
    console.log(err)
    res.status(500).json({ errors: "Unable to delete event from MongoDB" })  
  })
}

newEvent = async (req, res) => {
  const newEvent = new Event({
    name: req.body.name,
    description: req.body.description,
    location: req.body.location
  })
  const uniqId = newEvent._id

  if (req.file) {
    await cloudinaryUpload(req.file)
  }

  await newEvent.save()
  .then((event) => {
    res.status(201).json(newEvent)
    console.log(event)
  })
  // .then(console.log(Event.findById()))
  .catch(err => {
    console.log(err)
    res.status(500).json({ errors: "Could not save new event to MongoDB" })  
  }) 
}

module.exports = {
  getEvents,
  newEvent,
  deleteEvent, 
  updateEvent
}