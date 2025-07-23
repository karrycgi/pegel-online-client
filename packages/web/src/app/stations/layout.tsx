import getStationsActionCached from "@/lib/getStationsActionCached.function"

export async function generateStaticParams() {
  const stations = await getStationsActionCached();
 
  return stations.map((station) => ({
    id: station.uuid,
  }))
}

export default function StationsLayout({ children, }: { children: React.ReactNode }) {
  return <div>{children}</div>
}