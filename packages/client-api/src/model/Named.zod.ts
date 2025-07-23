import z from "zod";

export const Named = z.object({ 
    shortname: z.string(),
    longname: z.string()
});
 
export type Named = z.infer<typeof Named>;