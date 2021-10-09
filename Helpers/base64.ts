import base64 from 'base64-js'
import * as FileSystem from 'expo-file-system'


function stringToUint8Array(str: string) {
    const length = str.length
    const array = new Uint8Array(new ArrayBuffer(length))
    for(let i = 0; i < length; i++) array[i] = str.charCodeAt(i)
    return array
}

export async function fileToBase64(uri: string) {
    try {
        console.log('here1');
        const content = await FileSystem.readAsStringAsync(uri, {encoding: 'base64'})
        console.log('here2');
        return content;
        return base64.fromByteArray(stringToUint8Array(content))
    } catch(e) {
        console.warn('fileToBase64()', e.message)
        return ''
    }
}

/* Accepts 'rawFile' file object or the data 'uri' */
export function fileToBase64Helper(rawFile: any, uri: string) {
    return fileToBase64(rawFile ? rawFile : uri)
}