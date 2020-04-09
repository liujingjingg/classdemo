//require解决两个问题
//1.模块的依赖关系
//2.模块的延迟加载

define(['jquery'],function($){
//构造函数
function timerButton(){  
        var $btn=$('<input class="timer-button" type="button"  disabled id="button">'),
        cfg={
                    container:'body',
                    i:6,
                    title:'同意',
        },
        i,
        timer;
        this.show=function(conf){
        $(cfg.container).append($btn);
        $.extend(cfg,conf);
        i=cfg.i;
        $btn.val(cfg.title+'('+cfg.i+'s)');
        timer=setInterval(function(){
            i--;
            if(i===0){
                clearInterval(timer);
                $btn.val(cfg.title);
                $btn.removeAttr('disabled');
            }else{
                $btn.val(cfg.title+'('+i+'s)');
            }
        },1000)
        // $btn.click(function(){
        //     cfg.onClick();
        // }) 
        $btn.click(cfg.onClick)
    }
    //滑框
    // range.change(function(){
    //     age.html(range.val());
    // });  
}
return timerButton;
})
//加的()为立即执行表达式,自动调用

//不用 page load event
/*
封装成对象,有几种方案
1.简单对象字面量,不完全是面向对象的,不能包括私有方法(全局对象) pass掉不使用
 var timerBtn={
     show:function{}
 }
 2.工厂函数,一个函数返回值是一个简单对象  在里面写的函数时私有函数,返回的是公有的,常用
 var timerBtn=(function(){
     return {
         show:function(){}
     }
 }())
 3.构造函数, 不常用
 function timerBtn(){

 }
 var tb=new timerBtn();
*/