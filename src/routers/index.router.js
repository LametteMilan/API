import { Router } from "express";
import { listController } from "../controllers/list.controller.js";
import { controllerWrapper } from "../middleware/controller.wrapper.js";

export const router = new Router();

/*
router.get('/lists/', listController.getAll);
router.post('/lists/', listController.create);
*/

// Dans le cadre d'une API CRUD, on peut utiliser la méthode route de l'objet Router pour définir les routes d'un même endpoint.
router.route('/lists/')
  // Il suffira ensuite d'appeler les méthodes HTTP sur cet objet route pour définir les actions à effectue pour chaque méthode.
  .get(controllerWrapper(listController.getAll))
  .post(controllerWrapper(listController.create));

// \d+ signifie un ou plusieurs chiffres
// \d* signifie 0 ou plusieurs chiffres
// \d? signifie 0 ou 1 chiffre
// \d signifie exactement un chiffre
router.route('/lists/:id(\\d+)')
  .get(controllerWrapper(listController.getOne))
  .patch(controllerWrapper(listController.update))
  .delete(controllerWrapper(listController.delete));

// on personnalise la réponse 404, pour que celle-ci soit au format JSON. Car une API Rest renvoi des réponses au format JSON
router.use((_, res) => {
  res.status(404).json({error: 'Resource not Found'});
});