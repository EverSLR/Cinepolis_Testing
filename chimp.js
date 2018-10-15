module.exports = {
    watch: false,
    watchTags: '@watch,@focus',
    path: './features',
    format: 'pretty',
    tags: ['~@ignore','~@pending','~@login'],
    webdriverio: {
        waitforTimeout: 20000
    }
}

//~@<tag> to not execute tag