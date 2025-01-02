$(document).ready(function() {
    $('.tab').click(function() {
        const filter = $(this).data('filter');
        $('.tab').removeClass('active');
        $(this).addClass('active');

        if (filter === 'all') {
            $('.gallery img').fadeIn(300);
        } else {
            $('.gallery img').fadeOut(300, function() {
                $('.' + filter).fadeIn(300);
            });
        }
    });

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.1
    });

    document.querySelectorAll('.gallery img').forEach(img => {
        observer.observe(img);
    });

    $('.gallery img').click(function() {
        const image = $(this)[0];
        image.classList.add('clicked');
        setTimeout(() => {
            image.classList.remove('clicked');
        }, 300);
    });
});

$(document).ready(function () {
// Modal Elements
const modal = $('#myModal');
const modalImg = $('#img01');
const close = $('.close');

// Image Click Event
$('.gallery img').click(function () {
modal.show(); // Show modal
modalImg.attr('src', $(this).attr('src')); // Set clicked image in modal
});

// Close Modal
close.click(function () {
modal.hide(); // Hide modal
});

// Close Modal on Outside Click
$(window).click(function (e) {
if ($(e.target).is(modal)) {
    modal.hide();
}
});
});