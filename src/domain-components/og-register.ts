import { LitElement, css, html } from 'lit';
import { customElement, state } from 'lit/decorators.js';

import '@shoelace-style/shoelace/dist/components/button/button.js';
import '@shoelace-style/shoelace/dist/components/input/input.js';
import '@shoelace-style/shoelace/dist/themes/light.css';

import { Auth } from '../api/generated/Auth';
import { RegisterRequest } from '../api/generated/data-contracts';


@customElement('og-register')
export class OgLogin extends LitElement {
  @state() username: string = '';
  @state() password: string = '';
  @state() confirmPassword: string = '';
  @state() errorMessage = '';

  protected override render() {
    return html`
      <form class="register-container" @click="${this.handleSubmit}">
        <sl-input type="text" placeholder="Username" @input="${(e: any) => this.username = e.target.value}"></sl-input>
        <sl-input type="password" placeholder="Password" password-toggle @input="${(e: any) => this.password = e.target.value}"></sl-input>
        <sl-input type="password" placeholder="Confirm password" password-toggle @input="${(e: any) => this.confirmPassword = e.target.value}"></sl-input>
        <sl-button type="submit">Register</sl-button>
      </form>
    `;
  }

  private async handleSubmit(event: Event) {
    const auth = new Auth();
    event.preventDefault();
    if (this.password !== this.confirmPassword) {
      this.errorMessage = 'Passwords do not match';
      return;
    }

    const registerRequest: RegisterRequest = {
      username: this.username,
      password: this.password
    }
    await auth.register(registerRequest);
  }

  public static get styles() {
    const mainStyle = css`
      .register-container {
        display: flex;
        flex-direction: column;
        width: 300px;
        margin: auto;
        row-gap: 10px;
      }
    `;
    return [mainStyle];
  }
}