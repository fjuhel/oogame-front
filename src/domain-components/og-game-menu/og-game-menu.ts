import { LitElement, css, html } from 'lit';
import { customElement } from 'lit/decorators.js';

import '@shoelace-style/shoelace/dist/components/tab-group/tab-group.js';
import '@shoelace-style/shoelace/dist/components/tab/tab.js';
import '@shoelace-style/shoelace/dist/components/tab-panel/tab-panel.js';
import '@shoelace-style/shoelace/dist/themes/light.css';

import createLocalizer from '../../utils/create-localizer';
import locales from './locales';

const localize = createLocalizer(locales);
import '../og-logout';

@customElement('og-game-menu')
export class OgGameMenu extends LitElement {

  protected override render() {
    return html`
      <ul>
        <li id="overview">${localize('common.overview.capitalize')}</li>
        <li id="resources">${localize('common.resources.capitalize')}</li>
        <li id="lifeform">${localize('common.lifeform.capitalize')}</li>
        <li id="facilities">${localize('common.facilities.capitalize')}</li>
        <li id="merchant">${localize('common.merchant.capitalize')}</li>
        <li id="research">${localize('common.research.capitalize')}</li>
        <li id="shipyard">${localize('common.shipyard.capitalize')}</li>
        <li id="defence">${localize('common.defence.capitalize')}</li>
        <li id="fleet">${localize('common.fleet.capitalize')}</li>
        <li id="galaxy">${localize('common.galaxy.capitalize')}</li>
        <li id="empire">${localize('common.empire.capitalize')}</li>
        <li id="alliance">${localize('common.alliance.capitalize')}</li>
        <li id="combatSimulation">${localize('common.combatSimulation.capitalize')}</li>
        <og-logout></og-logout>
      </ul>
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