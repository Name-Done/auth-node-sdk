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

export class ConfirmRequestDto {
    /**
    * The email of the user
    */
    'email': string;
    /**
    * The confirmation code sent to the user\'s email
    */
    'code': string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "email",
            "baseName": "email",
            "type": "string"
        },
        {
            "name": "code",
            "baseName": "code",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return ConfirmRequestDto.attributeTypeMap;
    }
}

