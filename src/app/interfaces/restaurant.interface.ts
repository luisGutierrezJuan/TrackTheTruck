import { Dish } from "./dish";

export interface Restaurant{
    id: number;
    name: string;
    schedule: string;
    assesments: number;
    photo: string;
    menu: {[category: string]: Dish[]};
}