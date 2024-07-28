export function classifyBMI (BMI:number){

    switch (true){

        case (BMI<20):
            return "Abaixo do Ideal";
        case (BMI<25):
            return "Ideal";
        case (BMI<30):
            return "Sobrepeso"
        case (BMI<35):
            return "Obesidade (Grau 1)"
        case (BMI<40):
            return "Obesidade (Grau 2)"
        default:
            return "Obesidade (Grau 3)"

    }

}
