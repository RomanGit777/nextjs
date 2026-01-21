export const createCarHelper = async (formData: { brand: string; price: string; year: string;}) => {
    const response = await fetch("http://owu.linkpc.net/carsAPI/v1/cars" ,
        {method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        });

    if (!response.ok) {
        throw new Error('Failed to create car');
    }

    const result = await response.json();
    console.log('Created car:', result)
    return result
}