import { sequelize } from '../models/client.js';
import { List, Card, Tag } from '../models/associations.js';

// INSERT INTO table (…) VALUES (…) RETURNING *
// equivalent à 
// INSERT INTO table (…) VALUES (…) + SELECT * FROM table WHERE name = … 

console.log("🔄 Okanban seeding started...");

// Création des Tags
const urgentTag = await Tag.create({ name: 'Urgent',       color: '#FF00FF' });
const lateTag   = await Tag.create({ name: 'En retard',    color: '#000000' });
const ecoTag    = await Tag.create({ name: 'Eco-friendly', color: '#00FF00' });

// Crétaion des listes et des cartes en seule lot (batch/bulk)
await List.bulkCreate([
  // Il va inséré la liste, récupéré l'id automatique, et l'utiliser cet id pour créer les cartes associé (C'est possible de faire de la sorte pour une association OneToMany)
  { title: 'Liste des courses', position: 1, Cards: [
    { content: 'Chartreuse', position: 3 },
    { content: 'Concombre',  position: 2, color: '#00FF00' },
    { content: 'Savon', position: 1, color: '#FF00FF' },
  ] },

  { title: 'Todo', position: 2, Cards: [
    { content: 'Dormir', position: 1, color: '#FF0000' },
    { content: 'Nourrir le chat', position: 2 },
    { content: 'Devenir le meilleur dresseur', position: 3 },
  ] },

  { title: 'Liste des anniversaires', position: 3, Cards: [
    { content: 'Maman le 01/01/1970', position: 1, color: '#0000FF' },
  ] }

], { include: Card });

async function addTagToCard(cardContent, tagEntity) {
  const card = await Card.findOne({ where: { content: cardContent }});
  console.log(cardContent, card);
  await card.addTag(tagEntity);
}

// Add Tags to some Cards
await addTagToCard("Savon", ecoTag);
await addTagToCard("Savon", urgentTag);
await addTagToCard("Nourrir le chat", urgentTag);
await addTagToCard("Dormir", lateTag);


console.log("✅ Okanban seed done with success !");
  
console.log("🧹 Clean up by closing database connexion");
await sequelize.close();