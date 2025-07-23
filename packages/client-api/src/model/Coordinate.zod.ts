import z from "zod";

export const Coordinate = z.object({ 
  longitude: z.number().nullish(),
  latitude: z.number().nullish()
});
 
export type Coordinate = z.infer<typeof Coordinate>;