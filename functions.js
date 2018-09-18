$.ajaxSetup({
    cache: true
});  

function peachinit() {
    $('#peach').modal({inverted: true}).modal('show');
    $.getScript('js/peachloader.js');
    $.getScript('js/peach.js');
}


/*


// on-DSGVO->Cancle
function dsgvocancle() {
    do stuff;
    cancle with info message alternate ending
}


// on-DSGVO->OK
function dsgvook() {
    do stuff;
    start peach ui
}


// on-DSGVO->OkBut!
function dsgvolimit() {
    do stuff;
    start peach ui but 
    exclude tracking
}


// on-DSGVO->Details
function dsgvolimit() {
    do stuff;
    Show Details on modal for on DSGVO
}

Prima verraten Sie mir noch Ihren Namen 



*/