import $ from 'jquery';

export default class Modal {
 
    constructor(){
        this.modal = $('.modal');
        this.close = $('.modal__close');
        this.links = $(".modal__link");

        this.events();

    }

    events = () => {
                
                this.links.each((index, link) => {
                    link.on("click", () => {this.openModal(link)});
                });
    }

    openModal = (link) => {
        console.log(link);
    }
    // events = () => {
        //opening the modal

        //     this.links.each((index, link) => {
        //         link.click(() => {
        //             console.log(link);
        //         });
        //     }
        // }

        //closing the modal
            // this.close.click(this.modalClose.bind(this))
    

    // modalOpen = () => {
    //     this.modal.addClass('modal__visibile');
    //     return false;
    // }

    // modalClose = () => {
    //     this.modal.removeClass('modal__visible');
    // }
}