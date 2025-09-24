import { 
  IsNotEmpty, 
  IsString,
  IsDateString,
  IsEmail,
  IsPhoneNumber
}from "class-validator";

export class createPatientDto {
  
  @IsString()
  @IsNotEmpty()
  dni: string;
  @IsDateString() // ej:"2002-06-09 AAAA-MM-DD"
  birthdate: Date;
  @IsEmail()
  email: string;
  @IsPhoneNumber('AR',{message:"El numero de telefono debe ser de argentina"})
  phone: string;
  @IsString()
  @IsNotEmpty()
  country: string;
  @IsString()
  @IsNotEmpty()
  obraSocial:string
}