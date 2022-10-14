import $ from 'jquery';


export default class MobileMenu {

    constructor() {
        this.menuIcon = $('.nav__menu-icon');
        // this.menuContent = $('.nav__menu-content');
        this.menuContentMobile = $('.nav__menu-content-mobile');
        this.event();
    }

    event = () => {
        this.menuIcon.click((e) => {
            this.menuContentMobile.toggleClass('nav__visible');
            this.menuIcon.toggleClass('nav__menu-icon__close');
        })
    }


}