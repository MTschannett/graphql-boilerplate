import {Entity, PrimaryGeneratedColumn, Column} from 'typeorm';

@Entity()
export default class Book {
    @PrimaryGeneratedColumn()
    public id: number;

    @Column('string')
    public name: string;

    @Column('string')
    public description: string;
}
