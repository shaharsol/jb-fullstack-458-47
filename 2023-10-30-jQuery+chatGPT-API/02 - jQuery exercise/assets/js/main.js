$(() => {
    $('#menu > ul').hide();

    $('#menu > h3').on('mouseenter', function () {
        // $(this).next().slideDown(1000);

        // $(this).next().siblings('ul').slideUp(1000);

        $(this).next().slideDown(1000).siblings('ul').slideUp(1000);

        $('a').attr('href', 'https://google.com')

        const inputValue = $('input[type=text]').val() // get value
        $('input[type=text]').val('some input') // set value

        // once, there wasn't fetch...
        // so we had to use $.ajax or $.get $.post $.getJSON
        // XmlHttpRequest (xhr)

    })
})