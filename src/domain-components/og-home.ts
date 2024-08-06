import { LitElement, css, html } from 'lit';
import { customElement, state } from 'lit/decorators.js';

import { UserPlanet } from '../api/generated/UserPlanet';
import { PlanetDtoExtended } from '../api/extended/data-contracts';
import { UniverseEnum } from '../api/generated/data-contracts';

// import createLocalizer from '../utils/create-localizer';
// import commonLocales from '../utils/common.locales';

// const localize = createLocalizer(commonLocales);

import './og-game-menu';
import './og-resource';
import './og-resources';
import './og-planet';

@customElement('og-home')
export class OgHome extends LitElement {
  @state() private universe?: UniverseEnum = UniverseEnum.EAST_BLUE;
  @state() private allPlanets?: Array<PlanetDtoExtended>;
  @state() private activePlanet?: PlanetDtoExtended;
  @state() private currentPage: string = 'overview';

  constructor() {
    super();
    this.onLocationChange = this.onLocationChange.bind(this);
    window.addEventListener('location-changed', this.onLocationChange);
  }

  protected override render() {
    return html`
      <div class="menu">
        <p>Univers XX (vX.XX)</p>
        <og-game-menu></og-game-menu>
      </div>
      <div class="main">
        <div class="header">
          <div class="resources">
          ${this.activePlanet ? html`
            <og-resource resourceType='metal' stock=${this.activePlanet.metal} lastStockUpdate=${this.activePlanet.lastResourceUpdate} production=${this.activePlanet.resources.metalProduction}></og-resource>
            <og-resource resourceType='crystal' stock=${this.activePlanet.crystal} lastStockUpdate=${this.activePlanet.lastResourceUpdate} production=${this.activePlanet.resources.crystalProduction}></og-resource>
            <og-resource resourceType='deuterium' stock=${this.activePlanet.deuterium} lastStockUpdate=${this.activePlanet.lastResourceUpdate} production=${this.activePlanet.resources.deuteriumProduction}></og-resource>
            <og-resource resourceType='energy' production=${this.activePlanet.resources.energyProduction} consumption=${this.activePlanet.resources.energyConsumption}></og-resource>
              ` : html``}
          </div>
        </div>
        <div class="body">
          ${this.getCurrentPage()}
        </div>
        <div class="planets">
          ${this.allPlanets?.map((planet: PlanetDtoExtended) => html`<og-planet .planet=${planet}></og-planet>`)}
        </div>
      </div>
    `;
  }

  public static get styles() {
    const mainStyle = css`
    :host {
      display: flex;
      flex-direction: row;
      height: 100%;
    }
    .menu {
      flex: 0 0 300px;
      height: 100%;
      display: flex;
      flex-direction: column;
    }

    .resources {
        display: flex;
        flex-direction: row;
        column-gap: 30px;
        align-items: center;
        justify-content: center;
        font: normal 9px / 11px;
        font-style: normal;
        font-size: 9px;
        line-height: 11px;
      }

    .main {
      flex: 1 1 auto;
      height: 100%;
    }

    .planets {
      display: flex;
      flex-direction: column;
      flex-wrap: wrap;
      align-items: center;
      row-gap: 30px;
      padding-top: 150px;
    }

    `
    return [mainStyle];
  }

  protected override firstUpdated() {
    this.fetchPlanets();
    this.onLocationChange();
  }

  private onLocationChange() {
    const url = new URL(window.location.href);
    const newPage = url.pathname.slice(1);
    this.currentPage = newPage;
    }

  private getCurrentPage() {
    switch (this.currentPage) {
      case 'overview':
        return html`<og-overview .planet=${this.activePlanet}></og-overview>`;
      case 'resources':
        return html`<og-resources .planet=${this.activePlanet}></og-resources>`;
      default:
        return html`<p>I don't know where I am</p>`;
    }
  }

  private async fetchPlanets() {
    const userPlanet = new UserPlanet();
    try {
      const response = await userPlanet.listUserPlanets({universe: this.universe});
      const responseData = await response.json();
      this.allPlanets = responseData;
      if (this.allPlanets?.length) {
        this.allPlanets[0].active = true;
        this.activePlanet = this.allPlanets[0];
      }
    } catch (error) {
      console.error('Failed to fetch planets', error);
    }
  }
}
