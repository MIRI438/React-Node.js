const mongoose = require('mongoose');


//חיבור למסד נתונים - mongoDB
mongoose.connect("mongodb+srv://m0534198438:Ab327824371@cluster0.3crxy.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0",)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log('MongoDB connection error: ', err));
