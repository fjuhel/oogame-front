import { LitElement, css, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { PlanetDtoExtended } from '../api/extended/data-contracts';

@customElement('og-planet')
export class OgPlanet extends LitElement {
  @property({ type: Object }) private planet!: PlanetDtoExtended;

  protected override render() {
    return html`
      <div class="container ${this.planet.active ? 'active' : ''}">
        <img src=${this.getPlanetIcon().href} />
        <div class="text">${this.planet.name}</div>
        <div class="text">[${this.planet.galaxy}:${this.planet.solarSystem}:${this.planet.slot}]</div>
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
        font-size: 11px;
        text-align: center;
        cursor: pointer;
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
}
