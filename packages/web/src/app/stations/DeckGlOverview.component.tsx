"use client"

import { BASEMAP } from "@deck.gl/carto";
import { Station } from "@pegel/client-api";
import { StationOverviewResult } from "@pegel/client-api/out/model/StationOverviewResult.zod";
import DeckGL, { IconLayer, MapViewState, PickingInfo } from "deck.gl"
import Map from "react-map-gl/maplibre";

const INITIAL_VIEW_STATE: MapViewState = {
    longitude: 10.451526,
    latitude: 51.165691,
    zoom: 5
};

export interface DeckGelOverviewProps {
    stations: StationOverviewResult
}

export default function DeckGlOverview({ stations }: DeckGelOverviewProps) {
    const layer = new IconLayer<Station>({
        id: 'IconLayer',
        data: stations,
        getColor: (_d: Station) => [255, 0, 0],
        getIcon: (_d: Station) => 'marker',
        getPosition: (d: Station) => [d.longitude || 0, d.latitude || 0],
        getSize: 40,
        iconAtlas: 'https://raw.githubusercontent.com/visgl/deck.gl-data/master/website/icon-atlas.png',
        iconMapping: 'https://raw.githubusercontent.com/visgl/deck.gl-data/master/website/icon-atlas.json',
        pickable: true
    });

    return <DeckGL
        initialViewState={INITIAL_VIEW_STATE}
        controller
        layers={[layer]}
        getTooltip={({ object }: PickingInfo<Station>) => (object ? {
            ...object,
            html: `<div>
                <div>${object?.longname} (${object?.shortname})<div>
                <div>${object.water.longname} (${object.water.shortname})</div>
                <div>${object?.km}km</div>
                <div></div>
            </div>`
        } : null)}
    >
        <Map mapStyle={BASEMAP.DARK_MATTER} />
    </DeckGL>;
}