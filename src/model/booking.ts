/**
 * Publishing sites booking API
 * This is a sample API for handling bookings on publishing sites.
 *
 * OpenAPI spec version: 1.0.0
 * Contact: apiteam@swagger.io
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
 import { Publisher } from './publisher';

 export interface Booking { 
     id?: number;
     by?: Publisher;
     when?: Date;
     start?: Date;
     end?: Date;
 }