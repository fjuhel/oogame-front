/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

export interface CreateUserPlanetRequest {
  planet?: Planet;
  universe?: UniverseEnum;
}

export interface LoginRequest {
  password?: string;
  username?: string;
}

export interface Planet {
  /** @format int32 */
  allianceDepotLevel?: number;
  /** @format int32 */
  antiBallisticMissile?: number;
  /** @format int32 */
  crawler?: number;
  /** @format int32 */
  crystal?: number;
  /** @format int32 */
  crystalMineLevel?: number;
  /** @format int32 */
  crystalStorageLevel?: number;
  /** @format int32 */
  deuterium?: number;
  /** @format int32 */
  deuteriumMineLevel?: number;
  /** @format int32 */
  deuteriumStorageLevel?: number;
  /** @format int32 */
  diameter?: number;
  /** @format int32 */
  fusionReactorLevel?: number;
  /** @format int32 */
  galaxy?: number;
  /** @format int32 */
  gaussCannon?: number;
  /** @format int32 */
  heavyLaser?: number;
  /** @format int64 */
  id?: number;
  /** @format int32 */
  interplanetaryMissile?: number;
  /** @format int32 */
  ionCannon?: number;
  /** @format int32 */
  largeShield?: number;
  /** @format date-time */
  lastResourceUpdate?: string;
  /** @format int32 */
  lightLaser?: number;
  /** @format int32 */
  maxTemperature?: number;
  /** @format int32 */
  metal?: number;
  /** @format int32 */
  metalMineLevel?: number;
  /** @format int32 */
  metalStorageLevel?: number;
  /** @format int32 */
  minTemperature?: number;
  /** @format int32 */
  missileSiloLevel?: number;
  name?: string;
  /** @format int32 */
  naniteFactoryLevel?: number;
  /** @format int32 */
  plasmaTurret?: number;
  /** @format int32 */
  researchLabLevel?: number;
  /** @format int32 */
  roboticsFactoryLevel?: number;
  /** @format int32 */
  rocketLauncher?: number;
  /** @format int32 */
  shipyardLevel?: number;
  /** @format int32 */
  slot?: number;
  /** @format int32 */
  smallShield?: number;
  /** @format int32 */
  solarPlantLevel?: number;
  /** @format int32 */
  solarSatellite?: number;
  /** @format int32 */
  solarSystem?: number;
  /** @format int32 */
  spaceDockLevel?: number;
  /** @format int32 */
  terraformerLevel?: number;
  userUniverse?: UserUniverse;
}

export interface PlanetDto {
  /** @format int32 */
  allianceDepotLevel: number;
  /** @format int32 */
  antiBallisticMissile: number;
  /** @format int32 */
  crawler: number;
  /** @format int32 */
  crystal: number;
  /** @format int32 */
  crystalMineLevel: number;
  /** @format int32 */
  crystalStorageLevel: number;
  /** @format int32 */
  deuterium: number;
  /** @format int32 */
  deuteriumMineLevel: number;
  /** @format int32 */
  deuteriumStorageLevel: number;
  /** @format int32 */
  diameter: number;
  /** @format int32 */
  fusionReactorLevel: number;
  /** @format int32 */
  galaxy: number;
  /** @format int32 */
  gaussCannon: number;
  /** @format int32 */
  heavyLaser: number;
  /** @format int64 */
  id: number;
  /** @format int32 */
  interplanetaryMissile: number;
  /** @format int32 */
  ionCannon: number;
  /** @format int32 */
  largeShield: number;
  /** @format date-time */
  lastResourceUpdate: string;
  /** @format int32 */
  lightLaser: number;
  /** @format int32 */
  maxTemperature: number;
  /** @format int32 */
  metal: number;
  /** @format int32 */
  metalMineLevel: number;
  /** @format int32 */
  metalStorageLevel: number;
  /** @format int32 */
  minTemperature: number;
  /** @format int32 */
  missileSiloLevel: number;
  name: string;
  /** @format int32 */
  naniteFactoryLevel: number;
  /** @format int32 */
  plasmaTurret: number;
  /** @format int32 */
  researchLabLevel: number;
  resources: PlanetResources;
  /** @format int32 */
  roboticsFactoryLevel: number;
  /** @format int32 */
  rocketLauncher: number;
  /** @format int32 */
  shipyardLevel: number;
  /** @format int32 */
  slot: number;
  /** @format int32 */
  smallShield: number;
  /** @format int32 */
  solarPlantLevel: number;
  /** @format int32 */
  solarSatellite: number;
  /** @format int32 */
  solarSystem: number;
  /** @format int32 */
  spaceDockLevel: number;
  /** @format int32 */
  terraformerLevel: number;
}

export interface PlanetResources {
  /** @format int32 */
  crystalProduction: number;
  /** @format int32 */
  crystalStorage: number;
  /** @format int32 */
  deuteriumProduction: number;
  /** @format int32 */
  deuteriumStorage: number;
  /** @format int32 */
  energyConsumption: number;
  /** @format int32 */
  energyProduction: number;
  /** @format int32 */
  metalProduction: number;
  /** @format int32 */
  metalStorage: number;
}

export interface RegisterRequest {
  password?: string;
  username?: string;
}

export interface UniverseDto {
  universe?: UniverseEnum;
}

export enum UniverseEnum {
  EAST_BLUE = "EAST_BLUE",
  DRESSROSA = "DRESSROSA",
  WANO = "WANO",
}

export interface User {
  /** @format int64 */
  id?: number;
  password?: string;
  /** @uniqueItems true */
  roles?: string[];
  /** @uniqueItems true */
  userUniverses?: UserUniverse[];
  username?: string;
}

export interface UserUniverse {
  /** @format int32 */
  energyTechnologyLevel?: number;
  /** @format int32 */
  honorPoints?: number;
  /** @format int64 */
  id?: number;
  /** @uniqueItems true */
  planets?: Planet[];
  /** @format int32 */
  points?: number;
  universe?: UniverseEnum;
  user?: User;
}
