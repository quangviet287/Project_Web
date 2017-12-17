function TestPass() {
    var message, x, a;
    message = document.getElementById("messageerror");
    message.innerHTML = "";
    x = document.getElementById("Password").value;
    try {
        if (x == "") throw "empty";
        if (isNaN(x)) throw "not a number";
        x = Number(x);
        var dem = 0;
        for (var i = 10; i < x; i *= 10) {
            a = (x / i) % 10;
            dem += 1;
        }
        if (dem < 7) throw "must be at least 8 digits";
        if (dem > 7) throw "OK!!!!";
    }
    catch (err) {
        message.innerHTML = "pass is " + err;
    }
}

$(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() != 0) {
            $('#backtotop').fadeIn();
        } else {
            $('#backtotop').fadeOut();
        }
    });
    $('#backtotop').click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 1000);
    });
});
$(document).ready(function () {
    // add button style
    $("[name='poll_bar'").addClass("btn btn-default");
    // Add button style with alignment to left with margin.
    $("[name='poll_bar'").css({"text-align": "left", "margin": "5px"});
    //loop
    $("[name='poll_bar'").each(
        function (i) {
            //get poll value
            var bar_width = (parseFloat($("[name='poll_val'").eq(i).text()) / 2).toString();
            bar_width = bar_width + "%"; //add percentage sign.
            //set bar button width as per poll value mention in span.
            $("[name='poll_bar'").eq(i).width(bar_width);
            //Define rules.
            var bar_width_rule = parseFloat($("[name='poll_val'").eq(i).text());
            if (bar_width_rule >= 50) {
                $("[name='poll_bar'").eq(i).addClass("btn btn-sm btn-success")
            }
            if (bar_width_rule < 50) {
                $("[name='poll_bar'").eq(i).addClass("btn btn-sm btn-warning")
            }
            if (bar_width_rule <= 10) {
                $("[name='poll_bar'").eq(i).addClass("btn btn-sm btn-danger")
            }
        });

});
$(document).ready(function () {
    $('[id^=detail-2]').hide();

    $('#dropdown-detail-2').click(function () {
        $("#detail-2").show();
        $("#detail-1").hide();

    });
    $('#dropdown-detail-1').click(function () {
        $("#detail-1").show();
        $("#detail-2").hide();
    });
});

$(function () {
    $("#book").turn();
    $("#previous, #next").click(function () {
        $("#book").turn($(this).text());
    });
});
$(document).ready(function () {
    $('#div1').hide();
    $('#div2').hide();
    $('#div3').hide();
    $('#div4').hide();
    $('#div5').hide();
    $('#dropdown1').click(function () {
        var div = $('#name1');
        div.animate({fontSize: '25px'}, "slow");
        $('#div1').show(500);
        $('#div2').hide(500);
        $('#div3').hide(500);
        $('#div4').hide(500);
    })
    $('#dropdown2').click(function () {
        var div = $('#name1');
        div.animate({fontSize: '15px'});
        $('#div2').slideDown(500);
        $('#div1').slideUp(500);
        $('#div3').slideUp(500);
        $('#div4').slideUp(500);
    })
    $('#dropdown3').click(function () {
        var div = $('#name1');
        div.animate({fontSize: '15px'});
        $('#div3').fadeIn();
        $('#div1').fadeOut(500);
        $('#div2').fadeOut(500);
        $('#div4').fadeOut(500);
    })
    $('#dropdown4').click(function () {
        var div = $('#name1');
        div.animate({fontSize: '15px'});
        $('#div4').toggle(1000);
        $('#div1').hide(500);
        $('#div2').hide(500);
        $('#div3').hide(500);
    })
    $('#dropdown5').click(function () {
        $('#div5').css("color", "red").show(2000).hide(1000);
    })
    $('#dropdown5').dblclick(function () {
        $('#div5').stop();
    })
});
$(document).ready(function () {
    $("#callback").click(function () {
        alert("Bạn muốn dừng đọc truyện?");
    });
});
$(document).ready(function () {
    $.getJSON("story.json", function (story) {
        var items = [];
        $.each(story, function (index, story) {
            items.push(
                '<li data-toggle="modal" data-target="#myModal">' + '<img src=' + story.img + ' class="img-thumbnail" >' +
                '<div class="caption">' +
                '<div class="blur"></div>' +
                '<div class="caption-text">' +
                '<span>' + story.name + '</span>' +
                '<p>Tác giả:'+ story.author + '</p>' +
                '<span class="glyphicon glyphicon-eye-open"> ' + story.view + '</span>' +
                '</div>' +
                '</div>' +
                '</li>');
        });
        $("#truyen").append(items);
    });
    $.getJSON("story1.json", function (story1) {
        var items = [];
        $.each(story1, function (index, story1) {
            items.push(
                '<li data-toggle="modal" data-target="#myModal">'+' <img src='+story1.img+' class="img-thumbnail" >'+
                '<div class="caption">'+
                '<div class="blur"></div>'+
                '<div class="caption-text">'+
                '<span>'+story1.name+'</span>'+
                '<p>Tác giả: '+story1.author+'</p>'+
                '<span class="glyphicon glyphicon-eye-open"> '+story1.view+'</span>'+
                '</div>'+
                '</div>'+
                '</li>');
        });
        $("#truyen1").append(items);
    });
});


function load() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            myFunction(this);
        }
    };
    xhttp.open("GET", "truyenmoi.xml", true);
    xhttp.send();
}
function myFunction(xml) {
    var i;
    var xmlDoc = xml.responseXML;
    var table="<tr><th>Name</th><th>Author</th></tr>";
    var x = xmlDoc.getElementsByTagName("Truyen");
    for (i = 0; i <x.length; i++) {
        table += "<tr><td>" +
            x[i].getElementsByTagName("name")[0].childNodes[0].nodeValue +
            "</td><td>" +
            x[i].getElementsByTagName("author")[0].childNodes[0].nodeValue +
            "</td></tr>";
    }
    document.getElementById("demo").innerHTML = table;
}