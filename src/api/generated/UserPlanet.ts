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

import { Planet, PlanetDto } from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class UserPlanet<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags UserPlanet
   * @name GetUserPlanets
   * @request GET:/api/{universe}/planet
   */
  getUserPlanets = (universe: string, params: RequestParams = {}) =>
    this.request<PlanetDto[], any>({
      path: `/api/${universe}/planet`,
      method: "GET",
      ...params,
    });
  /**
   * No description
   *
   * @tags UserPlanet
   * @name CreateUserPlanet
   * @request POST:/api/{universe}/planet
   */
  createUserPlanet = (universe: string, data: Planet, params: RequestParams = {}) =>
    this.request<PlanetDto, any>({
      path: `/api/${universe}/planet`,
      method: "POST",
      body: data,
      type: ContentType.Json,
      ...params,
    });
}
