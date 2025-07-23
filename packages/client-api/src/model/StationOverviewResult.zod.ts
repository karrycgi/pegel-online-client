import z from "zod";
import { Station } from "./Station.zod";

export const StationOverviewResult = z.array(Station).min(0);
 
export type StationOverviewResult = z.infer<typeof StationOverviewResult>;