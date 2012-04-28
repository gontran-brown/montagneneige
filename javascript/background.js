;(
    function(){
        $(document).ready(function(){
            var backgroundImage = ["fond2.jpg", "fond3.jpg", "fond4.jpg", "fond5.jpg", "fond6.jpg"];

            var deeImage = backgroundImage[Math.floor(Math.random()*backgroundImage.length)];

            $("body").css({
                "background-image": "url(images/" + deeImage + ")",
                "backgroun-repeat": "no-repeat",
                "background-size": "1200px 1000px",
            });
        });
    }
)(jQuery)
