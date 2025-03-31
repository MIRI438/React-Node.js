# React-Node.js Project

## התקנה והרצה

### **1. התקנת התלויות**
יש לוודא שכל התלויות מותקנות לפני ההפעלה:
```sh
npm install
```

### **2. הפעלת השרת (Backend)**
במערכת Windows, ניתן להפעיל את השרת באמצעות הקובץ `start.bat`:
1. ודא שהקובץ `start.bat` קיים בתיקיית הפרויקט עם התוכן הבא:
   ```bat
   @echo off
   cd backend
   node server.js
   ```
2. לחץ לחיצה כפולה על `start.bat` להפעלת השרת.
3. אם ההפעלה הצליחה, תראה הודעה כמו:
   ```
   MongoDB connected
   Server running on port 3000
   ```

במערכת **Linux/Mac**, ניתן להפעיל את השרת כך:
```sh
cd backend
node server.js
```

### **3. הפעלת ה-Frontend (React)**
במערכת Windows/Linux/Mac:
```sh
cd frontend
npm start
```

### **4. התחברות למסד הנתונים MongoDB**
ודא שהחיבור למסד הנתונים מוגדר בקובץ `server.js` כך שהאפליקציה תוכל להתחבר אליו מכל מחשב:
```js
const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://username:password@cluster0.mongodb.net/dbname?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.log('MongoDB connection error:', err));
```

**שימו לב:** יש להחליף את `username`, `password` ו-`dbname` בפרטי החיבור הנכונים.

### **5. בדיקות**
לאחר ההפעלה, ניתן לבדוק שהשרת פועל על ידי כניסה לכתובת:
```
http://localhost:3000
```

אם מדובר בפרויקט עם React, יש לבדוק גם את כתובת ה-Frontend (לרוב `http://localhost:5173` או `http://localhost:3001`).

