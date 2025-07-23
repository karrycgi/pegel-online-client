import { StationOverviewResult } from "../model/StationOverviewResult.zod";

export async function getStations():Promise<StationOverviewResult> {
    const result = await fetch("https://www.pegelonline.wsv.de/webservices/rest-api/v2/stations.json");
    return StationOverviewResult.parse(await result.json());
}