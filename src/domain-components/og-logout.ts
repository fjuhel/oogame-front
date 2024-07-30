import { LitElement, css, html } from 'lit';
import { customElement } from 'lit/decorators.js';

import rootStore from '../stores/RootStore';

@customElement('og-logout')
export class OgLogout extends LitElement {

  protected override render() {
    return html`
      <button @click=${this.handleLogout}>Logout</button>
    `;
  }

  public static get styles() {
    const mainStyle = css`
    `;
    return [mainStyle];
  }

  private handleLogout() {
    rootStore.authStore.clearToken();
    this.dispatchEvent(new CustomEvent('logout', { bubbles: true, composed: true }));
  }

}