export const address = '0x032d18941C72b648DeD5298b58f62ED09c617574';

export function isMobileDevice() {
    return 'ontouchstart' in window || 'onmsgesturechange' in window;
}