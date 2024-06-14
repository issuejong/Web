function atag(){
  ab.setColor('red');
}

function before(name) {
  if(name === 'lilly')
    document.getElementById("introduction").innerHTML = "호주 빅토리아주 메리즈빌(Marysville)에서 태어나고 자랐다.";
  else if(name === 'haewon')    
    document.getElementById("introduction").innerHTML = "2017년 열린 'JYP 걸그룹 공개 오디션'에 합격해 입사했다. # 개최 장소와 기간이 변경될 정도로 지원자가 폭주했던 오디션으로, 약 9천여 명이 지원했다고 알려져 있다.# 오디션 곡은 비욘세의 Halo였는데, 오디션장에 들어가 해보라는 신호가 나오자마자 'Everywhere I'm lookin' now~'부터 이어지는 하이라이트를 불렀다고 한다.[9]";
}

function vocal(name) {
  if(name === 'lilly')
    document.getElementById("introduction").innerHTML = "역대 아이돌 메인보컬들과 견주어도 뒤지지 않는 4세대 걸그룹 최상위권의 실력을 갖춘 보컬리스트로 평가된다. 넓은 음역대, 탄탄한 발성, 호흡조절, 파워풀한 성량까지 보컬리스트로서 갖춰야 하는 요소들을 모두 갖추고 있는 가창력의 소유자이다.";
  else if(name === 'haewon')    
    document.getElementById("introduction").innerHTML = "상대적으로 구분되는 포지션은 메인보컬이며, 4세대 걸그룹들 중 최정상급 보컬리스트로 평가받는다.";
}

function dance(name) {
  if(name === 'lilly')
    document.getElementById("introduction").innerHTML = "7년에 달하는 긴 연습생 기간 덕에 기본기가 매우 탄탄하다는 평이 많다.";
  else if(name === 'haewon')    
    document.getElementById("introduction").innerHTML = "대개 보컬 멤버로 구분되지만 춤 실력도 굉장히 뛰어나 상대적으로 리드댄서 포지션을 맡고 있다. 댄스 라인인 지우와 규진 못지 않게 잘 춘다고 평가받고 있기에 NMIXX의 올라운더 멤버로 꼽힌다. 직캠 댓글들을 보면 '국내와 해외를 불문하고 보컬 멤버인 줄 알았는데, 춤도 메인 급이다' 같은 반응들을 쉽게 찾아볼 수 있다.";
}