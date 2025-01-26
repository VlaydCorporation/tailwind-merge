// export type ClassNameValue = ClassNameArray | string | null | undefined | 0 | false;
// type ClassNameArray = ClassNameValue[];
//
// export function twJoin(...classLists: ClassNameValue[]): string;
// export function twJoin() {
//     let index = 0;
//     let argument: ClassNameValue;
//     let resolvedValue: string;
//     let string = '';
//
//     while (index < arguments.length) {
//         if ((argument = arguments[index++])) {
//             if ((resolvedValue = toValue(argument))) {
//                 string && (string += ' ');
//                 string += resolvedValue;
//             }
//         }
//     }
//     return string;
// }
//
// function toValue(mix: ClassNameArray | string) {
//     if (typeof mix === 'string') {
//         return mix;
//     }
//
//     let resolvedValue: string;
//     let string = '';
//
//     for (let k = 0; k < mix.length; k++) {
//         if (mix[k]) {
//             if ((resolvedValue = toValue(mix[k] as ClassNameArray | string))) {
//                 string && (string += ' ');
//                 string += resolvedValue;
//             }
//         }
//     }
//
//     return string;
// }


/**
 * The code in this file is copied from https://github.com/lukeed/clsx and modified to suit the needs of tailwind-merge better.
 *
 * Specifically:
 * - Runtime code from https://github.com/lukeed/clsx/blob/v1.2.1/src/index.js
 * - TypeScript types from https://github.com/lukeed/clsx/blob/v1.2.1/clsx.d.ts
 *
 * Original code has MIT license: Copyright (c) Luke Edwards <luke.edwards05@gmail.com> (lukeed.com)
 */


export type ClassNameValue =
    | ClassNameArray
    | ClassNameDictionary
    | string
    | number
    | bigint
    | null
    | boolean
    | undefined;
export type ClassNameDictionary = Record<string, any>;
export type ClassNameArray = ClassNameValue[];

export function twJoin(...classLists: ClassNameValue[]): string;
export function twJoin() {
    let index = 0;
    let argument: ClassNameValue;
    let resolvedValue: string;
    let str = '';

    while (index < arguments.length) {
        if ((argument = arguments[index++])) {
            if ((resolvedValue = toValue(argument))) {
                str && (str += ' ');
                str += resolvedValue;
            }
        }
    }
    return str;
}

function toValue(mix: Exclude<Exclude<ClassNameValue, null>, undefined>) {
    let str = '',
        resolvedValue: string;

    if (typeof mix === 'string' || typeof mix === 'number') {
        str += mix;
    } else if (typeof mix === 'object') {
        if (Array.isArray(mix)) {
            for (let k = 0; k < mix.length; k++) {
                if (mix[k]) {
                    if ((resolvedValue = toValue(mix[k]))) {
                        str && (str += ' ');
                        str += resolvedValue;
                    }
                }
            }
        } else {
            for (resolvedValue in mix) {
                if (mix[resolvedValue]) {
                    str && (str += ' ');
                    str += resolvedValue;
                }
            }
        }
    }

    return str;
}
