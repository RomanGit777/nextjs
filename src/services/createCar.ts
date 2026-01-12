type carData = {
    brand: string | null;
    price: string | null;
    year: string | null
}
export const createCar = async (carData: carData) => {
    const response = await fetch("http://owu.linkpc.net/carsAPI/v1/cars" ,
        {method: "POST",
            headers: {
                'Content-Type': 'application/json'
        },
            body: JSON.stringify(carData)
        });

    if (!response.ok) {
        throw new Error('Failed to create car');
    }

    return response.json();
}