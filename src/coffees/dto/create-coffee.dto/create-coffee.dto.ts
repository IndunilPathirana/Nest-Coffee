/* eslint-disable prettier/prettier */
import { IsString } from "class-validator";

/* eslint-disable prettier/prettier */
export class CreateCoffeeDto {
    @IsString()
    readonly name: string;
    @IsString()
    readonly brand: string;
    @IsString({ each: true })
    readonly flavors: string[];
}
