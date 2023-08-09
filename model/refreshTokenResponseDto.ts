/**
 * Name Done - Auth Service
 * An authentication service API for Name Done
 *
 * The version of the OpenAPI document: 0.0.3
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RequestFile } from './models';

export class RefreshTokenResponseDto {
    /**
    * The ID token for the user
    */
    'idToken': string;
    /**
    * The access token for the user
    */
    'accessToken': string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "idToken",
            "baseName": "idToken",
            "type": "string"
        },
        {
            "name": "accessToken",
            "baseName": "accessToken",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return RefreshTokenResponseDto.attributeTypeMap;
    }
}

