import { LitElement, css, html } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';

import createLocalizer from '../utils/create-localizer';
import commonLocales from '../utils/common.locales';

const localize = createLocalizer(commonLocales);

export const metalIcon = new URL('../assets/resources/metal_small.png', import.meta.url);
export const crystalIcon = new URL('../assets/resources/crystal_small.png', import.meta.url);
export const deuteriumIcon = new URL('../assets/resources/deuterium_small.png', import.meta.url);
export const energyIcon = new URL('../assets/resources/energy_small.png', import.meta.url);

// Create enum of resources
export enum ResourcesEnum {
  metal = 'metal',
  crystal = 'crystal',
  deuterium = 'deuterium',
  energy = 'energy',
}

@customElement('og-resource')
export class OgResource extends LitElement {
  @property({type: String}) private resourceType!: ResourcesEnum;
  @property({type: Number}) private stock!: number;
  @property({type: String}) private lastStockUpdate!: string;
  @property({type: Number}) private production!: number;
  @property({type: Number}) private consumption!: number;
  @property({type: Number}) private storageCapacity!: number;

  @state() private currentTime: number = Date.now(); // State for current time

  protected override render() {
    return html`
        <div class="resources">
          <div>
            <img src=${this.getResourceIcon().href} />
            ${this.resourceType != ResourcesEnum.energy
              ? html`<div>${this.computeCurrentStock(this.stock, this.lastStockUpdate, this.production)}</div>`
              : html`<div>${this.computeAvailableEnergy(this.production, this.consumption)}</div>`
            }
          </div>
        </div>
      `;
  }

  public static get styles() {
    const mainStyle = css`
      .resources {
        display: flex;
        flex-direction: column;
        column-gap: 50px;
        align-items: center;
        color: #a6b8cb;
        text-align: center;
      }
    `
    return [mainStyle];
  }

  public firstUpdated() {
    if (this.resourceType != ResourcesEnum.energy) this.startTimer();
  }

  private startTimer() {
    setInterval(() => {
      this.currentTime = Date.now();
    }, 1000);
  }

  private computeCurrentStock(stock: number, stockLastUpdate: string, production: number) {
    const lastUpdate = new Date(stockLastUpdate);
    const now = this.currentTime;
    const hoursSinceLastUpdate = (now - lastUpdate.getTime()) / 1000 / 3600;
    return Math.round(stock + production * hoursSinceLastUpdate).toLocaleString().replace(" ", ".");
  }

  private computeAvailableEnergy(production: number, consumption: number) {
    return Math.round(production - consumption).toLocaleString().replace(" ", ".");
  }

  private getResourceIcon() {
    switch (this.resourceType) {
      case ResourcesEnum.metal:
        return metalIcon;
      case ResourcesEnum.crystal:
        return crystalIcon;
      case ResourcesEnum.deuterium:
        return deuteriumIcon;
      case ResourcesEnum.energy:
        return energyIcon;
    }
  }

}
