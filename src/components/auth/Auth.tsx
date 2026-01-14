'use client';
import { useForm } from "react-hook-form";
import userValidator from "@/validators/user.validator";
import {joiResolver} from "@hookform/resolvers/joi";

type IFormProps = {
    login: string;
    password: string;
};

export const Auth = () => {
    const {handleSubmit, register, formState: {errors, isValid}} = useForm<IFormProps>({
        mode: "all",
        resolver: joiResolver(userValidator)
    });

    const customHandler = async (formData: IFormProps) => {
        await fetch('http://localhost:3000/auth', {
            method: "POST",
            body: JSON.stringify(formData)
        })
    };

    return (
        <form onSubmit={handleSubmit(customHandler)}>
            <label>
            <input type="text" {...register('login')} placeholder={'Enter your login'}/>
                {errors.login && <div>{errors.login.message}</div>}
            </label>
            <label>
            <input type="password" {...register('password')} placeholder={'Enter your password'}/>
                {errors.password && <div>{errors.password.message}</div>}
            </label>
            <button name={'submit'} disabled={!isValid}>sumbit</button>
        </form>
    );
};