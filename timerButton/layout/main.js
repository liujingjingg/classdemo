requirejs.config({
    'paths':{
        'jquery':'https://cdn.bootcss.com/jquery/3.2.1/jquery.min'
    }
})
require(['jquery'],function($){
    $(function(){
        // var tb1 =new $timerButton();
        // tb1.show({
        //     num:9,
        //     title:'发送验证码',
        //     onClick:function(){
        //         alert('短信已发送!');
        //     } 
        // })

        var $btnAdd=$('#add');
        $btnAdd.click(function(){
            // $timerButton.show('#main')
                require(['timerButton'],function(timerButton){
                var tb=new timerButton()
                tb.show({
                    i:6,
                    title:'发送验证码',
                    onClick:function(){
                        alert('就知道你会同意的') 
                    }
                })
            })
        })
    })  
})