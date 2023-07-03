const express = require('express');
const BoxController = require('../controllers/boxController');

const router = express.Router();

// Route pour créer une nouvelle box
router.post('/boxes', BoxController.createBox);

// Route pour récupérer une box par son ID
router.get('/boxes/:boxId', BoxController.getBoxById);

// Route pour mettre à jour le message d'une box
router.put('/boxes/:boxId', BoxController.updateBoxMessage);

// Route pour supprimer une box
router.delete('/boxes/:boxId', BoxController.deleteBox);

module.exports = router;
