import { LitElement, css, html } from 'lit';
import { customElement } from 'lit/decorators.js';

import './og-login';

@customElement('og-welcome')
export class OgWelcome extends LitElement {

  protected override render() {
    return html`
      <h1>Welcome to Ogame!</h1>
      <og-login></og-login>
    `;
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