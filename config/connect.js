const mongoose = require('mongoose');
const dbUrl = 'mongodb://127.0.0.1:27017/test';

mongoose.connect(dbUrl, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connexion réussie à la base de données');
  })
  .catch((error) => {
    console.log('Erreur de connexion à la base de données:', error);
  });