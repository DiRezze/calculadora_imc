function getValue(inputId:string): number | null{

    const inputField = document.getElementById(inputId) as HTMLInputElement | null;
    if(inputField){
        const value = inputField.value;
        return parseFloat(value);
    }
    return null;

}

function calculateBMI( ) {

    const height = getValue('heightInput');
    const weight = getValue('weightInput');

    if(height && weight){
        const BMIValue = (weight / height**2);
        return BMIValue;
    }

    return null;

}

export default { calculateBMI, getValue };
