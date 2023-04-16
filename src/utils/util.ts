export const getUrlWithParams = (url: string, params: { [key: string]: string }) => {
    return url + '?' + Object.keys(params).map(key => key + '=' + params[key]).join('&');
}