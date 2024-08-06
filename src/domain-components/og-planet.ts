import { LitElement, css, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { PlanetDtoExtended } from '../api/extended/data-contracts';

import { routeRedirected } from '../tools/route-redirected';
import createLocalizer from '../utils/create-localizer';
import commonLocales from '../utils/common.locales';

const localize = createLocalizer(commonLocales);

@customElement('og-planet')
export class OgPlanet extends LitElement {
  @property({ type: Object }) private planet!: PlanetDtoExtended;

  protected override render() {
    return html`
      <div class="wrapper" @mouseover=${this.showTooltip} @mouseout=${this.hideTooltip}>
        <div class="container ${this.planet.active ? 'active' : ''}">
          <img src=${this.getPlanetIcon().href} />
          <div class="text">${this.planet.name == 'gum-gum bazooka' ? 'court': this.planet.name}</div>
          <div class="text">[${this.planet.galaxy}:${this.planet.solarSystem}:${this.planet.slot}]</div>
        </div>
        <div class="tooltip-hitbox">
          <div class="tooltip">
            <div>${this.planet.name} [${this.planet.galaxy}:${this.planet.solarSystem}:${this.planet.slot}]</div>
            <div>${this.planet.diameter.toLocaleString().replace(" ", ".")} km (${this.planet.occupiedFields}/${this.planet.totalFields})</div>
            <div>${this.planet.minTemperature}°C ${localize('common.to')} ${this.planet.maxTemperature}°C</div>
            <div @click=${() => routeRedirected({url: '/overview'})} class="link">${localize('common.overview.capitalize')}</div>
            <div @click=${() => routeRedirected({url: '/resources'})} class="link">${localize('common.resources.capitalize')}</div>
            <div @click=${() => routeRedirected({url: '/research'})} class="link">${localize('common.research.capitalize')}</div>
            <div @click=${() => routeRedirected({url: '/facilities'})} class="link">${localize('common.facilities.capitalize')}</div>
            <div @click=${() => routeRedirected({url: '/shipyard'})} class="link">${localize('common.shipyard.capitalize')}</div>
            <div @click=${() => routeRedirected({url: '/defence'})} class="link">${localize('common.defence.capitalize')}</div>
            <div @click=${() => routeRedirected({url: '/fleet'})} class="link">${localize('common.fleet.capitalize')}</div>
            <div @click=${() => routeRedirected({url: '/galaxy'})} class="link">${localize('common.galaxy.capitalize')}</div>
          </div>
        </div>
      </div>
    `;
  }

  public static get styles() {
    return css`
      :host {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: 78px;
        width: 130px;
        cursor: pointer;
        position: relative;
      }

      .wrapper {
        width: 100%;
      }

      .container {
        width: 100%;
        font-size: 11px;
        text-align: center;
        color: #6F9FC8;
        text-decoration: underline;
      }

      :host(:hover) .container {
        color: #99cc00;
      }

      .container.active {
        color: #99cc00;
        font-weight: 700;
      }

      img {
        height: 48px;
        width: 48px;
      }

      :host(:hover) img {
        box-shadow: 0px 0px 6px 1px #9C0, inset 0px 0px 3px 4px #9C0!important;
        border-radius: 24px;
      }

      .container.active img {
        box-shadow: 0 0 6px 1px #FF9600, 0 0 3px 4px #FF9600 inset;
        border-radius: 24px;
      }

      .wrapper {
        position: relative;
      }

      .tooltip-hitbox {
        position: absolute;
        left: calc(-160px);
        top: 50%;
        transform: translateY(-50%);
        visibility: hidden;
        opacity: 0;
        transition: visibility 0s, opacity 0.2s;
        padding-right: 50px;
      }

      .tooltip {
        background: linear-gradient(to bottom, #2f3945, #0d1115);
        color: #fff;
        border-radius: 4px;
        border: 1px solid #394959;
        font-size: 10px;
        line-height: 16px;
        white-space: nowrap;
        padding: 5px;
      }

      .wrapper:hover .tooltip {
        visibility: visible;
        opacity: 1;
      }

      .link {
        color: #6F9FC8;
      }

      .link:hover {
        color: #99cc00;
        text-decoration: underline;
      }
    `;
  }

  private getPlanetIcon() {
    switch (this.planet.slot) {
      case 12:
        return new URL('../assets/planets/planet1.png', import.meta.url);
      case 8:
        return new URL('../assets/planets/planet2.png', import.meta.url);
      default:
        return new URL('../assets/planets/planet3.png', import.meta.url);
    }
  }

  private showTooltip() {
    const tooltip = this.shadowRoot?.querySelector('.tooltip-hitbox') as HTMLElement;
    if (tooltip) {
      tooltip.style.visibility = 'visible';
      tooltip.style.opacity = '1';
    }
  }

  private hideTooltip() {
    const tooltip = this.shadowRoot?.querySelector('.tooltip-hitbox') as HTMLElement;
    if (tooltip) {
      tooltip.style.visibility = 'hidden';
      tooltip.style.opacity = '0';
    }
  }
}
