import { Injectable } from '@angular/core';
import { getMaxListeners } from 'process';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private listuser: User[] = [
    {
      id: 1,
      firstName: 'amine',
      lastName: 'bayouli',
      email:'aminebayouli@gmail.com'
    },
    {
      id: 2,
      firstName: 'bayouli',
      lastName: 'amine',
      email:'bayouliamine@gmail.com'
    }
  ];

  constructor() { }

  getUsersFromData(): User[] {
    return this.listuser;
  }

  addUser(user: User) {
    user.id = this.listuser.length + 1;
    this.listuser.push(user);

  }
  updateUser(user: User) {
    const index = this.listuser.findIndex(u => user.id === u.id);
    this.listuser[index] = user;
  }
  deleteUser(user: User) {
    this.listuser.splice(this.listuser.indexOf(user), 1);
  }

}
