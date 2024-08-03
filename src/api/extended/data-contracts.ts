import { PlanetDto } from '../generated/data-contracts';

export interface PlanetDtoExtended extends PlanetDto {
  active?: boolean;
}
