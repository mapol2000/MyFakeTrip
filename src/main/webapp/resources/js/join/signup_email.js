$('.allChk').on('change',function(){
    var chk = false;
    $('.agree-chk').each(function() {
        if(!$(this).is(":checked")){
            chk = true;
            return false;        //break
        }
    })
    if(chk){
        $('.agree-chk').prop("checked", true);
    }else{
        $('.agree-chk').prop("checked", false);
    }
});

$('.agree-chk').on('change',function(){
    var chk = false;
    $('.agree-chk').each(function() {
        if(!$(this).is(":checked")){
            chk = true;
            return false;        //break
        }
    })
    if(chk){
        $('.allChk').prop("checked", false);
    }else{
        $('.allChk').prop("checked", true);
    }
});

//  대상을 나다내는 영역     // 감지하고자 하는 이벤트를 나타내는 영역
$('[name="userName"]').on('change keyup paste focus',function(){
    var text_area = $(this).parent().find('.warning'); //현재 입력값의 유효성 택스트를 처리해줄 공간
    
    if($(this).val() === ''){ // 입력값이 없는 경우
        text_area.text('이름을 입력해주세요.');
    }else if($(this).val().length < 2  ){ //2글자 이하인 경우
        text_area.text('두 글자 이상 입력해주세요.');
    }else{ // 성공적으로 입력했을 경우 초기화
        text_area.text('');
    }
})

$('[name="email"]').on('change keyup paste focus',function(){
    var text_area = $(this).parent().find('.warning');
    var re2 = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;

    if($(this).val() ===''){
        text_area.text('꼭 필요해요!');
    }else if(!re2.test($(this).val())) {
        text_area.text('올바른 이메일 형식이 아닙니다');
    }else{ // 성공적으로 입력했을 경우 초기화
        text_area.text('');
    }
})

$('[name="password"]').on('change keyup paste focus',function(){
    var text_area = $(this).parent().find('.warning');
    var password = $(this).val();
    if(!/^(?=.*[a-zA-Z])(?=.*[!@#$%^&*()+=-])(?=.*[0-9]).{6,15}$/.test(password)){
        text_area.text('숫자,영문,특수문자 조합으로 6~15자리 사용해야 합니다.');
    }else if(/(\w)\1\1\1/.test(password)){
        text_area.text('같은 문자를 4번 이상 사용하실 수 없습니다.');
    }else{
        text_area.text('비밀번호 입력 완료!');
        text_area.css('color','#33b893');
    }
})

$('[name="password2"]').on('change keyup paste focus',function(){
    var text_area = $(this).parent().find('.warning');
    var pwd1 = $('[name="password"]').val();
    var pwd2 = $('[name="password2"]').val();

    if($(this).val() ==='') {
        text_area.text('비밀번호를 다시한번 입력해주세요');
    }else if (pwd1 != "" || pwd2 != "") {
        if (pwd1 == pwd2) {
            text_area.text('비밀번호가 일치합니다.');// 비밀번호 일치 이벤트 실행
            text_area.css('color','#33b893');
        } else {
            text_area.text('비밀번호가 일치하지 않습니다.');// 비밀번호 불일치 이벤트 실행
        }
    }
})

function allDataChk(){
    var chk = true;

    if($('[name="userName"]').val() === ''){ // 입력값이 없는 경우
        $('[name="signup_btn"]').attr('disabled', true);
        chk = false;
        return;
    }else if($('[name="userName"]').val().length < 2  ){ //2글자 이하인 경우
        $('[name="signup_btn"]').attr('disabled', true);
        chk = false;
        return;
    }

    var re2 = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;

    if($('[name="email"]').val() ===''){
        chk = false;
        $('[name="signup_btn"]').attr('disabled', true);
        return;
    }else if(!re2.test($('[name="email"]').val())) {
        chk = false;
        $('[name="signup_btn"]').attr('disabled', true);
        return;
    }
    var password = $('[name="email"]').val();
    var password2 = $('[name="email"]').val();

    if(!/^(?=.*[a-zA-Z])(?=.*[!@#$%^&*()+=-])(?=.*[0-9]).{6,15}$/.test(password)){
        chk = false;
        $('[name="signup_btn"]').attr('disabled', true);
        return;
    }else if(/(\w)\1\1\1/.test(password)){
        chk = false;
        $('[name="signup_btn"]').attr('disabled', true);
        return;
    }

    if(password2 ==='') {
        chk = false;
        $('[name="signup_btn"]').attr('disabled', true);
        return;
    }else if (password != "" || password2 != "") {
        if (password != password2) {
            chk = false;
            $('[name="signup_btn"]').attr('disabled', true);
            return;
        }
    }

    if(!($('[name="agree1"]').is(":checked")
        && $('[name="agree2"]').is(":checked")
        && $('[name="agree3"]').is(":checked"))){
        chk = false;
        $('[name="signup_btn"]').attr('disabled', true);
        return;
    }

    if(chk){
        $('[name="signup_btn"]').attr('disabled', false);
    }
}


$(document).ready(function () {
    setInterval(function()
    {
        allDataChk();
    },150);
});
