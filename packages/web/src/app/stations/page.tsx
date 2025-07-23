import getStationsActionCached from "@/lib/getStationsActionCached.function";
import Link from "next/link";

export default async function StationsPage() {
    const stations = await getStationsActionCached();

    return <div>
        <ul>
            {stations.map(station => <li key={station.uuid}><Link href={`stations/${station.uuid}`}>{station.uuid}</Link></li>)}
        </ul>
    </div>
}