$(document).ready(function(){
  
  $("#add").click(function(){
    input = $("input").val();
    var trClone = $("#default_plan").clone();
    trClone.css("display", "");
    $(trClone).find(".plan").text(input);
    $("#plan_list").append(trClone);
  })
  
  $(".del").click(function(){
    $('td').parent().remove();
  })
})