'use server';

import {createCarHelper} from "@/helpers/createCarHelper";

export const createCarAction = async (formData: FormData) => {
    const brand = formData.get("brand") as string;
    const price = formData.get("price") as string;
    const year = formData.get("year") as string;

    return await createCarHelper({brand,price,year});

}