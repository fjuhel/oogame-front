import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

import '@shoelace-style/shoelace/dist/components/button/button.js';
import '@shoelace-style/shoelace/dist/components/input/input.js';

import rootStore from '../stores/RootStore';
import { Auth } from '../api/generated/Auth';
import { LoginRequest } from '../api/generated/data-contracts';
import { Users } from '../api/generated/Users';

@customElement('og-login')
export class OgLogin extends LitElement {
  @property({ type: String }) username = '';
  @property({ type: String }) password = '';

  static styles = css`
    .login-container {
      display: flex;
      flex-direction: column;
      width: 300px;
      margin: auto;
    }
    .input-box {
      background-color: white;
      color: grey;
      margin-bottom: 10px;
      padding: 8px;
      font-size: 14px;
    }
  `;

  async login() {
    const auth = new Auth();
    const users = new Users();

    const loginRequest: LoginRequest = {
      username: this.username,
      password: this.password,
    };

    try {
      const response = await auth.login(loginRequest);
      const responseData = await response.json();
      const token = responseData.token;
      rootStore.authStore.setToken(token);

      // Optionally, fetch and set the user data
      const userResponse = await users.getUser();
      rootStore.authStore.setUser(userResponse.data);
      this.dispatchEvent(new CustomEvent('login-success', { detail: token, bubbles: true, composed: true }));
    } catch (error) {
      console.error('Login failed', error);
    }
  }

  render() {
    return html`
      <div class="login-container">
        <sl-input class="input-box" type="email" placeholder="Username" @input="${(e: any) => this.username = e.target.value}"></sl-input>
        <sl-input class="input-box" type="password" placeholder="Password" password-toggle @input="${(e: any) => this.password = e.target.value}"></sl-input>
        <sl-button @click="${this.login}">Login</sl-button>
      </div>
    `;
  }
}
