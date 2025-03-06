import { Router } from "express";
import { listController } from "../controllers/list.controller.js";

export const router = new Router();

// En exemple on implémente l'ajout de liste, donc on utilise lé mathode Express/HTTP POST
// Conventionnellement on utilise toujours le nom de l'entité au pluriel pour les routes
// les méthodes HTTP , GET, POST, PUT, DELETE, PATCH, OPTIONS, HEAD, TRACE, CONNECT sont disponibles sur l'objet router en tant que méthode GET : router.get(), POST : router.post(), PUT : router.put(), DELETE : router.delete(), PATCH : router.patch(), OPTIONS : router.options(), HEAD : router.head(), TRACE : router.trace(), CONNECT : router.connect()

// Pourquoi faire ?
// Comme pour la route fourni en premier argument, la méthode conditionne la réponse à une requête HTTP particulière.

// Dans une API Rest on compose toujours les routes en spécifiant l'entité eu pluriel, et la méthode HTTP en fonction de l'action à réaliser.
// Si jamais l'action a réaliser nécessite d'identifier une ressource particulière, on ajoutera l'id en paramètre de route --> /lists/:id

// Dans une API Restful, doit respecter à la lettre les règles REST et doit ne renvoyer qu'une et une seule ressource par requête.
// Dans une API Rest, on peut renvoyer plusieurs ressources. Exemple : Une liste avec toutes ses cartes.
// Si jamais je voulais récupérer les cartes d'une liste en Restful, je devrais créer une route /lists/:id/cards

// @route POST /lists/ --> listController.create
router.post('/lists/', listController.create);
// @route GET /lists/ --> listController.getAll