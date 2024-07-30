import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
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
    input {
      margin-bottom: 10px;
      padding: 8px;
      font-size: 14px;
    }
    button {
      padding: 10px;
      font-size: 16px;
      cursor: pointer;
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
        <input type="text" @input="${(e: any) => this.username = e.target.value}" placeholder="Username">
        <input type="password" @input="${(e: any) => this.password = e.target.value}" placeholder="Password">
        <button @click="${this.login}">Login</button>
      </div>
    `;
  }
}
