import { LitElement, css, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';

import { PlanetDto } from '../api/generated/data-contracts';
import { IconElementEnum, IconElementStateEnum, IconElementSizeEnum } from '../types';
import createLocalizer from '../utils/create-localizer';
import commonLocales from '../utils/common.locales';

const localize = createLocalizer(commonLocales);

import './og-icon'


@customElement('og-resources')
export class OgResources extends LitElement {
  @property({type: Object}) private planet!: PlanetDto;

  protected override render() {
    return html`
      <header>Image</header>
      <og-icon element="${IconElementEnum.MetalMine}" elementState=${IconElementStateEnum.Ready} elementSize=${IconElementSizeEnum.Medium}></og-icon>
      <og-icon element="${IconElementEnum.CrystalMine}" elementState=${IconElementStateEnum.Ready} elementSize=${IconElementSizeEnum.Medium}></og-icon>
      <og-icon element="${IconElementEnum.DeuteriumMine}" elementState=${IconElementStateEnum.Ready} elementSize=${IconElementSizeEnum.Medium}></og-icon>
      <p>hELLO</p>
    `;
  }

  public static get styles() {
    const mainStyle = css`

    `
    return [mainStyle];
  }
}
