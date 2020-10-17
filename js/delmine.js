function openNav() {
    document.getElementById("mySidebar").style.width = "100%";
    setTimeout(checkMobile, 1000);
}

function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
    $('[data-toggle="tooltip"]').tooltip({
        trigger: 'manual'
    }).tooltip('hide');
}


var checkMobile = function() {
    //Check Device
    var isTouch = ('ontouchstart' in document.documentElement);

    //Check Device //All Touch Devices
    if (isTouch) {
        $('[data-toggle="tooltip"]').tooltip({
            trigger: 'manual'
        }).tooltip('show');

    } else {

        $('[data-toggle="tooltip"]').tooltip({
            trigger: 'hover'
        });
    };
};