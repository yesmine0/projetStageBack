const BoxService = require('../services/boxService');

class BoxController {
  // Méthode pour créer une nouvelle box
  static async createBox(req, res) {
    try {
      const message = req.body.message; // Assuming the message is passed in the request body
      const createdWords = await BoxService.createBox(message); // <-- Update the method call to BoxService.createBox
      res.json(createdWords);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
  // Méthode pour récupérer une box par son ID
  static async getBoxById(req, res) {
    try {
      const { boxId } = req.params;
      const box = await BoxService.getBoxById(boxId);
      if (box) {
        res.json(box);
      } else {
        res.status(404).json({ error: 'Box not found' });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  // Méthode pour mettre à jour le message d'une box
  static async updateBoxMessage(req, res) {
    try {
      const { boxId } = req.params;
      const { newMessage } = req.body;
      const updatedBox = await BoxService.updateBoxMessage(boxId, newMessage);
      if (updatedBox) {
        res.json(updatedBox);
      } else {
        res.status(404).json({ error: 'Box not found' });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  // Méthode pour supprimer une box
  static async deleteBox(req, res) {
    try {
      const { boxId } = req.params;
      const deletedBox = await BoxService.deleteBox(boxId);
      if (deletedBox) {
        res.json({ message: 'Box deleted successfully' });
      } else {
        res.status(404).json({ error: 'Box not found' });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}

module.exports = BoxController;