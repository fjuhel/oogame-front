import { LitElement, css, html } from 'lit';
import { customElement, state } from 'lit/decorators.js';

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
      <form @submit=${this.handleSubmit}>
        <input type="text" .value=${this.username} @input="${(e: any) => this.username = e.target.value}" placeholder="Username" />
        <input type="password" .value=${this.password} @input="${(e: any) => this.password = e.target.value}" placeholder="Password" />
        <input type="password" .value=${this.confirmPassword} @input="${(e: any) => this.confirmPassword = e.target.value}" placeholder="Confirm password" />
        <button type="submit">Register</button>
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
    :host {
      display: block;
      padding: 25px;
      color: var(--my-element-text-color);
    }
    `
    return [mainStyle];
  }
}