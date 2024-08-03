import { LitElement, css, html } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';

import { PlanetDto } from '../api/generated/data-contracts';

import createLocalizer from '../utils/create-localizer';
import commonLocales from '../utils/common.locales';

const localize = createLocalizer(commonLocales);

import './og-resource'

export const metalIcon = new URL('../assets/resources/metal_small.png', import.meta.url);
export const crystalIcon = new URL('../assets/resources/crystal_small.png', import.meta.url);
export const deuteriumIcon = new URL('../assets/resources/deuterium_small.png', import.meta.url);
export const energyIcon = new URL('../assets/resources/energy_small.png', import.meta.url);

@customElement('og-resources')
export class OgResources extends LitElement {
  @property({type: Object}) private planet!: PlanetDto;
  @state() private currentTime: number = Date.now(); // State for current time

  protected override render() {
    return html`
      <div class="resources">
        <og-resource resourceType='metal' stock=${this.planet.metal} lastStockUpdate=${this.planet.lastResourceUpdate} production=${this.planet.resources.metalProduction}></og-resource>
        <og-resource resourceType='crystal' stock=${this.planet.crystal} lastStockUpdate=${this.planet.lastResourceUpdate} production=${this.planet.resources.crystalProduction}></og-resource>
        <og-resource resourceType='deuterium' stock=${this.planet.deuterium} lastStockUpdate=${this.planet.lastResourceUpdate} production=${this.planet.resources.deuteriumProduction}></og-resource>
        <og-resource resourceType='energy' production=${this.planet.resources.energyProduction} consumption=${this.planet.resources.energyConsumption}></og-resource>
      </div>
    `;
  }

  public static get styles() {
    const mainStyle = css`
      .resources {
        display: flex;
        flex-direction: row;
        column-gap: 30px;
        align-items: center;

        font: normal 9px / 11px;
        font-style: normal;
        font-size: 9px;
        line-height: 11px;
      }
    `
    return [mainStyle];
  }

  public connectedCallback() {
    super.connectedCallback();
    if (!this.planet) {
      throw new Error('The "planet" property is required.');
    }
    this.startTimer(); // Start the interval timer
  }

  private startTimer() {
    setInterval(() => {
      this.currentTime = Date.now();
    }, 1000);
  }

  private computeCurrentStock(stock: number, stockLastUpdate: string, productionRate: number) {
    const lastUpdate = new Date(stockLastUpdate);
    const now = this.currentTime;
    const hoursSinceLastUpdate = (now - lastUpdate.getTime()) / 1000 / 3600;
    return Math.round(stock + productionRate * hoursSinceLastUpdate);
  }

}
