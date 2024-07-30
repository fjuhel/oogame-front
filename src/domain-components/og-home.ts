import { LitElement, css, html } from 'lit';
import { customElement } from 'lit/decorators.js';

import './og-logout';

@customElement('og-home')
export class OgHome extends LitElement {

  protected override render() {
    return html`
      <og-logout></og-logout>
      <h1>You're logged in</h1>
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