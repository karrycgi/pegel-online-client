import z from "zod";
import { Coordinate } from "./Coordinate.zod";
import { Water } from "./Water.zod";
import { Named } from "./Named.zod";
import { Timeseries } from "./Timeseries.zod";

export const Station = z.object({ 
  uuid: z.uuid(),
  number: z.string().regex(/^\d+$/),
  km: z.number().nullish(),
  agency: z.string(),
  water: Water,
  timeseries: z.array(Timeseries).min(0).nullish()
}).extend(Coordinate.shape).extend(Named.shape);
 
export type Station = z.infer<typeof Station>;