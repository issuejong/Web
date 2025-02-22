$(document).ready(function(){
  
  var idx = 0;
  
   //생성
  $("#add").click(function(){
    var input = $("input").val();
    if (input !== "") {
      idx++;
      var trClone = $("#default_plan").clone();
      trClone.css("display", "");
      trClone.find(".plan").text(input);
      trClone.addClass("plan" + idx);
      $("#plan_list").append(trClone);
    }
  });
  
   //on으로 동적 이벤트 생성하여 삭제하기
  $(document).on('click', '.del', function() 
  {
    $(this).parent().remove();
  });
  
   //취소선 긋기
  $(document).on('click', '.plan', function() 
  {
    if($(this).css("text-decoration") == "none solid rgb(0, 0, 0)")
      $(this).css({"text-decoration":"line-through"});
    else
      $(this).css({"text-decoration":"none"});
  });
  
   //all checked
  $(document).on('click', '#checked', function() 
  {
    for (var i = 1; i <= idx; i++) 
    {
      $(".plan" + i).find(".plan").css({"text-decoration": "line-through"});
    }
  });
  
   //reset
  $(document).on('click', '#reset', function() 
  {
    for (var i = 1; i <= idx; i++) 
    {
      $(".plan" + i).remove();
    }
  });
  
    //on으로 동적 이벤트 생성하여 hover 적용
   $(document).on('mouseenter', '.del', function() 
   {
    $(this).css({"color":"blue"});
     //mouseover시 손가락 모양으로 바꾸기
    $(this).css({"cursor":"pointer"});
  });

  $(document).on('mouseleave', '.del', function() 
  {
    $(this).css({"color":"red"});
  });

})
