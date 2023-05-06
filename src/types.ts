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

export interface Health {
  /**
   * The status of the API
   * @example "ok"
   */
  status: "ok";
  /**
   * The uptime of the API in seconds
   * @format int64
   * @example 60
   */
  uptime: number;
}
