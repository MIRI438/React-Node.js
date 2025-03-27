const { model } = require('mongoose');
const Producers = require('../Models/ProducersModel');
const express = require('express');
const router = express.Router();
router.use(express.json());


// מקבל id ומחזיר את הפרטיים של המפיק עם id שקיבל
router.get('/:id', async (req, res) => {
    try{
        const producer = await Producers.findOne({_id: req.params.id });
        res.json(producer);
    }catch (error){
        res.status(500).json({message : 'Producer not found '});
    }
});


// יוצר מפיק חדש
router.post('/', async (req, res) => {
    try{
        const {name, email, phone, shortDescription} = req.body;
        const newProducer = await Producers.create({
            name: name,
            email: email,
            phone: phone,
            shortDescription: shortDescription
        });

        res.status(201).json({ message: 'Producer created successfully', producer: newProducer });    
    }catch (error){
        res.status(500).json({ message: 'Error creating producer', error: error.message });
    }
});


// מקבל אמייל ומחפש את המפיק ומעדכן את הפרטיים שלו כמו שמתקבל
router.put('/:id', async (req, res) => {
    try{
        const {name, email, phone, shortDescription} = req.body;
        const producerForUpdate = await Producers.findOneAndUpdate(
            {_id: req.params.id},
            {name: name, email: email, phone: phone, shortDescription: shortDescription},
            {new: false}
        ); 

        res.json({
            message: 'Producer updated successfully',
            producer: producerForUpdate
        });

    }catch (error){
        res.status(500).json({ message: 'Error updating producer', error: error.message });
    }
});

module.exports = router;



