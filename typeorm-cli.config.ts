/* eslint-disable prettier/prettier */
import { Coffee } from "src/coffees/entities/coffee.entity";
import { Flavor } from "src/coffees/entities/flavor.entity";
import { CoffeeRefactor1690349376672 } from "src/migrations/1690349376672-CoffeeRefactor";
import { DataSource } from "typeorm";

/* eslint-disable prettier/prettier */
export default new DataSource({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'pass123',
    database: 'postgres',
    entities: [Coffee, Flavor],
    migrations: [CoffeeRefactor1690349376672],
});