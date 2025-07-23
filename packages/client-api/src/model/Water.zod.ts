import z from "zod";

export const Water = z.object({ 
  description: z.string().nullish(),
  shortname: z.string(),
  longname: z.string()
});
 
export type Water = z.infer<typeof Water>;