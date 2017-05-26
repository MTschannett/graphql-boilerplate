import {Entity, PrimaryGeneratedColumn, Column} from 'typeorm';

@Entity()
export default class Book {
    @PrimaryGeneratedColumn()
    public id: number;

    @Column('string')
    public title: string;

    @Column('string')
    public description: string;

    @Column('float')
    public costs: number
}
