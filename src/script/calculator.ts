function getValue(inputId:string): number | null{

    const inputField = document.getElementById(inputId) as HTMLInputElement | null;
    if(inputField){
        const value = inputField.value;
        return parseFloat(value);
    }
    return null;

}

export function calculateBMI( ) {

    const height = getValue('heightInput');
    const weight = getValue('weightInput');

    if(height && weight){
        const BMIValue = (weight / height**2);
        const BMIRounded = parseFloat(BMIValue.toFixed(1));
        return BMIRounded;
    }

    return null;

}
