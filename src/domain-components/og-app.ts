import { LitElement, css, html } from 'lit';
import { customElement, state } from 'lit/decorators.js';

import rootStore from '../stores/RootStore';

import './og-welcome';
import './og-home';

@customElement('og-app')
export class OgApp extends LitElement {

  @state() isAuthenticated: boolean = !!rootStore.authStore.token;

  constructor() {
    super();
    this.addEventListener('login-success', this.handleLoginSuccess);
    this.addEventListener('logout', this.handleLogout);

  }

  private handleLoginSuccess() {
    this.isAuthenticated = true;
  }

  private handleLogout() {
    this.isAuthenticated = false;
  }

  protected override render() {
    return html`
      ${this.isAuthenticated
        ? html`<og-home></og-home>`
        : html`<og-welcome></og-welcome>`
      }
    `;
  }

  public static get styles() {
    const mainStyle = css`
    :host {
      height: calc(100% - 60px);
      padding: 30px 0 30px 0;
      width: 1000px;
    }
    `
    return [mainStyle];
  }


}