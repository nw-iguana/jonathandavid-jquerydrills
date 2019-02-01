$(function handleOurClicks() {
    $('.thumbnail').on('click', function(event) {
        let thumbCat = $(this).find('img').attr('src');
        $('.hero').find('img').attr('src', thumbCat);
        let altHero = $(this).find('img').attr('alt');
        $('.hero').find('img').attr('alt', altHero);
    })
});

$(handleOurClicks);