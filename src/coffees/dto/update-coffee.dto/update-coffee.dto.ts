/* eslint-disable prettier/prettier */
import { CreateCoffeeDto } from "../create-coffee.dto/create-coffee.dto";
import { PartialType } from '@nestjs/mapped-types'

/* eslint-disable prettier/prettier */
export class UpdateCoffeeDto extends PartialType(CreateCoffeeDto) {

}
