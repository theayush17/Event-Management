$(document).ready(function() {
           
    $('.tab').click(function() {
        const filter = $(this).data('filter');


        $('.tab').removeClass('active');

        // Add active class to the clicked tab
        $(this).addClass('active');

       
        if (filter === 'all') {
            $('.gallery img').fadeIn(300);
        } else {
            $('.gallery img').fadeOut(300, function() {
                $('.' + filter).fadeIn(300);
            });
        }
    });

                $(window).resize(function() {
        const windowWidth = $(this).width();
        if (windowWidth < 600) {
            $('.gallery').css('grid-template-columns', 'repeat(auto-fit, minmax(150px, 1fr))');
        } else {
            $('.gallery').css('grid-template-columns', 'repeat(auto-fit, minmax(200px, 1fr))');
        }
    }).trigger('resize');
});    

// Get modal
var modal = document.getElementById("myModal");

// Get the image element and insert it inside the modal
var modalImg = document.getElementById("img01");

// Get all images in the gallery
var images = document.querySelectorAll(".gallery img");

// Loop through all images
images.forEach(function(image) {
    image.onclick = function() {
        modal.style.display = "block";  // Show the modal
        modalImg.src = this.src;       // Set the source of the modal image to the clicked image
    };
});

// Get the close button
var span = document.getElementsByClassName("close")[0];

// When the user clicks the close button, close the modal
span.onclick = function() {
    modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
};