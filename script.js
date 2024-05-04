document.addEventListener('DOMContentLoaded', () => {


    var elem = document.querySelector('.main-carousel');
    var flkty = new Flickity(elem, {
        // options
        cellAlign: 'left',
        contain: true,
        // wrapAround: true,
        // draggable: true,
    });

    // element argument can be a selector string
    //   for an individual element
    var flkty = new Flickity('.main-carousel', {

    });
});
