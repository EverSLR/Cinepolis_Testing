import {Page} from './page';

class HomePage extends Page {

    open(max = false){
        super.open('http://www.cinepolis.com/',"", max);
    }

    submit() {
        this.form.click();
    }
}

export default new HomePage();