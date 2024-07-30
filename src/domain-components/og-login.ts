import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

import '@shoelace-style/shoelace/dist/components/button/button.js';
import '@shoelace-style/shoelace/dist/components/input/input.js';
import '@shoelace-style/shoelace/dist/themes/light.css';

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
      row-gap: 10px;
    }
  `;

  async handleLogin(e: Event) {
    e.preventDefault();

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
      <form class="login-container" @click="${this.handleLogin}">
        <sl-input type="email" placeholder="Username" @input="${(e: any) => this.username = e.target.value}"></sl-input>
        <sl-input type="password" placeholder="Password" password-toggle @input="${(e: any) => this.password = e.target.value}"></sl-input>
        <sl-button type="submit">Login</sl-button>
      </form>
    `;
  }
}
