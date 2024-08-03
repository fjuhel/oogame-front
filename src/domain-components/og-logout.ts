import { LitElement, css, html } from 'lit';
import { customElement } from 'lit/decorators.js';

import rootStore from '../stores/RootStore';

import createLocalizer from '../utils/create-localizer';
import commonLocales from '../utils/common.locales';

const localize = createLocalizer(commonLocales);

@customElement('og-logout')
export class OgLogout extends LitElement {

  protected override render() {
    return html`
      <button @click=${this.handleLogout}>${localize('common.logout.capitalize')}</button>
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