import { sequelize } from '../models/client.js';
// Même si on utilise pas les modèles directement, il faut tout de même les importer pour que la synchronisation de sequelize en soit informé.
// eslint-disable-next-line no-unused-vars
import { List, Card, Tag } from '../models/associations.js';

/*
await sequelize.drop();
await sequelize.sync();
*/

// ou 

await sequelize.sync({ force: true });

console.log('Synchronisation terminée');

// On pense a terminer la connexion à la BDD à la fin
await sequelize.close();