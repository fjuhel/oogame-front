import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

import {IconElementEnum, IconElementStateEnum, IconElementSizeEnum} from '../types.ts';

@customElement('og-icon')
class OgIcon extends LitElement {
  @property({ type: String }) element = '' as IconElementEnum;
  @property({ type: Number }) elementState = IconElementStateEnum.Ready as IconElementStateEnum;
  @property({ type: String }) elementSize = IconElementSizeEnum.Medium as IconElementSizeEnum;

  static styles = css`
    :host {
      display: inline-block;
      background: url('../../public/sprite.jpg') no-repeat;
      width: var(--sprite-width);
      height: var(--sprite-height);
      border-radius: 6px;
      border: 2px solid #0d1014
    }
  `;

  private setSprite(element: IconElementEnum, state: IconElementStateEnum, size: IconElementSizeEnum) {
    const mappingElementSizeSize = {
      [IconElementSizeEnum.Large]: 200,
      [IconElementSizeEnum.Medium]: 100,
      [IconElementSizeEnum.Small]: 50,
    }
    const mappingElementSizeOffset = {
      [IconElementSizeEnum.Large]: 0,
      [IconElementSizeEnum.Medium]: 200,
      [IconElementSizeEnum.Small]: 500,
    }
    const mappingElementStateOffset = {
      [IconElementStateEnum.Ready]: 0,
      [IconElementStateEnum.LackResource]: 1,
      [IconElementStateEnum.LackRequirements]: 2,
    }

    enum ElementCategoryEnum {
      Resources = 1,
      Facilities = 2,
      Defence = 3,
      Shipyard = 4,
      Research = 5,
    }

    const mappingElementCategoryOffset = {
      [ElementCategoryEnum.Resources]: 0,
      [ElementCategoryEnum.Facilities]: 0,
      [ElementCategoryEnum.Defence]: 0,
      [ElementCategoryEnum.Shipyard]: 0,
      [ElementCategoryEnum.Research]: 0,
    }

    interface IconIndex {
      small?: number;
      medium?: number;
      large?: number;
      category: ElementCategoryEnum;
    }

    const mappingElement = {
      // Resources (Group 1)
      [IconElementEnum.MetalMine] : { small: 1, medium: 1, large: 0, category: ElementCategoryEnum.Resources },
      [IconElementEnum.CrystalMine] : { small: 4, medium: 4, large: 1, category: ElementCategoryEnum.Resources },
      [IconElementEnum.DeuteriumMine] : { small: 3, medium: 3, large: 2, category: ElementCategoryEnum.Resources },
      [IconElementEnum.SolarPlant] : { small: 2, medium: 2, large: 3, category: ElementCategoryEnum.Resources },
      [IconElementEnum.FusionReactor] : { small: 0, medium: 0, large: 4, category: ElementCategoryEnum.Resources },
      [IconElementEnum.MetalStorage] : { small: 6, medium: undefined, large: 6, category: ElementCategoryEnum.Resources },
      [IconElementEnum.CrystalStorage] : { small: 7, medium: undefined, large: 7, category: ElementCategoryEnum.Resources },
      [IconElementEnum.DeuteriumStorage] : { small: 8, medium: undefined, large: 8, category: ElementCategoryEnum.Resources },

      // Facilities  (Group 2)
      [IconElementEnum.RoboticsFactory] : { small: 0, medium: 0, large: 0, category: ElementCategoryEnum.Facilities },
      [IconElementEnum.Shipyard] : { small: 3, medium: 3, large: 1, category: ElementCategoryEnum.Facilities },
      [IconElementEnum.ResearchLab] : { small: 1, medium: 1, large: 2, category: ElementCategoryEnum.Facilities },
      [IconElementEnum.AllianceDepot] : { small: 2, medium: 2, large: 3, category: ElementCategoryEnum.Facilities },
      [IconElementEnum.MissileSilo] : { small: 6, medium: 6, large: 4, category: ElementCategoryEnum.Facilities },
      [IconElementEnum.NaniteFactory] : { small: 4, medium: 4, large: 5, category: ElementCategoryEnum.Facilities },
      [IconElementEnum.Terraformer] : { small: 5, medium: 5, large: 6, category: ElementCategoryEnum.Facilities },
      [IconElementEnum.SpaceDock] : { small: 10, medium: 10, large: 10, category: ElementCategoryEnum.Facilities },

      // Defence (Group 3)
      [IconElementEnum.RocketLauncher] : { small: 0, medium: 0, large: 0, category: ElementCategoryEnum.Defence },
      [IconElementEnum.LightLaser] : { small: 1, medium: 1, large: 1, category: ElementCategoryEnum.Defence },
      [IconElementEnum.HeavyLaser] : { small: 2, medium: 2, large: 2, category: ElementCategoryEnum.Defence },
      [IconElementEnum.GaussCannon] : { small: 3, medium: 3, large: 3, category: ElementCategoryEnum.Defence },
      [IconElementEnum.IonCannon] : { small: 4, medium: 4, large: 4, category: ElementCategoryEnum.Defence },
      [IconElementEnum.PlasmaTurret] : { small: 5, medium: 5, large: 5, category: ElementCategoryEnum.Defence },
      [IconElementEnum.SmallShield] : { small: 6, medium: 6, large: 6, category: ElementCategoryEnum.Defence },
      [IconElementEnum.LargeShield] : { small: 7, medium: 7, large: 7, category: ElementCategoryEnum.Defence },
      [IconElementEnum.AntiBallisticMissile] : { small: 9, medium: 9, large: 8, category: ElementCategoryEnum.Defence },
      [IconElementEnum.InterplanetaryMissile] : { small: 10, medium: 10, large: 9, category: ElementCategoryEnum.Defence },

      // Shipyard (Group 4)
      [IconElementEnum.LightFighter] : { small: 2, medium: 2, large: 0, category: ElementCategoryEnum.Shipyard },
      [IconElementEnum.HeavyFighter] : { small: 3, medium: 3, large: 1, category: ElementCategoryEnum.Shipyard },
      [IconElementEnum.Cruiser] : { small: 4, medium: 4, large: 2, category: ElementCategoryEnum.Shipyard },
      [IconElementEnum.Battleship] : { small: 5, medium: 5, large: 3, category: ElementCategoryEnum.Shipyard },
      [IconElementEnum.Battlecruiser] : { small: 13, medium: 13, large: 4, category: ElementCategoryEnum.Shipyard },
      [IconElementEnum.Bomber] : { small: 9, medium: 9, large: 5, category: ElementCategoryEnum.Shipyard },
      [IconElementEnum.Destroyer] : { small: 11, medium: 11, large: 6, category: ElementCategoryEnum.Shipyard },
      [IconElementEnum.Deathstar] : { small: 12, medium: 12, large: 7, category: ElementCategoryEnum.Shipyard },
      [IconElementEnum.SmallCargo] : { small: 0, medium: 0, large: 8, category: ElementCategoryEnum.Shipyard },
      [IconElementEnum.LargeCargo] : { small: 1, medium: 1, large: 9, category: ElementCategoryEnum.Shipyard },
      [IconElementEnum.ColonyShip] : { small: 6, medium: 6, large: 10, category: ElementCategoryEnum.Shipyard },
      [IconElementEnum.Recycler] : { small: 7, medium: 7, large: 11, category: ElementCategoryEnum.Shipyard },
      [IconElementEnum.EspionageProbe] : { small: 8, medium: 8, large: 12, category: ElementCategoryEnum.Shipyard },
      [IconElementEnum.SolarSatellite] : { small: 10, medium: 10, large: 13, category: ElementCategoryEnum.Shipyard },
      [IconElementEnum.Reaper] : { small: 14, medium: 14, large: 14, category: ElementCategoryEnum.Shipyard },
      [IconElementEnum.Pathfinder] : { small: 15, medium: 15, large: 15, category: ElementCategoryEnum.Shipyard },
      [IconElementEnum.Crawler] : { small: 16, medium: 16, large: 16, category: ElementCategoryEnum.Shipyard },

      // Research (Group 5)
      [IconElementEnum.EnergyTechnology] : { small: undefined, medium: 5, large: 0, category: ElementCategoryEnum.Research },
      [IconElementEnum.LaserTechnology] : { small: undefined, medium: 10, large: 1, category: ElementCategoryEnum.Research },
      [IconElementEnum.IonTechnology] : { small: undefined, medium: 11, large: 2, category: ElementCategoryEnum.Research },
      [IconElementEnum.HyperspaceTechnology] : { small: undefined, medium: 6, large: 3, category: ElementCategoryEnum.Research },
      [IconElementEnum.PlasmaTechnology] : { small: undefined, medium: 12, large: 4, category: ElementCategoryEnum.Research },
      [IconElementEnum.CombustionDrive] : { small: undefined, medium: 7, large: 5, category: ElementCategoryEnum.Research },
      [IconElementEnum.ImpulseDrive] : { small: undefined, medium: 8, large: 6, category: ElementCategoryEnum.Research },
      [IconElementEnum.HyperspaceDrive] : { small: undefined, medium: 9, large: 7, category: ElementCategoryEnum.Research },
      [IconElementEnum.EspionageTechnology] : { small: undefined, medium: 0, large: 8, category: ElementCategoryEnum.Research },
      [IconElementEnum.ComputerTechnology] : { small: undefined, medium: 1, large: 9, category: ElementCategoryEnum.Research },
      [IconElementEnum.Astrophysics] : { small: undefined, medium: 15, large: 10, category: ElementCategoryEnum.Research },
      [IconElementEnum.IntergalacticResearchNetwork] : { small: undefined, medium: 13, large: 11, category: ElementCategoryEnum.Research },
      [IconElementEnum.GravitonTechnology] : { small: undefined, medium: 14, large: 12, category: ElementCategoryEnum.Research },
      [IconElementEnum.WeaponsTechnology] : { small: undefined, medium: 2, large: 14, category: ElementCategoryEnum.Research },
      [IconElementEnum.ShieldingTechnology] : { small: undefined, medium: 3, large: 15, category: ElementCategoryEnum.Research },
      [IconElementEnum.ArmourTechnology] : { small: undefined, medium: 4, large: 13, category: ElementCategoryEnum.Research },
    }

    if (size === IconElementSizeEnum.Large && state !== IconElementStateEnum.Ready) {
      throw new Error('Large icons can only be ready');
    }
    if (size !== IconElementSizeEnum.Small && (element === IconElementEnum.MetalStorage || element === IconElementEnum.CrystalStorage || element === IconElementEnum.DeuteriumStorage)) {
      throw new Error('Storage icons can only be small');
    }
    if (mappingElement[element].category === ElementCategoryEnum.Research && size === IconElementSizeEnum.Small) {
      throw new Error('Research icons cannot be small');
    }

    const spriteVerticalOffset =
      mappingElementCategoryOffset[mappingElement[element].category]
      + mappingElementSizeOffset[this.elementSize]
      + mappingElementStateOffset[this.elementState] * mappingElementSizeSize[this.elementSize];

    const elementSizeIndex = mappingElement[element][size]
    if(!elementSizeIndex) {
      throw new Error('Undefined element position');
    }
    const spriteHorizontalOffset = mappingElementSizeSize[size] * elementSizeIndex;

    const pixelSize = mappingElementSizeSize[size];

    this.style.setProperty('--sprite-width', `${pixelSize - 4}px`);
    this.style.setProperty('--sprite-height', `${pixelSize - 4}px`);
    this.style.backgroundPosition = `-${spriteHorizontalOffset + 2}px -${spriteVerticalOffset + 2}px`;
    this.style.backgroundSize = `auto`;
  }

  updated() {
    this.setSprite(this.element, this.elementState, this.elementSize);
  }

  render() {
    return html``;
  }

}
