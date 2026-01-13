import {ICar} from "@/models/ICar";

interface CarComponentProps {
    car: ICar
}

export const CarComponent = ({car}: CarComponentProps) => {
    return (
        <div style={{marginBottom: '10px', border: '1px solid black'}}>
            <p>brand: {car.brand}</p>
            <p>price: {car.price}</p>
            <p>year: {car.year}</p>
        </div>
    );
};