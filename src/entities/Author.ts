import {Entity, PrimaryGeneratedColumn, Column, OneToMany} from 'typeorm';
import Book from './Book';

@Entity()
export default class Author {
    @PrimaryGeneratedColumn()
    id: number;

    @Column('string')
    name: string;

    @Column('string')
    biography: string;

    @OneToMany(type => Book, book => book.author, {
        cascadeInsert: true,
        cascadeUpdate: true
    })
    books: Book[]
}
