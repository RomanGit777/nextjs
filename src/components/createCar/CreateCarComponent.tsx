'use client';
import {createCar} from "@/services/createCar";

export const CreateCarComponent = () => {
    const HandleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const form = e.currentTarget;
        const formData = new FormData(form);

        const car = {
            brand: formData.get('brand') as string,
            price: formData.get('price') as string,
            year: formData.get('year') as string
        }
        await createCar(car)
    }
    return (
        <div>
            <form onSubmit={HandleSubmit}>
                <input type="text" name={'brand'} placeholder={'Enter brand'}/>
                <input type="number" name={'price'} placeholder={'Enter price'}/>
                <input type="number" name={'year'} placeholder={'Enter year'}/>
                <button>submit</button>
            </form>
        </div>
    );
};