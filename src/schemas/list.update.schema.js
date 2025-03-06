import { z } from "zod";

export const listUpdateSchema = z.object({
  title: z.string().nonempty(),
  position: z.number().int()
})
  .partial() // ca rend toutes propriétés optionnelles
  .refine( // règle personnalisée, car on a pas de méthode qui permet de définir au moins une propriété renseignée
    // On vérifie que l'un des champs est défini
    ({ title, position }) => (title || position),
    // Si la condition précédente n'est pas validée, alors on renvoi un message d'erreur
    { message: "One of the fields must be defined" }
  );