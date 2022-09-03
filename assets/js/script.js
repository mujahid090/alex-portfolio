(function ($) {

    //dom ready start
    $(document).ready(function () {

        //on scroll add sticky class on navbar
        $(window).on('scroll', function () {
            var scroll = $(window).scrollTop();
            if (scroll > 0) {
                $('.navbar').addClass('sticky');
            } else {
                $('.navbar').removeClass('sticky');
            }
        });

        const $dropdown = $(".dropdown");
        const $dropdownToggle = $(".dropdown-toggle");
        const $dropdownMenu = $(".dropdown-menu");
        const showClass = "show";
        $(window).on("load resize", function () {
            if (this.matchMedia("(min-width: 991px)").matches) {
                $dropdown.hover(
                    function () {
                        const $this = $(this);
                        $this.addClass(showClass);
                        $this.find($dropdownToggle).attr("aria-expanded", "true");
                        $this.find($dropdownMenu).addClass(showClass);
                    },
                    function () {
                        const $this = $(this);
                        $this.removeClass(showClass);
                        $this.find($dropdownToggle).attr("aria-expanded", "false");
                        $this.find($dropdownMenu).removeClass(showClass);
                    }
                );
            } else {
                $dropdown.off("mouseenter mouseleave");
            }
        });

        //testimonial carousel
        $('.testimonialCarousel').owlCarousel({
            items: 1,
            autoplay: true,
            loop: true,
            smartSpeed: 600,
            nav:true,
            dots:false,
            navText:['<i class="fas fa-arrow-left"></i>','<i class="fas fa-arrow-right"></i>']
        });

        //logo carousel
        $('.logoCarousel').owlCarousel({
            autoplay: true,
            loop: true,
            smartSpeed: 600,
            responsive : {
                // breakpoint from 0 up
                0 : {
                    items: 1,
                },
                // breakpoint from 380 up
                381 : {
                    items: 3,
                },
                // breakpoint from 575 up
                576 : {
                    items: 3,
                },
                // breakpoint from 768 up
                769 : {
                    items: 4,
                },
                // breakpoint from 991 up
                992 : {
                    items: 5,
                },
                // breakpoint from 1199 up
                1200 : {
                    items: 6,
                }
            }
        });

        var waypoints = $('.count').waypoint(function (direction) {
            $('.timer').countTo();
        }, {
            offset: '75%',
            triggerOnce: true
        });


    });
    //dom ready end
})(jQuery);