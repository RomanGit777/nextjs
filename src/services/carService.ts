import {ICar} from "@/models/ICar";

export const getAllCars = async (): Promise<ICar[]> => {
    return fetch("http://owu.linkpc.net/carsAPI/v1/cars")
        .then(cars => cars.json())
}