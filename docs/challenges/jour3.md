# O'kanban - API E03 - Atelier API (suite)

[Rappel : lien pour créer des issues](https://github.com/O-clock-samoussas/Soutien-ateliers/issues)

En respectant au maximum les principes d'architecture `REST`, et à l'aide du [tableau des endpoints](../resources/specifications/api-base-endpoints.md), on implémente les différentes routes de notre API !

## Étape 1 - Routes API des listes

On commence par les routes des listes, car elles sont toutes spécifiées : [spécifications des listes](../resources/specifications/api-lists-specifications.md). Voici également quelques informations complémentaires sur les status code HTTP.

| VERB     | PATH         | DESCRIPTION                                               |
| -------- | ------------ | ----------------------------------------------------------|
| `GET`    | `/lists`     | renvoie toutes les listes existantes                      |
| `GET`    | `/lists/:id` | renvoie les détails de la liste demandée                  |
| `POST`   | `/lists`     | crée une nouvelle liste et la retourne                    |
| `PATCH`  | `/lists/:id` | modifie une liste et la retourne                          |
| `DELETE` | `/lists/:id`  | supprime une liste demandée et ne retourne pas de contenu |

On pense à les tester à l'aide d'un client HTTP :

- `Insomnia`
- `Postman`
- `Rest client`
- `Thunder Client` (Extension VSCode)
- `Chrome` (pour les GET uniquement)
- ...

## (BONUS) Étape 2 - Et les autres routes ?

Elles seront à implémenter les jours suivants, avec les **bonnes pratiques** fournies lors de la correction des routes des listes.

Mais si vous souhaitez prendre de l'avance, les voici :

| VERB     | PATH               | DESCRIPTION                                                                   |
|----------|--------------------|-------------------------------------------------------------------------------|
| `GET`    | `/cards`           | renvoie toutes les cartes existantes                                          |
| `GET`    | `/cards/:id`       | renvoie les détails de la carte demandée, avec les tags qui lui sont associés |
| `POST`   | `/cards`           | crée une nouvelle carte (sans tag) et la retourne                             |
| `PATCH`  | `/cards/:id`       | modifie une carte (ne modifie pas les tags)                                   |
| `DELETE` | `/cards/:id`       | supprime une carte                                                            |
|          |                    |                                                                               |
| `GET`    | `/lists/:id/cards` | renvoie toutes les cartes d'une liste ; chaque carte porte ses tags associés  |

| VERB     | PATH                           | DESCRIPTION                                     |
| -------- | ------------------------------ | ----------------------------------------------- |
| `GET`    | `/tags`                        | renvoie tous les tags                         |
| `POST`   | `/tags`                        | crée un nouveau tag                           |
| `PATCH`  | `/tags/:id`                    | modifie un tag                                |
| `DELETE` | `/tags/:id`                    | supprime un tag                               |
|          |                                |                                                 |
| `PUT`    | `/cards/:card_id/tags/:tag_id` | associe un tag à la carte ciblée                |
| `DELETE` | `/cards/:card_id/tags/:tag_id` | supprime l'association entre le tag et la carte |
