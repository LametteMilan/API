
import { List } from "../models/associations.js";

export const listController = {

  // Si jamais un des paramètres n'est pas utilisé, on peut utiliser l'underscore pour le nommer. et ainsi conserver une signature de fonction cohérente.
  // eslint-disable-next-line no-unused-vars
  async getAll(_, res){
    // Un controlleur à plusieurs tâches à réaliser ( à adapter en fonction du controller, certaines étapes peuvent être omises)
    // 1. Récupérer les données utilisateurs
    // Ce qui provient de req.query, req.body, req.params
    // 2. Analyser/vérifier les données entrantes, si jamais l'une d'entre-elle est manquante ou incorrecte, on renvoi une erreur à l'utilisateur, et le travail du controlleru est terminé.
    // 3. Récupérer les données en base de données nécessaire à la réponse
    // 4. Optionnellement on fait intervenir un service de traitement (par exemple un algorithme de tri, de recherche, de calcul, etc...)
    // 5. On renvoi une réponse à l'utilisateur
  },

  async create(req, res){
    try {
      // On doit vérifier les données
      const inputData = req.body;

      if(!inputData.title){
        // le status 400 est une erreur utilisateur, meme pour une erreur on répond en json
        // On oubli pas de return pour interrompre la fonction après la réponse, et ne pas faire d'instruction inutiles ou non voulues.
        return res.status(400).json({error: 'Missing title'});
      }

      if(inputData.position && isNaN(inputData.position)){
        return res.status(400).json({error: 'Position must be a number'});
      }

      // Je veux récupérer la liste créer par sequelize pour la présenté à l'utilisateur en réponse, donc je stocke le retour de la requête sequelize dans une variable
      const list = await List.create(inputData);

      // On se focalise toujours sur la réponse à la demande, ici on nous demande de créer une liste, on doit répondre en fonction en fonction cette demande. ici on va renvoyer la liste créer afin de préciser l'id et les date généré automatiquements.
      // On créer une resource donc on peut renvoi le status 201 CREATED
      res.status(201).json(list);
    }catch(err){
      // Dans le cas d'un serreur de l'application (ici un souci de connexion avec la BDD) on renvoi un status 500. Afin que l'utilisateur soit au courant que ce n'est pas de sa faute.
      console.error(err);
      res.status(500).json({error: 'Internal Server Error'});
    }
  }

};