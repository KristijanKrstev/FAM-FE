import { Account } from './account';

export interface UserRegister {
    id: number;
    name: String;
    dateOfBirth: Date;
    email: String;
    password: String;
    confirmPassword: String;
    accounts: Account[]
  }