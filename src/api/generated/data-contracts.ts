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

export interface LoginRequest {
  password?: string;
  username?: string;
}

export interface Planet {
  /** @format int32 */
  crystalMineLevel?: number;
  /** @format int32 */
  deuteriumMineLevel?: number;
  /** @format int64 */
  id?: number;
  /** @format int32 */
  metalMineLevel?: number;
  name?: string;
  userUniverse?: UserUniverse;
}

export interface PlanetDto {
  /** @format int32 */
  crystalMineLevel?: number;
  /** @format int32 */
  deuteriumMineLevel?: number;
  /** @format int64 */
  id?: number;
  /** @format int32 */
  metalMineLevel?: number;
  name?: string;
}

export interface RegisterRequest {
  password?: string;
  username?: string;
}

export interface User {
  /** @format int64 */
  id?: number;
  password?: string;
  /** @uniqueItems true */
  roles?: string[];
  username?: string;
}

export interface UserUniverse {
  /** @format int32 */
  honorPoints?: number;
  /** @format int64 */
  id?: number;
  /** @uniqueItems true */
  planets?: Planet[];
  /** @format int32 */
  points?: number;
  universe?: "EAST_BLUE" | "DRESSROSA" | "WANO";
  user?: User;
}
