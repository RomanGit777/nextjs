import {CarComponent} from "@/components/cars/CarComponent";
import {getAllCars} from "@/services/carService";

export const CarsComponent = async () => {
    const cars = await getAllCars();

    return (
        <div>
            {cars.map(car => <CarComponent key={car.id} car={car} />)}
        </div>
    );
};