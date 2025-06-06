const express = require('express');
const multer = require('multer');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(cors());
app.use('/uploads', express.static('uploads'));

const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, 'uploads/'),
  filename: (req, file, cb) => {
    const id = req.query.id || 'unknown';
    cb(null, `player_${id}.jpg`);
  }
});
const upload = multer({ storage });

app.post('/upload', upload.single('files[]'), (req, res) => {
  res.status(50).send('ok');
});

app.listen(port, () => {
  console.log(`Servidor iniciado en http://127.0.0.1:${port}`);
});




