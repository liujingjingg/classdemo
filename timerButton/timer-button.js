var $dlgGoto=(function(){
    var html=''
    +'<div class="notepad-dlg-goto">'
    +'<div class="dialogbox">'
        +'<div class="titlebar">'
            +'<p class="title">转到指定行 </p>'
            +'<span class="close-btn">X</span>'
        +'</div>'
        +'<div class="main">'
            +'<label>行号(L)</label>'
            +'<br>'
            +'<input class="txt-line-num" type="text" autofocus>'
            +'<br>'
            +'<input class="btn-goto" type="button" value="转到"  >'
            +'<input type="button" class="btn-cancel" value="取消">'
        +'</div>'
    +'</div>'
+'</div>',
    $dlg=$(html),
    cfg={
         container:'body',
        //  i:6,
        //  title:'同意',
        //  onClick:null         
      };
     
    function show(conf){
        $(cfg.container).append($dlg);
        $.extend(cfg,conf);
        // num=cfg.num;
        // $btn.click(cfg.onClick);
    }
    return { 
        show:show
    }  
}());
//require解决两个问题
//1.模块的依赖关系
//2.模块的延迟加载


// var $timerButton=(function(){  
//     function show(conf){
//         //DOM draw
//         var timer,
//         button=$('#button'),
//         cfg={
//             container:'body',
//             i:6,
//             title:'同意',
            
//         },
//         i;
//         var $btn=$('<input class="timer-button" type="button"  disabled id="button">');
//         $(cfg.container).append($btn);
//         $.extend(cfg,conf);
//         i=cfg.i;
//         $btn.val(cfg.title+'('+cfg.i+'s)');
//         timer=setInterval(function(){
//             i--;
//             if(i===0){
//                 clearInterval(timer);
//                 $btn.val(cfg.title);
//                 $btn.removeAttr('disabled');
//             }else{
//                 $btn.val(cfg.title+'('+i+'s)');
//             }
//         },1000)
//         // $btn.click(function(){
//         //     cfg.onClick();
//         // }) 
//         $btn.click(cfg.onClick)
//     }
   
//     // range.change(function(){
//     //     age.html(range.val());
//     // });
//     return {
//         show:show
//     }
// }())//加的()为立即执行表达式,自动调用

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