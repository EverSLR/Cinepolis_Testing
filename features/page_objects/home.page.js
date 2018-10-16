import {Page} from './page';

class HomePage extends Page {
    
    constructor() {
        super(); this.moviesObj = {movies : []};
        this.matchArray = [];
    }

    //Getter
    get city() {
        return  browser.element('#cmbCiudades');
    }

    get form() {
        return browser.element('#busqueda input')
    }

    get movies() {
        return browser.elements('a[class~="datalayer-movie"]');
    }

    get moviesLink() {
        return browser.elements('a[class~="datalayer-movie"]');
    }

    get titleSyn() {
        return browser.getText('#ContentPlaceHolder1_ctl_sinopsis_ctl_titulo')
    }

    get theater() {
        return browser.getText('div[idcomplejo]:not([class~="locationHide"]) h3')
    }

    get showtimesSyn() {
        return browser.getText('div[idcomplejo]:not([class~="locationHide"]) time a')
    }

    get returnBtn() {
        return browser.element('#ContentPlaceHolder1_link_encartelera')
    }

    //Methods

    pushToObjc() {
        let showtimes = [];
        this.movies.value.forEach((name,i) => {
            showtimes = browser.getText(`article:nth-child(${i + 2}) time[data-oculto="0"] a`);
            this.moviesObj.movies.push({ 'name' : browser.elementIdText(name.ELEMENT).value, 'showtimes' : `${showtimes}` });
        });
    }

    testMatchShowtime() {

        let movieJSON = this.moviesObj.movies

        for(let i = 0; i < this.moviesLink.value.length; i++) {
            this.moviesLink.value[i].click();
            this.returnBtn.waitForVisible();
            //Comparacion con JSON
            if( (movieJSON[i].name === this.titleSyn) && (movieJSON[i].showtimes === `${this.showtimesSyn}`) && (this.theater.includes('San Pedro'))) {
                this.matchArray.push(true);
            } else {
                // if (movieJSON[i].name !== this.titleSyn){
                //     console.log(`|:${movieJSON[i].name}: != :${this.titleSyn}:|`);
                // }
                // if (movieJSON[i].showtimes !== `${this.showtimesSyn}`) {
                //     console.log(`|:${movieJSON[i].showtimes}: != :${this.showtimesSyn}:|`);
                // }
                // if (this.theater.includes('San Pedro')) {
                //     console.log('|Includes San Pedro|');
                // } else console.log('|Not includes San Pedro|');
                this.matchArray.push(false);
            }
            this.returnBtn.click();
        };
    }

    open(max = false){
        super.open('http://www.cinepolis.com/',"", max);
    }

    removeAd() {
        browser.click('#takeover-close img')
    }

    submit() {
        this.form.click();
    }
}

export default new HomePage();