 
 //  nav part


let menu = $("#triggle"),
rightMenu= $(".rightMenu"),
leftMenu= $(".leftMenu"),
menu_item=$(".nav-item li")
sites=$(".site-of-the-day")
vote=$(".vote-now")
menu.click(function(){
    let widthrightmenu = rightMenu.outerWidth();
      if(menu.attr("class")=="open")
    {
        menu.removeClass("open").addClass("close");
        rightMenu.animate({"right":`0px`},1000);
        leftMenu.animate({"right":`${widthrightmenu}`},1000);
        sites.animate({"padding-right":"100px"},1000)
        vote.animate({"padding-right":"100px"},1000)
        for(let i=1 ;i<=menu_item.length;i++)
        {
            $(`.item${i}`).animate({"opacity":"1","paddingTop":"25px"},i*100+1000)
        }
    }
    else{
        menu.removeClass("close").addClass("open");
        rightMenu.animate({"right":`-${widthrightmenu}`},1000);
        sites.animate({"padding-right":"0px"},1000)
        vote.animate({"padding-right":"0px"},1000)
        leftMenu.animate({"right":`0px`},1000,function(){
            menu_item.animate({"opacity":"0","paddingTop":"500px"},1000)
        });
        
    }
})


// progress part


$(function() {

    $(".progress").each(function() {
  
      var value = $(this).attr('data-value');
      var left = $(this).find('.progress-left .progress-bar');
      var right = $(this).find('.progress-right .progress-bar');
  
      if (value > 0) {
        if (value <= 50) {
          right.css('transform', 'rotate(' + percentageToDegrees(value) + 'deg)')
        } else {
          right.css('transform', 'rotate(180deg)')
          left.css('transform', 'rotate(' + percentageToDegrees(value - 50) + 'deg)')
        }
      }
  
    })
  
    function percentageToDegrees(percentage) {
  
      return percentage / 100 * 360
  
    }
  
  });


//   end progress

// sign up part
$("#signupid").click(function()
{
    $(".signup").css("display","block")
})


$(".myclose").click(function()
{
    $(".signup").css("display","none")

})


// sign in part


$("#signinid").click(function()
{
    $(".signin").css("display","block")
})


$(".myclosesignin").click(function()
{
    $(".signin").css("display","none")

})