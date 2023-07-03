const BoxRepository = require('../repositories/boxRepository');

class BoxService {
  // Méthode pour créer une nouvelle box
  static async createBox(message) {
    try {
      const words = message.split(/[.,]/);
      const createdWords = [];
  
      for (const word of words) {
        const trimmedWord = word.trim();
        if (trimmedWord.length > 0) {
          const createdWord = await BoxRepository.createBox(trimmedWord);
          createdWords.push(createdWord);
        }
      }
  
      return createdWords;
    } catch (error) {
      throw new Error(`Unable to create box: ${error}`);
    }
  }

  // Méthode pour récupérer une box par son ID
  static async getBoxById(boxId) {
    try {
      const box = await BoxRepository.getBoxById(boxId);
      return box;
    } catch (error) {
      throw new Error(`Unable to get box: ${error}`);
    }
  }

  // Méthode pour mettre à jour le message d'une box
  static async updateBoxMessage(boxId, newMessage) {
    try {
      const updatedBox = await BoxRepository.updateBoxMessage(boxId, newMessage);
      return updatedBox;
    } catch (error) {
      throw new Error(`Unable to update box message: ${error}`);
    }
  }

  // Méthode pour supprimer une box
  static async deleteBox(boxId) {
    try {
      const deletedBox = await BoxRepository.deleteBox(boxId);
      return deletedBox;
    } catch (error) {
      throw new Error(`Unable to delete box: ${error}`);
    }
  }
}

module.exports = BoxService;
