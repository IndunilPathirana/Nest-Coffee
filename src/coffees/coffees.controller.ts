/* eslint-disable prettier/prettier */
import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Patch, Post, Query, Res } from '@nestjs/common';
import { CoffeesService } from './coffees.service';
import { CreateCoffeeDto } from './dto/create-coffee.dto/create-coffee.dto';
import { UpdateCoffeeDto } from './dto/update-coffee.dto/update-coffee.dto';
import { PaginationQueryDto } from 'src/common/dto/pagination-query.dto/pagination-query.dto';

@Controller('coffees')
export class CoffeesController {

    constructor(private readonly coffeeservice: CoffeesService) {

    }

    @Get()
    fineAll(@Query() paginationQuery: PaginationQueryDto) {
        // const { limit, offset } = paginationQuery


        return this.coffeeservice.findAll(paginationQuery)
    }

    @Get(":id")
    findOne(@Param('id') id: number) {
        // return `this return ${id} coffee`;
        console.log(typeof id)
        return this.coffeeservice.findOne("" + id)
    }

    @Post()
    @HttpCode(HttpStatus.CREATED)
    create(@Body() createCoffeeDto: CreateCoffeeDto) {
        return this.coffeeservice.create(createCoffeeDto)
        // return body
    }
    @Patch(":id")
    update(@Param("id") id: string, @Body() UpdateCoffeeDto: UpdateCoffeeDto) {
        return this.coffeeservice.update(id, UpdateCoffeeDto)
        // return `this will update ${id} coffee`
    }

    @Delete(":id")
    delete(@Param('id') id: string) {
        console.log(id)
        return this.coffeeservice.remove(id)
        // return `this will delete the ${id} coffee`
    }



}
