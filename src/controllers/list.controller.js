import { List } from "../models/associations.js";
import { listCreateSchema } from "../schemas/list.create.schema.js";
import { listUpdateSchema } from "../schemas/list.update.schema.js";

export const listController = {

  async getAll(_, res){
    // On récupère toutes les listes
    const lists = await List.findAll();

    // On renvoi la liste des listes
    // Par défaut le status est 200, donc on ne le précise pas
    // On utilise la méthode json de l'objet res pour renvoyer une réponse au format JSON
    res.json(lists);
  },

  async getOne(req, res, next){
    // On récupère l'id de la liste à récupérer
    // const id = req.params.id; // ou equivalent ci-dessous
    // @see : https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
    const { id } = req.params;

    // Vu que je me suis chargé de la vérification au niveau du controller, je sais que c'est un nombre
    /*
      if(isNaN(id)){
        return res.status(404).json({error: 'Invalid id'});
      }
      */
    const list = await List.findByPk(id);

    if(!list){
      return next();
    }

    res.json(list);
  },

  async create(req, res){
    // On doit vérifier les données
    const inputData = req.body;

    await listCreateSchema.parseAsync(inputData);

    // Je veux récupérer la liste créer par sequelize pour la présenté à l'utilisateur en réponse, donc je stocke le retour de la requête sequelize dans une variable
    const list = await List.create(inputData);

    // On se focalise toujours sur la réponse à la demande, ici on nous demande de créer une liste, on doit répondre en fonction en fonction cette demande. ici on va renvoyer la liste créer afin de préciser l'id et les date généré automatiquements.
    // On créer une resource donc on peut renvoi le status 201 CREATED
    res.status(201).json(list);
  },

  async update(req, res, next){
    const id = req.params.id;
    const inputData = req.body;

    await listUpdateSchema.parseAsync(inputData);

    // Afin de mettre à jour et de vérifier que la liste existe, on a 2 techniques possibles : 
    // - Soit on récupère la liste, on vérifie qu'elle existe et on la met à jour
    // Avantages : On peut vérifier que la liste existe et du coup éviter de faire une mise à jour inutile
    // Inconvénients : On fait 2 requêtes à la base de données
    // - Soit on utilise la méthode update de sequelize qui met à jour une liste en fonction de critères de recherche et on vérifie le nombre de lignes affectées
    // Avantages : On fait une seule requête à la base de données
    // Inconvénients : On ne peut pas savoir si c'est le fait que l'id n'existait pas ou qu'auncune donnée n'a été modifiée qui a provoqué le retour de 0
    // Voir exemple dans le fichier /docs/resources/sql/update.sql

    // On préfera utilisé la première technique pour éviter de faire une mise à jour inutile et fournir un message d'erreur plus précis
    const list = await List.findByPk(id);

    if(!list){
      return next();
    }

    await list.update(inputData);

    res.json(list);

  },

  async delete(req, res, next){
    const id = req.params.id;

    const list = await List.findByPk(id);

    if(!list){
      return next();
    }

    await list.destroy();

    // On renvoi un status 204 NO CONTENT car on a supprimé une resource et on ne peut pas renvoyer de contenu
    res.status(204).json();
  }

};