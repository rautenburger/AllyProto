$(function () {
    //copy/pasted time countdown function
    // Set the date we're counting down to

    var countDownDate = new Date();
    //add time ahead of the current time
    countDownDate.setHours(countDownDate.getHours() + 2);

    // Update the count down every 1 second
    var x = setInterval(function () {
        // Get today's date and time
        var now = new Date().getTime();

        // Find the distance between now and the count down date
        var distance = countDownDate - now;

        // Time calculations for days, hours, minutes and seconds
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor(
            (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Display the result in the element with id="demo"
        document.getElementById("demo").innerHTML = hours + "h " + minutes + "m"; // + seconds + "";

        // If the count down is finished, write some text
        if (distance < 0) {
            clearInterval(x);
            document.getElementById("demo").innerHTML = "EXPIRED " + countDownDa;
        }
    }, 1000);

    //allow tabbing into the list of links that are controlled by keyboard arrow keys
    $("#tabFilterAll").on("keydown", function (e) {
        console.log('sdsds');
        if (e.which === 9 && !e.shiftKey) {
            console.log($('#structure').length);
            $('#Structure')
                .find("li:first span")
                .focus();
            e.preventDefault();
        }
    });

    $("span.qti-navigator-label").on("keydown", function (e) {
        var $next;
        switch (e.which) {
            case 37: // left
            case 38: // up
                $next = $(this)
                    .parent("li")
                    .prev("li")
                    .children("span")
                    .focus();
                if (!$next.length) {
                    $(this)
                        .parents("li")
                        .prev("li")
                        .find("span:last")
                        .focus();
                }
                e.preventDefault();
                break;
            case 39: // right
            case 40: // down
                $next = $(this)
                    .parent("li")
                    .next("li")
                    .children("span")
                    .focus();
                if (!$next.length) {
                    $(this)
                        .parent("li")
                        .next("li")
                        .find("span:first")
                        .focus();
                }
                e.preventDefault();
                break;
            case 9: //tab
                break;
                console.log($(this).parent("li").prev('li').length,e.shiftKey )
                if(e.shiftKey && !$(this).parent("li").prev('li').length){
                    //is first
                    console.log('first tab');
                }else if(!e.shiftKey  && !$(this).parent("li").next('li').length){
                    //is last
                    console.log('last tab');
                }else{
                    console.log('preven def');
                    e.preventDefault();
                }

                break;
            default:
                e.preventDefault();
                return; // exit this handler for other keys
        }
    });

    $(".navi-prev").on("keydown", function (e) {
        if (e.which === 9 && !e.shiftKey) {
            console.log($('.tools-box-list'))
            $('.tools-box-list')
                .find("li:first a")
                .focus();
            e.preventDefault();
        }
    });

    $('#status button').on("keydown", function (e) {
        if (e.which === 9 && e.shiftKey) {
            $('.tools-box-list')
                .find("li:first a")
                .focus();
            e.preventDefault();
        }
    });

    $("a.li-inner.tool").on("keydown", function (e) {
        var $next;
        switch (e.which) {
            case 37: // left
            case 38: // up
                $next = $(this)
                    .parent("li")
                    .prev("li")
                    .children("a")
                    .focus();
                e.preventDefault();
                break;
            case 39: // right
            case 40: // down
                $next = $(this)
                    .parent("li")
                    .next("li")
                    .children("a")
                    .focus();
                e.preventDefault();
                break;
        }
    });
});
