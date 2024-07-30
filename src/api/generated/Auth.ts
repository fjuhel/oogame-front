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

import { LoginRequest, RegisterRequest, User } from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class Auth<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags Auth
   * @name Register
   * @request POST:/api/auth/register
   */
  register = (data: RegisterRequest, params: RequestParams = {}) =>
    this.request<User, any>({
      path: `/api/auth/register`,
      method: "POST",
      body: data,
      type: ContentType.Json,
      ...params,
    });
  /**
   * No description
   *
   * @tags Auth
   * @name Login
   * @request POST:/api/auth/login
   */
  login = (data: LoginRequest, params: RequestParams = {}) =>
    this.request<Record<string, string>, any>({
      path: `/api/auth/login`,
      method: "POST",
      body: data,
      type: ContentType.Json,
      ...params,
    });
}
