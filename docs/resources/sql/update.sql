/*
id  title       position
1   liste 1     1
*/

UPDATE "list" SET "title" = 'liste 2' WHERE "id" = 1;
-- affected rows: 1

UPDATE "list" SET "title" = 'liste 2' WHERE "id" = 2;
-- affected rows: 0

UPDATE "list" SET "title" = 'liste 1' WHERE "id" = 1;
-- affected rows: 0
-- comme le titre était déjà avec la valeur 'liste 1', la requête n'a pas modifié la ligne