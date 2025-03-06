import { List } from './list.model.js';
import { Card } from './card.model.js';
import { Tag } from './tag.model.js';

// En javascript on peut modifier un objet (Nos models) après les avoir exporter car au moment de la récupération il ira les récupérer tel qu'ils sont au final.

// hasMany est utilisé pour une association OneToMany
List.hasMany(Card, {
  // Par défaut le comportement lors de la suppression des association met la valeur de la clé étrangère à null, nous on défini une suppression des associations en cascade
  onDelete: 'CASCADE',
});

// On est pas obligé de déclarer les associations dans les deux sens. S'il n'y a pas de nécessité applicative, cela ne sert à rien de le faire.
// Pour la synchronisation ce n'est pas un problème non plus.

// belongsToMany est utilisé pour les associations ManyToMany
Card.belongsToMany(Tag, {
  // pour définir la table d'association on peut lui fournir une chaine de caractère qui représente le nom de la table ou un Model si jamais on en a  créer un (sachant que si la table d'association n'a pas de colonne qualifiante, cela ne sert a rien de déclarer un modèle pour celle-ci)
  through: 'cardHasTag', // Si on passe par la création SQL on utilisera plutot card_has_tag et on précisera les clés étrangères
  /*
  foreignKey: 'cardId', // Si on ne précise pas la foreignKey, par défaut ce sera <model>Id ; donc ici CardId
  otherKey: 'tagId',
  */
  // Si on ne précise pas la foreignKey, par défaut ce sera <model>Id ; donc ici CardId
  onDelete: 'CASCADE',
});

export {List, Card, Tag};