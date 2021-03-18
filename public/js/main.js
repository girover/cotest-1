$(document).ready(function(){

    const test_day = 'onsdag';
    const test_date = '17-03-2021';
    const test_time = '14:27';
    const expire_date = '20-03-2020';

    var selected_year = '1983';
    var selected_month = 'april';
    var selected_day = '10';

    $('#test-date').text(test_date);
    $('#test-time').text(test_time);
    $('#expire-date').text(expire_date);
    $('#expire-time').text(test_time);
    $('#test-day').text(test_day);

        $('.years li').on('click', function(){

            $('#f-year').text($(this).attr('data-year'));
            $('#year-number').text($(this).attr('data-year'));
            $('.monthes').css('display', 'block');
            $('.month .num').addClass('active');
            $('.years li').removeClass('selected');
            $(this).addClass('selected');
            selected_year = $(this).attr('data-year');
            document.location.href="#1912";
        });

        $('.monthes li').on('click', function(){
            $('#f-month').text($(this).attr('data-month'));
            $('#month-name').text($(this).attr('data-month'));
            $('.days').css('display', 'block');
            $('.day .num').addClass('active');
            $('.monthes li').removeClass('selected');
            $(this).addClass('selected');
            selected_month = $(this).attr('data-month');
            document.location.href="#december";
        });

        $('.days li').on('click', function(){
            selected_day = $(this).attr('data-day');
            if(selected_year != '1983' || selected_month != 'april' || selected_day != '10'){
                $('.page-404').removeClass('hidden');
                $('.page-1').addClass('hidden');
                $('.page-2').addClass('hidden');
            }
            $('#f-day').text($(this).attr('data-day'));
            $('.month-name').text($(this).attr('data-day'));
            $('.birthdate .num').addClass('active');

            $('.birthdate-content').css('display', 'block');
            $('.answer').css('display', 'block');

            $('.days li').removeClass('selected');
            $(this).addClass('selected');
            document.location.href="#covid19svar.dima.kmd.dk";
        });

        $('#btn-answer').on('click', function(){
            $('.page-1').removeClass('show').addClass('hidden');
            $('.page-2').removeClass('hidden').addClass('show');
        });
});
