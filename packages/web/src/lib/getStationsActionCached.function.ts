import { cache } from "react";
import getStationsAction from "./getStationsAction.function";

const getStationsActionCached = cache(getStationsAction);

export default getStationsActionCached;