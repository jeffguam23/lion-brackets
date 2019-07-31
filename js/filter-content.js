$('.filters ul li').click(function() {
            $('.filters ul li').removeClass('active');
            $(this).addClass('active');

            var data = $(this).attr('data-filter');
            $flex.isotope({
                filter: data
            })
        });

        var $flex = $(".img-content").isotope({
            itemSelector: ".all",
            percentPosition: true,
            masonry: {
                columnWidth: ".all"
            }
        })
    