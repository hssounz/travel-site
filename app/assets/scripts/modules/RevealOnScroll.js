import $ from 'jquery';
import Waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints';


export default class RevealOnScroll {

    constructor() {
        this.features = document.querySelectorAll('#feature, .card');
        this.handleFeatures();
    }



    handleFeatures = () => {
        this.features.forEach(item => {
            item.classList.add("reveal-item");

            new Waypoint({
                element: item,
                handler: () => {
                    item.classList.add("reveal-item--visibilee");
                },
                offset: '85%' ,
            });
        });
    }


}