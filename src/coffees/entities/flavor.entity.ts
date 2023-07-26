/* eslint-disable prettier/prettier */
import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Coffee } from './coffee.entity';

@Entity()
export class Flavor {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @ManyToMany(
        type => Coffee,
        // eslint-disable-next-line prettier/prettier
        coffee => coffee.flavors, // what is "flavor" within the Coffee Entity 
    ) // 👈
    coffees: Coffee[];
}