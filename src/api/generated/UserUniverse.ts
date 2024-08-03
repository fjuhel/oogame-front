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

import { UniverseEnum, UserUniverse } from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class UserUniverse<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags UserUniverse
   * @name CreateUserUniverse
   * @request POST:/api/universe
   */
  createUserUniverse = (data: UniverseEnum, params: RequestParams = {}) =>
    this.request<UserUniverse, any>({
      path: `/api/universe`,
      method: "POST",
      body: data,
      type: ContentType.Json,
      ...params,
    });
}
