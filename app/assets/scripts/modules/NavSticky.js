import $ from 'jquery';
import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints';

export default class RevealOnScroll {

    constructor() {
        this.nav = document.querySelector(".nav");
        this.navLinks = $(".nav__link");
        this.pageSections = $(".page-section");
        this.handleDark();
        this.createPageSectionWaypoints();
    }

    handleDark = () => {
        var item = this.nav;
        var logo = document.querySelector(".nav__img");

        new Waypoint({
            
            element: item,

            handler: function(direction) {
                if (direction == 'down') {
                    item.classList.add('nav__dark');
                    logo.classList.add('nav__img-dark');
                } else {
                    item.classList.remove('nav__dark');
                    logo.classList.remove('nav__img-dark');
                }
              },
              offset: '-5%',
        });
    }

    createPageSectionWaypoints(){
        this.pageSections.each((index,item) => {
            var activeLink = item.getAttribute('data-matching-link');

            new Waypoint({
                element: item,
                handler: (direction) => {
                    if(direction == 'down'){
                        this.navLinks.removeClass("nav__active");
                        $(activeLink).addClass("nav__active");
                    }
                },
                offset: '18%',
            });

            new Waypoint({
                element: item,
                handler: (direction) => {
                    if(direction == 'up'){
                        this.navLinks.removeClass("nav__active");
                        $(activeLink).addClass("nav__active");
                    }
                },
                offset: '-60%',
            });
        });
    }





}