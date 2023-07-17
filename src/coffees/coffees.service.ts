import { HttpStatus } from '@nestjs/common';
/* eslint-disable prettier/prettier */
import { HttpException, Injectable } from '@nestjs/common';
import { Coffee } from './entities/coffee.entity';

@Injectable()
export class CoffeesService {
    private coffees: Coffee[] = [
        {
            id: 1,
            name: "Shipwork Roast",
            brand: "Buddy brew",
            flavors: ['chocolate', "vanilla"]
        },
    ];

    findAll() {

        return this.coffees
    }


    findOne(id: string) {

        // console.log(id)

        const coffee = this.coffees.find(item => item.id == +id)

        if (!coffee) {
            throw new HttpException(`Coffee ${id} not found`, HttpStatus.NOT_FOUND)
        }
        else {
            return coffee
        }
    }

    create(createCoffeeDto: any) {
        this.coffees.push(createCoffeeDto)
    }

    update(id: string, updateCoffeeDto: any) {
        const exsistingCoffee = this.findOne(id)
        if (exsistingCoffee) {
            // update
        }
    }

    remove(id: string) {

        console.log(id)
        const coffeeIdex = this.coffees.findIndex(item => (item.id == +id));
        console.log(coffeeIdex)
        if (coffeeIdex > 0) {
            this.coffees.splice(coffeeIdex, 1)
        }
    }
}


