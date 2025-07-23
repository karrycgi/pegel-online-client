import { getStations } from "@pegel/client-api"

process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

export default async function getStationsAction() {
    return await getStations();
}