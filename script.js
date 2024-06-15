function before(name) {
  if(name === 'lilly')
    document.getElementById("introduction").innerHTML = "호주 빅토리아주 메리즈빌(Marysville)에서 태어나고 자랐다.";
  else if(name === 'haewon')    
    document.getElementById("introduction").innerHTML = "2017년 열린 'JYP 걸그룹 공개 오디션'에 합격해 입사했다. # 개최 장소와 기간이 변경될 정도로 지원자가 폭주했던 오디션으로, 약 9천여 명이 지원했다고 알려져 있다.# 오디션 곡은 비욘세의 Halo였는데, 오디션장에 들어가 해보라는 신호가 나오자마자 'Everywhere I'm lookin' now~'부터 이어지는 하이라이트를 불렀다고 한다.[9]";
  else if(name === 'sullyoon')
    document.getElementById("introduction").innerHTML = "어렸을 적 어머니가 '예쁜 아기 대회'에 설윤을 출전시킨 적이 있는데, 우승을 해서 상금과 상품을 받았다고 한다.";
  else if(name === 'bae')
    document.getElementById("introduction").innerHTML = "초등학교, 중학교 졸업 사진이 뜨고 나서 어릴 때부터 꾸준히 예뻤다는 말을 듣고 있다. 유년 시절부터 피지컬이 남달랐음을 알 수 있다.";
  else if(name === 'jiwoo')
    document.getElementById("introduction").innerHTML = "2018년 만 13세에 댄스학원 내방 오디션으로 JYP 엔터테인먼트에 입사했다. 1차 오디션 곡은 태연의 11:11[5], 춤은 TWICE의 TT, 2차는 프리스타일 댄스로 합격했다.";
  else if(name === 'kyujin')
    document.getElementById("introduction").innerHTML = "위드빌댄스학원의 내방 오디션에서 태연의 Fine을 불러 2017년 10월 28일 JYP엔터테인먼트에 최종 합격했다. 처음 입사했을 당시 초등학교 5학년으로 사내 연습생 중 막내였다고 한다.";
}

function vocal(name) {
  if(name === 'lilly')
    document.getElementById("introduction").innerHTML = "역대 아이돌 메인보컬들과 견주어도 뒤지지 않는 4세대 걸그룹 최상위권의 실력을 갖춘 보컬리스트로 평가된다. 넓은 음역대, 탄탄한 발성, 호흡조절, 파워풀한 성량까지 보컬리스트로서 갖춰야 하는 요소들을 모두 갖추고 있는 가창력의 소유자이다.";
  else if(name === 'haewon')    
    document.getElementById("introduction").innerHTML = "상대적으로 구분되는 포지션은 메인보컬이며, 4세대 걸그룹들 중 최정상급 보컬리스트로 평가받는다.";
  else if(name === 'sullyoon')
    document.getElementById("introduction").innerHTML = "NMIXX의 음색요정이다. 벨벳처럼 부드러우면서도 맑은 음색으로 곡의 분위기를 살린다. 데뷔곡 <O.O> 활동 당시에 '비주얼 담당 보컬'로 화제를 모은 바 있다. 엔믹스는 공식적인 포지션이 없지만, 릴리-해원-설윤으로 구성된 보컬 라인의 한 축으로 리드보컬에 준하는 파트를 배정받고 있다.";
  else if(name === 'bae')
    document.getElementById("introduction").innerHTML = "팀 내에서 가장 독특하고 개성 넘치는 음색을 소유했고, JYP 특유의 공기 반 소리 반 창법도 가장 잘 쓰는 멤버이다. 중저음 톤의 나른하면서도 소울풀한 음색이 매력적이며 곡에 따라 다양한 느낌을 낼 수 있다. 그래서 재즈나 재즈팝에 잘 어울리는 재즈 보컬 목소리라는 평가가 많다.";
  else if(name === 'jiwoo')
    document.getElementById("introduction").innerHTML = "쫀득하고 앙칼진 느낌의 음색이 특징으로, 스크래치 창법이 잘 어울린다.";
  else if(name === 'kyujin')
    document.getElementById("introduction").innerHTML = "톡톡 튀지만 약간의 허스키함이 가미된 듯한 음색이 특징이다.";
}

function dance(name) {
  if(name === 'lilly')
    document.getElementById("introduction").innerHTML = "7년에 달하는 긴 연습생 기간 덕에 기본기가 매우 탄탄하다는 평이 많다.";
  else if(name === 'haewon')    
    document.getElementById("introduction").innerHTML = "대개 보컬 멤버로 구분되지만 춤 실력도 굉장히 뛰어나 상대적으로 리드댄서 포지션을 맡고 있다. 댄스 라인인 지우와 규진 못지 않게 잘 춘다고 평가받고 있기에 NMIXX의 올라운더 멤버로 꼽힌다. 직캠 댓글들을 보면 '국내와 해외를 불문하고 보컬 멤버인 줄 알았는데, 춤도 메인 급이다' 같은 반응들을 쉽게 찾아볼 수 있다.";
  else if(name === 'sullyoon')
    document.getElementById("introduction").innerHTML = "잔동작 하나 없이 깔끔하고 부드러운 춤선이 특징이고 그뿐만 아니라 팔다리가 길어 동작이 강조된다.";
  else if(name === 'bae')
    document.getElementById("introduction").innerHTML = "신체가 유연하고, 긴 팔다리를 타고나서 딱딱하지 않으면서도 시원한 느낌의 춤을 선보인다.";
  else if(name === 'jiwoo')
    document.getElementById("introduction").innerHTML = "실력적인 면에서 파워가 넘쳐 팀 군무의 강렬함을 살려 준다. 코어 힘이 좋아 동작을 날리는 것 없이 잘 소화해 내고 정확하고 힘 있게 동작을 구현해 낸다.";
  else if(name === 'kyujin')
    document.getElementById("introduction").innerHTML = "상대적으로 구분되는 포지션은 메인댄서.[8] 팀 내 뿐만 아니라 4세대 걸그룹 중 최고의 실력을 가진 댄서로 평가받고 있다.";
  
}

function nightmode(self)
{
  var atag = document.querySelectorAll("a");
  var target = document.querySelector('body');
  if(self.value === '야간 모드')
  {
    target.style.backgroundColor = 'black';
    target.style.color = 'white';
    self.value = '주간 모드';
    
   for(var i = 0; i < atag.length; i++)
      atag[i].style.color = 'white';
    
  }
  else if(self.value === '주간 모드')
  {
    target.style.backgroundColor = 'white';
    target.style.color = 'black';
    self.value = '야간 모드';
    
   for(var i = 0; i < atag.length; i++)
      atag[i].style.color = 'black';
  }
  
}