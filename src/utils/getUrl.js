const URL_BASE = 'https://bikewise.org:443/api/v2/';

export default function(url, options) {
    let optionsEntries = Object.entries(options),
        optionsString = '';

    if (optionsEntries.length) {
        optionsString = '?';
        optionsEntries.forEach(([key, value], i) => {
            optionsString += `${key}=${value}`;
            if (index < i - 1) {
                optionsString += '&';
            }
        });
    }
    return `${URL_BASE}${url}${optionsString}`;
}