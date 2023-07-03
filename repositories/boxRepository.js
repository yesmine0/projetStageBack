const mongoose = require('mongoose');
const Box = require('../models/box');

class BoxRepository {
  // Méthode pour créer une nouvelle box
  static async createBox(message) {
    try {
      const box = new Box({ message });
      const createdBox = await box.save();
      return createdBox;
    } catch (error) {
      throw new Error(`Unable to create box: ${error}`);
    }
  }

  // Méthode pour récupérer une box par son ID
  static async getBoxById(boxId) {
    try {
      const box = await Box.findById(boxId);
      return box;
    } catch (error) {
      throw new Error(`Unable to get box: ${error}`);
    }
  }

  // Méthode pour mettre à jour le message d'une box
  static async updateBoxMessage(boxId, newMessage) {
    try {
      const box = await Box.findByIdAndUpdate(boxId, { message: newMessage }, { new: true });
      return box;
    } catch (error) {
      throw new Error(`Unable to update box message: ${error}`);
    }
  }

  // Méthode pour supprimer une box
  static async deleteBox(boxId) {
    try {
      const deletedBox = await Box.findByIdAndDelete(boxId);
      return deletedBox;
    } catch (error) {
      throw new Error(`Unable to delete box: ${error}`);
    }
  }
}

module.exports = BoxRepository;
