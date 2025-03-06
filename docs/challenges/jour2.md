# O'kanban - API E02 - Atelier Sequelize

[Rappel : lien pour créer des issues](https://github.com/O-clock-XXXXX/Soutien-ateliers/issues)

## Étape 1 - Mise en place `Git`

Si cela n'a pas été fait en cours, suivre le [Git Flow](../resources/fiches/gitflow.md) pour récupérer la correction "prof" et créer une branche `jour2` pour la seconde journée.

## Étape 2 - Modèles `Sequelize`

Dans le dossier `src/models/`, ajouter les modèles `Sequelize` non réalisés en cours. Rappels :

- nos modèles sont `List`, `Tag`, `Card` ;
- on ne précise pas les clés étrangères à cette étape ;
- et penser à tester vos modèles !

Rappels : n'oubliez pas que vous pouvez relancer vos scripts SQL pour re-créer/re-échantillonner votre BDD au besoin.

## Étape 3 - Associations

Dans un fichier `src/associations.js`, définir les associations entre nos modèles :

- s'inspirer du code des saisons précédentes et de la documentation de `Sequelize` ;
- ne pas oublier de ré-exporter vos modèles depuis ce fichier : désormais, on importera les modèles depuis le fichier d'association afin de profiter des jointures (`include`) entre les tables.
- et penser à tester les associations !

Rappels : n'oubliez pas que vous pouvez relancer vos scripts SQL pour re-créer/re-échantillonner votre BDD au besoin.

## Étape 4 - BONUS - Synchroniser les modèles avec la base de données

Les scripts SQL, c'est bien. Mais, ça ne serait pas un peu redondant avec nos modèles ? S'il faut préciser les contraintes et les associations à la fois dans nos scripts et dans nos modèles, on fait finalement le travail deux fois !

**L'idée du bonus : générer et échantillonner nos tables à partir de nos modèles.**

### 4.1. Créer les tables

Créer/compléter le fichier `src/migrations/01.createTables.js` pour synchroniser toutes nos tables avec la base de données :

- penser à les supprimer (`.drop()` dans le bon ordre !) avant de les re-synchroniser (`.sync()` dans le bon ordre !) ;
- penser à exécuter le script pour tester son bon fonctionnement et confirmer via `psql` que les tables ont bien créées en BDD (les commandes `\dt` et `\d nom_de_table` sont bien pratiques pour cela).

À noter :

- selon son choix d'implémentation, il est possible d'avoir à créer **un modèle dédié pour la table de liaison** (`CardHasTag`) ;
- on peut également utiliser `sequelize.sync()` pour ne pas avoir à créer chaque table une par une, à vous de voir.

### 4.2. Échantillonnage

Créer/modifier le fichier `src/migrations/02.seedTables.js` afin de compléter la génération de l'échantillon de test, en ajoutant quelques exemples de listes, cartes et de tags, à relier les unes aux autres.

### 4.3. Scripts NPM

Ajouter/modifier les trois scripts au `package.json` pour faciliter la ré-initialisation de la base de données pour les jours suivants :

- `npm run db:create` : qui lance le script de création de tables ;
- `npm run db:seed` : qui lance le script d’échantillonnage :
- `npm run db:reset` : qui lance les deux scripts précédents.

### 4.4. Fin

**Bravo :** nous avons implémenté notre Modèle Physique de Données (MPD) via nos modèles `Sequelize`. Nous n'avons donc plus vraiment besoin des scripts `data/create_tables.sql` ni `data/seed_tables.sql`, qui nous ont principalement permis de réviser le SQL.