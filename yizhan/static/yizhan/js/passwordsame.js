
$(function (){
    $('#repassword').on('blur',function (){
        console.log("函数if判断前");
        var temp=document.getElementById('password');
        var temp2=document.getElementById('repassword');
        console.log(temp.value);
        console.log(temp2.value);
        console.log(temp.value==temp2.value);
        if(temp.value==temp2.value){
            console.log("函数if判断后");
            // console.log($('#repeatword').value);
            // console.log($('#newpassword').value);
            $('#x').attr("class","errorTips").text('两次输入相同');
        }else {
            $('#x').attr("class","okTips").text('两次输入新密码不一致！');
        }
    })

});