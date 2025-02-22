$(document).ready(function(){
  
   //생성
  $("#add").click(function(){
    input = $("input").val();
    var trClone = $("#default_plan").clone();
    trClone.css("display", "");
    $(trClone).find(".plan").text(input);
    $("#plan_list").append(trClone);
  });
  
   //on으로 동적 이벤트 생성하여 삭제하기
  $(document).on('click', '.del', function() {
    $(this).parent().remove();
  });
  
   //on으로 동적 이벤트 생성하여 hover 적용
   $(document).on('mouseenter', '.del', function() {
    $(this).css({"color":"blue"});
     //mouseover시 손가락 모양으로 바꾸기
    $(this).css({"cursor":"pointer"});
  });

  $(document).on('mouseleave', '.del', function() {
    $(this).css({"color":"red"});
  });
})
