import z from "zod";
import { Named } from "./Named.zod";

export const Timeseries = z.object({ 
    unit: z.string(),
    equidistance: z.number()
}).extend(Named.shape);
 
export type Timeseries = z.infer<typeof Timeseries>;