$(".dropdown").click(function(){
            $(".caret").css('transform', 'rotate(180deg)');
        });

        $(document).ready(function(){

        $('ul.tabs li').click(function(){

            var tab_id = $(this).attr('data-tab');
            alert('hi'+tab_id);
            $('ul.tabs li').removeClass('current');
            $('tab-content').removeClass('current');

            $(this).addClass('current');

            $("#"+tab_id).addClass('current');
        })

        })
