import { LitElement, css, html } from 'lit';
import { customElement, state } from 'lit/decorators.js';

import { UserPlanet } from '../api/generated/UserPlanet';
import { PlanetDtoExtended } from '../api/extended/data-contracts';
import { UniverseEnum } from '../api/generated/data-contracts';

// import createLocalizer from '../utils/create-localizer';
// import commonLocales from '../utils/common.locales';

// const localize = createLocalizer(commonLocales);

import './og-game-menu';
import './og-resources';
import './og-planet';

@customElement('og-home')
export class OgHome extends LitElement {
  @state() private universe?: UniverseEnum = UniverseEnum.EAST_BLUE;
  @state() private allPlanets?: Array<PlanetDtoExtended>;
  @state() private activePlanet?: PlanetDtoExtended;

  protected override render() {
    return html`
      <div class="menu">
        <p>Univers XX (vX.XX)</p>
        <og-game-menu></og-game-menu>
      </div>
      <div class="main">
        <div class="header">
          ${this.activePlanet ? html`<og-resources .planet=${this.activePlanet}></og-resources>` : html``}
          </div>
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
    }

    `
    return [mainStyle];
  }

  protected override firstUpdated() {
    this.fetchPlanets();
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
