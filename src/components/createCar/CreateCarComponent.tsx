import {createCarAction} from "@/app/create/actions";

export const CreateCarComponent = () => {
    return (
        <div>
            <form action={createCarAction}>
                <input type="text" name={'brand'} placeholder={'Enter brand'}/>
                <input type="number" name={'price'} placeholder={'Enter price'}/>
                <input type="number" name={'year'} placeholder={'Enter year'}/>
                <button type={'submit'}>submit</button>
            </form>
        </div>
    );
};