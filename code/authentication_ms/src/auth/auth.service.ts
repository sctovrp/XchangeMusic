import { Injectable } from '@nestjs/common';
import { CreateUserDto } from "./dto/createUser.dto";

import { app } from "./../firebase/init";
import { getAuth, createUserWithEmailAndPassword, Auth } from "firebase/auth";

@Injectable()
export class AuthService {
    private auth: Auth;

    constructor() {
        this.auth = getAuth(app);
    }

    createAccount(user : CreateUserDto) {
        createUserWithEmailAndPassword(this.auth, user.email, user.password).then((userCredential) => {
            console.log(userCredential.user);
        }).catch((error) => console.log(error));
    }
}
