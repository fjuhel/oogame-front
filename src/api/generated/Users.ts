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

import { User } from "./data-contracts";
import { HttpClient, RequestParams } from "./http-client";

export class Users<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags Users
   * @name GetUser
   * @request GET:/api/user/
   */
  getUser = (params: RequestParams = {}) =>
    this.request<User, any>({
      path: `/api/user/`,
      method: "GET",
      ...params,
    });
}
