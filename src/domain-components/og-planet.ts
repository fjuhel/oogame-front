import { LitElement, css, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';

import { PlanetDto } from '../api/generated/data-contracts';


@customElement('og-planet')
export class OgPlanet extends LitElement {
  @property({type: Object}) private planet!: PlanetDto;

  protected override render() {
    return html`
    <img src=${this.getPlanetIcon().href} />
      <div class="planet-name">${this.planet.name}</div>
      <div class="planet-position">[${this.planet.galaxy}:${this.planet.solarSystem}:${this.planet.slot}]</div>

    `;
  }

  public static get styles() {
    const mainStyle = css`
    :host {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      height: 78px;
      width: 130px;
      font-size: 11px;
      text-align: center;
    }

    img {
      height: 48px;
      width: 48px;
    }

    .planet-name, .planet-position {
      color: #6F9FC8;
      text-decoration: underline;
    }

    .planet-name, .planet-position :hover {
      cursor: pointer;
      color:#99cc00;
      font-weight: 700;
    }
    `
    return [mainStyle];
  }

  private getPlanetIcon() {
    console.log(this.planet.slot)
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
