# O'kanban - API E01 - Atelier Conception & gestion de projet

[Rappel : lien pour créer des issues](https://github.com/O-clock-Raclette/Soutien-ateliers/issues)

## Étape 1 - Mise en place `Git`

Une fois le `ochallenge` accepté et cloné, pensez à créer une branche `jour1` :

- `git switch -c jour1`

Et n'hésitez pas à `push` cette branche sur `Github` :

- `git push --set-upstream origin jour1` la première fois
- `git push` les fois suivantes

## Étape 2 - Analyse du besoin client

**Objectif : créer un Kanban de gestion de projet**  (type `Trello`, `Github Projet`…)

- on souhaite créer une application présentant un « board de gestion de projet », où il est possible de créer des **cartes** à l'intérieur de **listes** ;
- l'utilisateur (unique, pas besoin de le stocker en BDD) peut créer autant de listes qu'il/elle désire et ajouter autant de cartes à l'intérieur de ces listes ;
- chaque liste dispose d'un `titre` et d'une `position` au sein du board ;
- chaque carte dispose d'un `contenu`, d'une `position` au sein de la liste, d'une `couleur` (optionnelle) et d'un ou plusieurs **label(s)** (optionnel(s)) ;
- un label a un `nom` (ex : Urgent, comptabilité, technique, etc…) et peut avoir une `couleur` (optionnelle).

On se base sur ce besoin client, et on souhaite faire l'analyse de ce besoin en vue de produire le `MCD` de l'application. **N'hésitez pas à créer une issue si vous souhaitez clarifier un point auprès du client**

## Étape 3 - User Stories

Écrire quelques « récits utilisateur » (`user stories`) à consigner dans un tableau `Markdown` dans un fichier `docs/resources/user-stories.md`.

Rappels :

- une `user story` est un **scenario de test** qui nous aide à clarifier notre besoin, comprendre les fonctionnalités attendues dans notre application, et nous permet de vérifier si l'implémentation correspond bien aux récits fixés préalablement ;
- le formalisme habituel : `En tant que [ROLE], je souhaite [ACTION] (( afin de [OBJECTIF] ))`.

## Étape 4 - Wireframes

Faire un bref `wireframe` pour notre application à l'aide de votre outil préféré :

- `TLDraw`
- `Draw.io`
- `Excalidraw`
- `Microsoft Paint` pour les plus aventureux
- …

Rappels :

- un `wireframe` est un **croquis fonctionnel** qui nous aide à comprendre les fonctionnalités de notre application et les interactions possibles avec l'utilisateur ;
- il est possible d'avoir plusieurs wireframes d'une même page, par exemple selon les différents états de l'utilisateur (mobile, connecté/déconnecté…).

## Étape 5 - Modèle Conceptuel de Données (MCD)

**Modélisation (MERISE): comment stocker ?**

Dessinez le MCD en utilisant l'outil de votre choix :

- un papier et un crayon
- [draw.io](https://draw.io)
- [MoCoDo](http://mocodo.wingi.net/) (cf. [fiche recap](https://kourou.oclock.io/ressources/fiche-recap/mocodo/))
- [Whimsical](https://whimsical.com/)
- …

Rappels :

- le MCD découle du besoin : il arrive souvent d'avoir plusieurs modélisations possibles pour un même problème !
- n'hésitez pas à refaire un tour sur la [fiche recap' du MCD](https://kourou.oclock.io/ressources/fiche-recap/mcd-modele-conceptuel-de-donnees/) ;
- [autre article complet](https://gist.github.com/enzoclock/3b16a04277a9ef620ed046aaf4149c4b).

## Étape 6 - Modèle Logique de Données (MLD)

Traduire le MCD de l'application sous forme de MLD en utilisant les [règles de transformation](https://kourou.oclock.io/ressources/fiche-recap/mld/).

Le formalisme attendu est, au choix :

- sous forme de texte
- sous forme d'un schéma
- ou les deux !

Rappels :

- l'étape du MLD est une étape de traduction :
  - traduire les noms des entités en nom de tables ;
  - traduire les noms des attributs en nom de colonnes ;
  - traduire les associations et leurs cardinalités en clés étrangères et/ou tables de liaison.

## Étape 7 - Créer la base de données et l'utilisateur

À l'aide du client `psql` :

- créer un utilisateur Postgres : `okanban` (avec un mot de passe `okanban`)
- créer une BDD pour notre application : `okanban`

Vérifier la bonne création de la BDD (`\l`) et de l'utilisateur (`\du`).

## (BONUS) Étape 8 - Modèle Physique de Données (MPD)

Il est temps de créer les tables dans la base de données, et d'y ajouter quelques données d'échantillonnage afin d'améliorer notre expérience de développement.

Pour cela, deux options s'offrent à nous :

- **OPTION 1** : Créer des scripts `SQL` et les exécuter directement sur la base.
- **OPTION 2** : Créer des modèles `Sequelize`, et les synchroniser avec la base.

On se propose de réaliser la première option (SQL) durant ce challenge, et étudier la seconde lors de la correction en cours ! Libre à toi également d'attaquer la seconde option en autonomie si tu te sens d'attaque !

Libre à toi également de demander une `review` de ton `MLD` aux helpers présents avant d'attaquer cette partie. Par exemple, en créant une PR de ta branche `jour1` vers `master`, et notifier les concernés !

### 8.1. Création des tables

Commençons par **réviser la création d'une table en SQL**. Garder la [fiche recapitulative SQL](https://kourou.oclock.io/ressources/fiche-recap/le-langage-sql/) sous le coude n'est pas une mauvaise idée 😉.

Créer un fichier `data/create_tables.sql` dans lequel on créé les tables telles que définies dans notre MLD. Quelques bonnes pratiques :

- ne pas hésiter à s'inspirer des scripts SQL des saisons précédentes ;
- on pense à détruire les tables "si elles existent" avant de les re-créer ;
- on pense à englober nos instructions dans une [transaction](https://docs.postgresql.fr/14/tutorial-transactions.html) ;
- on pense à tester régulièrement en exécutant le fichier sur la BDD, puis constater que les tables existes (`\dt`) ;
- et pourquoi pas insérer quelques éléments dans la table manuellement (via `PSQL`) pour tester également.

### 8.2. Echantillonage

Créer un fichier `data/seed_database.sql`, écrire les instructions SQL pour insérer des données d'exemple pour tester le bon fonctionnement de nos tables.

Pense-bête :

- n'oublie pas de remplir également la table de liaison !

### Fin

**Bravo** : vous avez réalisé la conception et modélisation MERISE d'une application de bout en bout !