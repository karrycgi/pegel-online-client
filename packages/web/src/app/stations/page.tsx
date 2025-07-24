import getStationsActionCached from "@/lib/getStationsActionCached.function";
import Link from "next/link";
import DeckGlOverview from "./DeckGlOverview.component";

export default async function StationsPage() {
    const stations = await getStationsActionCached();

    return <div>
        <DeckGlOverview stations={stations}/>
    </div>
}