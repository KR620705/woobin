/**
* --------------------------------
* Common JS
 * creator : chowoobin
* --------------------------------
*/
var fn = (function() {
	"use strict";

	return {
		//popup
		popupOpen : function(obj){
			$(obj).show();
		},
		popupClose : function(obj){
			$(obj).hide();
		}
	}
})();

$(document).ready(function(){
	// lnb 메뉴
	$("#lnb .depth1").on("click", function(){
		if($(this).closest("li").hasClass("active")){
			//$(this).siblings(".inner-menu").slideUp();
			$(this).closest("li").removeClass("active");
		}else{
			//$(".inner-menu").slideUp();
			//$(this).siblings(".inner-menu").slideDown();
			$(this).closest("li").addClass("active").siblings().removeClass("active");
		}
	});
	$("#lnb .inner-menu a").on("click", function(){
		$("#lnb .inner-menu li").removeClass("active");
		$(this).closest("li").addClass("active");
	});

	//input[type="file"]
	var fileTarget = $("input[type='file']"); 
	fileTarget.on("change", function(){ // 값이 변경되면
		$filename = $(this).val();
		$(this).siblings(".upload-name").val($filename);
	});

	//datepicker
	$.datepicker.setDefaults({
		dateFormat: 'yy-mm-dd',	//날짜 포맷이다. 보통 yy-mm-dd 를 많이 사용하는것 같다.
		prevText: '이전 달',	// 마우스 오버시 이전달 텍스트
		nextText: '다음 달',	// 마우스 오버시 다음달 텍스트
		closeText: '닫기', // 닫기 버튼 텍스트 변경
		currentText: '오늘', // 오늘 텍스트 변경
		monthNames: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],	//한글 캘린더중 월 표시를 위한 부분
		monthNamesShort: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],	//한글 캘린더 중 월 표시를 위한 부분
		dayNames: ['일', '월', '화', '수', '목', '금', '토'],	//한글 캘린더 요일 표시 부분
		dayNamesShort: ['일', '월', '화', '수', '목', '금', '토'],	//한글 요일 표시 부분
		dayNamesMin: ['일', '월', '화', '수', '목', '금', '토'],	// 한글 요일 표시 부분
		showMonthAfterYear: true,	// true : 년 월	false : 월 년 순으로 보여줌
		yearSuffix: '년',	//
		showButtonPanel: true,	// 오늘로 가는 버튼과 달력 닫기 버튼 보기 옵션
	});

	//selectbox
	$(document).on("click", ".selectbox", function(event){
		$(".selectbox").not($(this)).removeClass("open");
		$(this).toggleClass("open");
	});
	//Close when clicking outside
	$(document).on("click", function(event){
		if ($(event.target).closest(".selectbox").length === 0){
			$(".selectbox").removeClass("open");
		}
		event.stopPropagation();
	});


});

$(window).on("load",function(){
	//popup
	$(".poplayer").each(function(){
		var popupH = $(this).find(".inner").outerHeight(),
				contentH = $(this).find(".cont").outerHeight(),
				headerH = $(this).find("header").outerHeight();

		
		if( popupH < contentH ){	// 팝업틀의 높이보다 팝업내 content 높이가 더 크다면
			var contheight = popupH - headerH;
			$(this).find(".cont").outerHeight(contheight);
		}

		if (!(popupH % 2) == 0) { // 팝업틀의 높이가 홀수라면 흐린현상으로 짝수로 잡아준다.(transform 사용)
			popupH -= 1;	// 홀수이면 -1해서 짝수로 높이 잡아주기.
			$(this).find(".inner").outerHeight(popupH);
			$(this).find(".inner").css("max-height","none");
		}
	});
});

