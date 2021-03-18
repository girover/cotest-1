$(document).ready(function(){

    const test_day = 'onsdag';
    const test_date = '17-03-2021';
    const test_time = '14:27';
    const expire_date = '20-03-2020';

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
            document.location.href="#1912";
        });

        $('.monthes li').on('click', function(){
            $('#f-month').text($(this).attr('data-month'));
            $('#month-name').text($(this).attr('data-month'));
            $('.days').css('display', 'block');
            $('.day .num').addClass('active');
            document.location.href="#december";
        });

        $('.days li').on('click', function(){
            $('#f-day').text($(this).attr('data-day'));
            $('.month-name').text($(this).attr('data-day'));
            $('.birthdate .num').addClass('active');

            $('.birthdate-content').css('display', 'block');
            $('.answer').css('display', 'block');
            document.location.href="#covid19svar.dima.kmd.dk";
        });

        $('#btn-answer').on('click', function(){
            $('.page-1').removeClass('show').addClass('hidden');
            $('.page-2').removeClass('hidden').addClass('show');
        });
});