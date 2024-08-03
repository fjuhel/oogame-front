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

import { CreateUserPlanetRequest, PlanetDto, UniverseDto } from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class UserPlanet<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags UserPlanet
   * @name ListUserPlanets
   * @request POST:/api/user-planet/list
   */
  listUserPlanets = (data: UniverseDto, params: RequestParams = {}) =>
    this.request<PlanetDto[], any>({
      path: `/api/user-planet/list`,
      method: "POST",
      body: data,
      type: ContentType.Json,
      ...params,
    });
  /**
   * No description
   *
   * @tags UserPlanet
   * @name CreateUserPlanet
   * @request POST:/api/user-planet/create
   */
  createUserPlanet = (data: CreateUserPlanetRequest, params: RequestParams = {}) =>
    this.request<PlanetDto, any>({
      path: `/api/user-planet/create`,
      method: "POST",
      body: data,
      type: ContentType.Json,
      ...params,
    });
}
