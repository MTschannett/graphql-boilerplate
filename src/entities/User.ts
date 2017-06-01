import {Entity, PrimaryGeneratedColumn, Column, OneToMany} from 'typeorm';
import * as bcrypt from 'bcrypt';

/**
 * Database entity to store, create and manipulate data in db.
 * @return {User} Author entity with common fields.
 */
@Entity()
export default class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column('string')
    email: string;

    @Column('string', {name: "password"})
    private _password: string;

    token: string;

    public set password(password: string) {
        this._password =  bcrypt.hashSync(password, 10);
    }

    public get password() {
        return this._password
    }

    comparePasswordsForLogin(comparePassword: string): boolean {
        return bcrypt.compareSync(comparePassword, this._password);
    }
}
