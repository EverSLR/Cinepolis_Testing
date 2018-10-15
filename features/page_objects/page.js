export class Page {
    constructor () {
        this.url = 'https://mega.nz/';
        this.max = false;
    }

    open(url, path, max) {
        if (max) {
            browser.windowHandleMaximize('{' + browser.windowHandle().value + '}');
        }; 
        if(url !== this.url) {
            this.url = url;
        }
        browser.url(this.url + path);
    }
}