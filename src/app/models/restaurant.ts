import { HourRange } from "./hourRange";
import { tagPosition } from "./tagPosition";

export interface restaurant {
    name: string;
    puntuation: number;
    image: string;
    schedule: HourRange;
    //position: tagPosition;
}