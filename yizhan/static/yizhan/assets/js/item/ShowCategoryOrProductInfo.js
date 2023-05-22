$(function (){
    $('#search').on('click',function () {
        var question_zh = $('.form-control:eq(0)').val()
        var question_en = $('.form-control:eq(1)').val()
        var question_ru = $('.form-control:eq(2)').val()

        if(question_zh.length == 0 && question_en.length == 0 && question_ru.length == 0){
            alert("请输入一定的内容后再查询！")
            return;
        }
        $.ajax({
            type:"POST",
            url:"/yizhan/searchByInfo",
            data:{question_zh:question_zh, question_en:question_en,question_ru:question_ru},
            success:function (data){
                $("#table").html(data)
            }
        });
    });
});