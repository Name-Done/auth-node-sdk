/**
 * Name Done - Auth Service
 * An authentication service API for Name Done
 *
 * The version of the OpenAPI document: 0.0.9
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RequestFile } from './models';

export class AcceptedResponseDto {
    /**
    * An informational message
    */
    'message': string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "message",
            "baseName": "message",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return AcceptedResponseDto.attributeTypeMap;
    }
}

