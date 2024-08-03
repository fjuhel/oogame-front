import { LitElement, css, html } from 'lit';
import { customElement } from 'lit/decorators.js';

import '@shoelace-style/shoelace/dist/components/tab-group/tab-group.js';
import '@shoelace-style/shoelace/dist/components/tab/tab.js';
import '@shoelace-style/shoelace/dist/components/tab-panel/tab-panel.js';
import '@shoelace-style/shoelace/dist/themes/light.css';

import './og-login';
import './og-register';

import createLocalizer from '../utils/create-localizer';
import commonLocales from '../utils/common.locales';

const localize = createLocalizer(commonLocales);


@customElement('og-welcome')
export class OgWelcome extends LitElement {

  protected override render() {
    return html`
      <h1>Ogame</h1>
      <sl-tab-group>
        <sl-tab slot="nav" panel="login">${localize('common.login.capitalize')}</sl-tab>
        <sl-tab slot="nav" panel="register">${localize('common.register.capitalize')}</sl-tab>

        <sl-tab-panel name="login"><og-login></og-login></sl-tab-panel>
        <sl-tab-panel name="register"><og-register></og-register></sl-tab-panel>
      </sl-tab-group>

    `;
  }

  public static get styles() {
    const mainStyle = css`
    :host {
      display: block;
      padding: 25px;
      color: var(--my-element-text-color);
    }

    sl-tab {
      width: 50%;
      text-align: center;
    }
    `
    return [mainStyle];
  }
}