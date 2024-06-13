$(document).ready(function() {
    $('button[type="submit"]').on('click', function() {
        $(this).addClass('active').html('<i class="fas fa-spinner fa-spin"></i> Sending...');
    });

    $('#contactForm').on('submit', function(e) {
        e.preventDefault();
        var form = $(this);

        $.ajax({
            url: form.attr('action'),
            type: form.attr('method'),
            data: form.serialize(),
            success: function(response) {
                $('button[type="submit"]').removeClass('active').html('Send Message');
                form.trigger('reset');
                alert('Message sent successfully!');
            },
            error: function() {
                $('button[type="submit"]').removeClass('active').html('Send Message');
                alert('There was an error sending your message.');
            }
        });
    });
});
