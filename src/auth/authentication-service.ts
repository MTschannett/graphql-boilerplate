import DatabaseService from '../database/database-service';
import {Repository} from 'typeorm';
import User from '../entities/User';
import {Request} from 'express';
import * as jwt from 'jsonwebtoken';


export async function signUp(email: string, password: string, req: any) {
    checkEmailAndPassword(email, password);

    const repo = await DatabaseService.instance.getRepository<User>(User);

    const existingUser = await repo.findOne({ email });

    if (existingUser) {
        throw new Error('Email already in use.');
    }

    const newUser = new User();
    newUser.email = email;
    newUser.password = password;

    return repo.persist(newUser);
}

export async function login(email: string, password: string, req: any): Promise<User> {
    checkEmailAndPassword(email, password);

    const repo = await DatabaseService.instance.getRepository<User>(User);
    const user = await repo.findOne({email});

    if (!user) {
        throw new Error('User is not registered!');
    }

    return new Promise<User>((resolve, reject) => {
        if (user.comparePasswordsForLogin(password)) {
            user.token = jwt.sign({email: user.email, roles: ["test", "maybe tomorrow"]}, process.env.secret);
            resolve(user);
        } else {
            reject(new Error('credentials are wrong'));
        }
    })
}

function checkEmailAndPassword(email: string, password: string) {
    if (!email || !password) {
        throw new Error('Provide all needed credentials!');
    }
}

// TODO make a logout;
