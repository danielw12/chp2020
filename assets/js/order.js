$('.check-box :radio').change(function () {
    $(this).closest('.check-box').toggleClass('checked', this.checked);
});


$(document).ready(function () {
    $('div.check-box input[type="radio"]').click(function () {
        $('div.check-box').removeClass('checked');

    });
});

var ele = document.getElementsByClassName('iradio');

function displayRadioValue() {
    document.getElementById("result").innerHTML = "";


    for (i = 0; i < ele.length; i++) {

        if (ele[i].type = "radio") {

            if (ele[i].checked)
                document.getElementById("result").innerHTML += ele[i].value + " zł";
        }
    }
}

var olo = document.getElementsByClassName('radio2');

function displayTransport() {
    document.getElementById("result2").innerHTML = "";


    for (i = 0; i < olo.length; i++) {

        if (olo[i].type = "radio") {

            if (olo[i].checked)
                document.getElementById("result2").innerHTML += olo[i].value + " zł";
        }
    }
}


/*  --------------- SUMA -------------- */

var items = $('.x'),
    cashOut = $('#total-price'),
    sum = 0;

$.each(items, function(value) {
  
  var itemValue = parseFloat(items[value].innerHTML);
  sum += !isNaN(itemValue) ? itemValue : 0;
});

cashOut.html(sum + ".00" + " zł");

