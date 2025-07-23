import { ZodError } from "zod";
import { Station } from "../src";

const STATION: Station = {
    agency: "agency",
    km: 1.5,
    latitude: 1,
    longitude: 1,
    longname: "long",
    number: "123456789",
    shortname: "short",
    uuid: "47d172a7-281c-485e-8685-1785539facfe",
    timeseries: [],
    water: {
        longname: "long",
        shortname: "short",
        description: "optinal"
    }
}

describe("Station Zod model tests", () => {
    test("Station number throws error if not number in string", () => {
        expect(() => Station.parse({...STATION, number: "123456789a"})).toThrow(ZodError);
    })

    test("Station number throws no Error if string is number", () => {
        expect(Station.parse(STATION)).not.toBe(undefined);
    })
})