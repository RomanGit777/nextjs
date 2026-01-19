import {createCarAction} from "@/app/create/actions";
import {useForm} from "react-hook-form";

interface IFormProps {
    brand: string;
    price: number;
    year: number;
}

export const CreateCarComponent = () => {

    const {handleSubmit, register} = useForm<IFormProps>();

    const customHandler = (formDataProps: IFormProps) => {
        createCarAction(formDataProps)
    };
    return (
        <div>
            <form onSubmit={handleSubmit(customHandler)}>
                <input type="text" {...register('brand')} placeholder={'Enter brand'}/>
                <input type="number" {...register('price')} placeholder={'Enter price'}/>
                <input type="number" {...register('year')} placeholder={'Enter year'}/>
                <button type={'submit'}>submit</button>
            </form>
        </div>
    );
};