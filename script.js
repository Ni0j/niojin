document.addEventListener('DOMContentLoaded', () => {

    const leftPane = document.querySelector(".cd-container");
    const rightPane = document.querySelector(".fa-container");
    const gutter = document.querySelector(".gutter");
    leftPane.style.width = window.innerWidth / 2 - 30 + "px";
    
    function resizer(e) {
      
      window.addEventListener('mousemove', mousemove);
      window.addEventListener('mouseup', mouseup);
      
      let prevX = e.x;
      const leftPanel = leftPane.getBoundingClientRect();
      
      
      function mousemove(e) {
        let newX = prevX - e.x;
        leftPane.style.width = leftPanel.width - newX + "px";
      }
      
      function mouseup() {
        window.removeEventListener('mousemove', mousemove);
        window.removeEventListener('mouseup', mouseup);
        
      }
      
      
    }
    
    
    gutter.addEventListener('mousedown', resizer);


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
