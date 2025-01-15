var Sum = 0;
var tmp = "", ex_tmp = "", input = "";
var op_idx = -1, ex_opidx = -1;
var zero_error = false;

$(document).ready(function(){
  
  //계산 함수
  function calculation(i) {
    if(tmp == "") tmp = Sum;
    if(i == 0)
    {
      if(tmp == "0") zero_error = true;
      else Sum /= parseInt(tmp);
    }
    else if(i == 1) Sum *= parseInt(tmp);
    else if(i == 2) Sum -= parseInt(tmp);
    else if(i == 3) Sum += parseInt(tmp);
  }
  
  //키보드 입력
  $(document).keydown(function(key){
    input = key.key;
    if(input === "Enter") input = "=";
    else if(input === "Delete") input = "CE";
    else if(input === "Backspace") input = "<=";
    output(input);
  });

  //버튼 클릭
  $(".button").click(function(){
    input = $(this).val();
    output(input);
  });
  
  //입력 처리
  function output(input) {
    
    if("1" <= input && input <= "9")
    {
      tmp += input;
      $("#display")[0].value = tmp;
    }
    else if(input == "C")
    {
      Sum = 0;
      tmp = "";
      ex_tmp = "";
      ex_opidx = -1;
      $("#display")[0].value = "0";
      $("#top")[0].value = "";
      op_idx = -1;
    }
    else if(input == "CE")
    {
      tmp = "";
      $("#display")[0].value = "0";
    }
    else if(input == "<=")
    {
      if(tmp.length == 1 || tmp.length == 0)
      {
        tmp = "";
        $("#display")[0].value = "0";
      }
      else if(tmp.length != 1)
      {
        tmp = tmp.substr(0, tmp.length-1);
        $("#display")[0].value = tmp;
      }
    }
    else if(input == "/")
    {
      op_idx = 0;
      if(tmp != "") Sum = parseInt(tmp);
      $("#top")[0].value = "/ ";
      tmp = "";
    }
    else if(input == "x")
    {
      op_idx = 1;
      if(tmp != "") Sum = parseInt(tmp);
      $("#top")[0].value = "x ";
      tmp = "";
    }
    else if(input == "-")
    {
      op_idx = 2;
      if(tmp != "") Sum = parseInt(tmp);
      $("#top")[0].value = "- ";
      tmp = "";
    }
    else if(input == "+")
    {
      op_idx = 3;
      if(tmp != "") Sum = parseInt(tmp);
      $("#top")[0].value = "+ ";
      tmp = "";
    }
    else if(input == "00")
    {
      if(tmp != "0" && tmp != "")
      {
        tmp += "00";
        $("#display")[0].value = tmp;
      }
    }
    else if(input == "0")
    {
      if(tmp != "0" && tmp != "")
      {
        tmp += "0";
        $("#display")[0].value = tmp;
      }
    }
    else if(input == "=")
    {
      if(op_idx != -1)
      {
        calculation(op_idx);
        ex_opidx = op_idx;
        ex_tmp = tmp;
        if(zero_error) $("#display")[0].value = "ERROR";
        else $("#display")[0].value = Sum;
         $("#top")[0].value = "";
         zero_error = false;
      }
      else if(ex_opidx != -1)
      {
        tmp = ex_tmp;
        calculation(ex_opidx);
        if(zero_error) $("#display")[0].value = "ERROR";
        else $("#display")[0].value = Sum;
      }
        op_idx = -1;
        tmp = "";
    }
  }
})