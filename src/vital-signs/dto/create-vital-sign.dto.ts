import { Min,Max, IsNumber } from "class-validator";

export class CreateVitalSignDto {
    @IsNumber()@Min(30)@Max(45)
    temperatura:number;
    @IsNumber()@Min(50)@Max(100)
    saturacionOxigeno:number;
    @IsNumber()@Min(40)@Max(250)
    tensionMax:number;
    @IsNumber()@Min(20)@Max(150)
    tensionMin:number;
    @IsNumber()@Min(20)@Max(250)
    frecuenciaCardiaca:number;
    //fechaRegistro:Date;
}
