import getStationsActionCached from "@/lib/getStationsActionCached.function";

export default async function StationPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const stations = await getStationsActionCached();
    const station = stations.find((s)=>s.uuid === id)

    return <div>{JSON.stringify({station})}</div>
}