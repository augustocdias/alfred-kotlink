export const alfred: {
    cache: any;
    data: any;
    preferences: any;
    preferencesLocalHash: any;
    theme: any;
    themeBackground: any;
    themeSelectionBackground: any;
    themeSubtext: number;
    version: any;
};
export const cache: {
    clear: Function;
    delete: Function;
    encryptionKey: any;
    events: {
        addListener: Function;
        emit: Function;
        eventNames: Function;
        getMaxListeners: Function;
        listenerCount: Function;
        listeners: Function;
        off: Function;
        on: Function;
        once: Function;
        prependListener: Function;
        prependOnceListener: Function;
        rawListeners: Function;
        removeAllListeners: Function;
        removeListener: Function;
        setMaxListeners: Function;
    };
    get: Function;
    has: Function;
    isExpired: Function;
    onDidChange: Function;
    path: string;
    set: Function;
    size: any;
    store: any;
    version: any;
};
export const config: {
    clear: Function;
    delete: Function;
    encryptionKey: any;
    events: {
        addListener: Function;
        emit: Function;
        eventNames: Function;
        getMaxListeners: Function;
        listenerCount: Function;
        listeners: Function;
        off: Function;
        on: Function;
        once: Function;
        prependListener: Function;
        prependOnceListener: Function;
        rawListeners: Function;
        removeAllListeners: Function;
        removeListener: Function;
        setMaxListeners: Function;
    };
    get: Function;
    has: Function;
    onDidChange: Function;
    path: string;
    set: Function;
    size: any;
    store: any;
};
export const debug: boolean;
export function error(error: any): void;
export function fetch(url: string, options?: object): Promise<any>;
export namespace icon {
    const alert: string;
    const error: string;
    function get(name: any): void;
    const info: string;
    const like: string;
    const warning: string;
}
export const input: string;
export function inputMatches(list: any, item: any): void;
export function log(text: any): void;
export function matches(input: any, list: any, item: any): any;
export const meta: {
    bundleId: any;
    name: any;
    uid: any;
    version: any;
};
export function output(items: any): void;
