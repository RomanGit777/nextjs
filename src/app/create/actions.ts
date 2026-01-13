'use server';

export const createCarAction = async (formData: FormData) => {
    const brand = formData.get("brand") as string;
    const price = formData.get("price") as string;
    const year = formData.get("year") as string;

    const response = await fetch("http://owu.linkpc.net/carsAPI/v1/cars" ,
        {method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({brand, price, year})
        });

    if (!response.ok) {
        throw new Error('Failed to create car');
    }

    const result = await response.json();
    console.log('Created car:', result)
    return result
}