import {Entity, PrimaryGeneratedColumn, Column, OneToMany} from 'typeorm';
import Book from './Book';

/**
 * Database entity to store, create and manipulate data in db.
 * @return {Author} Author entity with common fields.
 */
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
