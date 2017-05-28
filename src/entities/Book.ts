import {Entity, PrimaryGeneratedColumn, Column, ManyToOne} from 'typeorm';
import Author from './Author'

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

    @ManyToOne(type => Author, author => author.books, {
        cascadeInsert: true,
        cascadeUpdate: true
    })
    public author: Author
}
