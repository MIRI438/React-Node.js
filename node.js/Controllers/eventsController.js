const Event = require('../Models/productionTypeModel');
const { model } = require('mongoose');
const express = require('express');
const router = express.Router();
router.use(express.json());



//מחזיר את כל האירועים
router.get('/', async (req, res) => {
    try{
        const event = await Event.find()
        res.json(event);
    }catch (error){
        res.status(500).json({message : 'not found event'});
    }
});


// מחזיר ארוע אחד לפי ID
router.get('/:id', async (req, res) => {
    try{
        const event = await Event.findOne({_id: req.params.id})
        res.json(event);
    }catch (error){
        res.status(500).json({message : 'id not found'});
    }
});


// יצירת ארוע חדש
router.post('/', async (req, res) => {
    try{
        const {id, name, details, producerID} = req.body;
        const newEvent = await Event.create({
            id: id,
            name: name,
            details: details,
            producerID: producerID
        });

        res.status(201).json({ message: 'Event created successfully', event: newEvent });         
    }catch (error){
        res.status(500).json({ message: 'Error creating event', error: error.message });
    }
});


// עדכון ארוע לפי ID
router.put('/:id', async (req, res) => {
    try {
        const { name, details, producerID } = req.body;
        
        const eventForUpdate = await Event.findOneAndUpdate(
            { _id: req.params.id },  // כאן יש לתקן ל-_id
            { name, details, producerID },
            { new: true }  // מחזיר את האובייקט לאחר העדכון
        );

        if (!eventForUpdate) {
            return res.status(404).json({ message: 'Event not found' });
        }

        res.status(201).json({ message: 'Event update successfully', event: eventForUpdate });         

    } catch (error) {
        res.status(500).json({ message: 'Error updating event', error: error.message });
    }
});


//מחיקת אירוע לפי id
router.delete('/:id', async (req, res) => {
    try {
        const event = await Event.findByIdAndDelete({_id: req.params.id}); // לא צריך אובייקט {id: ...}
        
        if (!event) {
            return res.status(404).json({ message: 'Event not found' }); // אם לא נמצא אירוע
        }

        res.status(200).json({ message: 'Event deleted successfully', event }); // שולחים את האירוע שנמחק
    } catch (error) {
        res.status(500).json({ message: 'Error deleting event', error: error.message });
    }
});
module.exports = router;
