'use client';
import {useForm} from "react-hook-form";
import {joiResolver} from "@hookform/resolvers/joi";
import {carValidator} from "@/validators/carValidator";
import {createCarAction} from "@/app/create/actions";

interface IFormProps {
    brand: string;
    price: number;
    year: number;
}

export const CreateCarComponent = () => {

    const { register, formState: {errors, isValid}} = useForm<IFormProps>({mode: "all", resolver: joiResolver(carValidator)});

    return (
        <div>
            <form action={createCarAction}>
                <label>
                <input type="text" {...register('brand')} placeholder={'Enter brand'}/>
                    {errors.brand && <div>{errors.brand.message}</div>}
                </label>
                <label>
                <input type="number" {...register('price')} placeholder={'Enter price'}/>
                    {errors.price && <div>{errors.price.message}</div>}
                </label>
                <label>
                <input type="number" {...register('year')} placeholder={'Enter year'}/>
                    {errors.year && <div>{errors.year.message}</div>}
                </label>

                <button type={'submit'} disabled={!isValid}>submit</button>
            </form>
        </div>
    );
};