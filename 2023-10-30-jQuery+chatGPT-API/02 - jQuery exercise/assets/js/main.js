$(() => {
    $('#menu > ul').hide();

    $('#menu > h3').on('mouseenter', function () {
        // $(this).next().slideDown(1000);

        // $(this).next().siblings('ul').slideUp(1000);

        $(this).next().slideDown(1000).siblings('ul').slideUp(1000);
    })
})