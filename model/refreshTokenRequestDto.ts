/**
 * Name Done - Auth Service
 * An authentication service API for Name Done
 *
 * The version of the OpenAPI document: 0.0.10
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RequestFile } from './models';

export class RefreshTokenRequestDto {
    /**
    * The refresh token to be used for generating new tokens.
    */
    'refreshToken': string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "refreshToken",
            "baseName": "refreshToken",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return RefreshTokenRequestDto.attributeTypeMap;
    }
}

