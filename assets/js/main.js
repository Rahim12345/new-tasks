$(document).ready(function() {
    function randomColor() {
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    function createRectangle(width, height, color, randomCoordinateX, randomCoordinateY, dataID) {
        let newElement = '<div class="new-element" style="width: '+width+'px;height: '+height+'px;background-color: '+color+';top:'+randomCoordinateY+'px;left: '+randomCoordinateX+'px" data-id="'+dataID+'"></div>';

        $('.my-container').append(newElement);
    }

    $('#addDiv').click(function () {
        let width               = Math.floor(Math.random() * ($(window).width() * 0.2 + 1));
        let height              = Math.floor(Math.random() * ($(window).height() * 0.2 + 1));
        let randomCoordinateX   = Math.floor(Math.random() * ($(window).width() + 1)) - width;
        let randomCoordinateY   = Math.floor(Math.random() * ($(window).height() + 1)) - height;
        let color               = randomColor();
        let dataID              = $('.new-element:last').attr('data-id');

        if (typeof dataID === 'undefined')
        {
            dataID = 1;
        }
        else
        {
            dataID = parseInt(dataID);
            dataID++;
        }
        createRectangle(width, height, color, randomCoordinateX, randomCoordinateY, dataID);

        $.ajax({
            type : 'POST',
            data : {
                width,
                height,
                randomCoordinateX,
                randomCoordinateY,
                color,
                dataID
            },
            url : './app/controllers/save.php',
            success : function (response) {

            },
            error : function (myErrors) {
                $.each(myErrors.responseJSON.errors,function (key, value) {
                    console.log(value);
                });
            }
        });
    });
});

// Elementlər sonradan doma yazılbsa
$(document).on('click','.new-element',function () {
    let id = $(this).attr('data-id');
    $.ajax({
        type : 'POST',
        data : {id},
        url : './app/controllers/delete.php',
        success : function (response) {
            $('.new-element[data-id="'+id+'"]').remove();
        },
        error : function (myErrors) {
            $.each(myErrors.responseJSON.errors,function (key, value) {
                console.log(value);
            });
        }
    });
})