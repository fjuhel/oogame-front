import { observable, action, makeObservable } from 'mobx';
import { User } from '../api/generated/data-contracts.ts';

import type { PossibleLanguages } from '../utils/languages.js';

class AuthStore {
  @observable token: string | null = localStorage.getItem('jwt');
  @observable user: User | null = null;

  constructor() {
    makeObservable(this);
  }

  @action setToken(token: string) {
    this.token = token;
    localStorage.setItem('jwt', token);
  }

  @action clearToken() {
    this.token = null;
    localStorage.removeItem('jwt');
  }

  @action setUser(user: User) {
    this.user = user;
  }

  @action clearUser() {
    this.user = null;
  }
}

class UserStore {
  @observable users: User[] = [];
  @observable language: PossibleLanguages | null = null;
  @observable debugMode: boolean = false;

  constructor() {
    makeObservable(this);
  }

  @action setUsers(users: User[]) {
    this.users = users;
  }

  @action clearUsers() {
    this.users = [];
  }
}

class RootStore {
  authStore: AuthStore;
  userStore: UserStore;

  constructor() {
    this.authStore = new AuthStore();
    this.userStore = new UserStore();
  }
}

const rootStore = new RootStore();
export default rootStore;
export { AuthStore, UserStore };
