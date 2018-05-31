import * as deno from 'deno';

export function readTextSync(filename: string): string {
    return new TextDecoder('utf-8').decode(deno.readFileSync(filename));
}

export function readJsonSync<T>(filename: string): T {
    return JSON.parse(readTextSync(filename));
}

interface TestJson {
    hello: string;
    '🦄': string;
}

const testJson = readJsonSync<TestJson>('./test.json');

console.log(testJson.hello);
console.log(testJson['🦄']);
