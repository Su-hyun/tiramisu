var tirData = {
    storeInfo : [
        {
            "sUrl": "../images/store01.png",
            "sName": "부평점",
            "sAddress": "인천 광역시 부평구 시장로 10<span>가동 28호 (부평동, 중앙지하상가)</span>",
            "sLink": "http://map.naver.com/?dlevel=12&pinType=site&pinId=37568826&x=126.7244047&y=37.4912209&enc=b64",
            "sMap":"../images/map.png"
        },{
            "sUrl" : "../images/store02.png",
            "sName" : "안양점",
            "sAddress" : "경기도 안양시 만안구 안양로<span>304번길 28</span>",
            "sLink" : "http://map.naver.com/?dlevel=12&pinType=site&pinId=37837924&x=126.9224778&y=37.3999313&enc=b64",
            "sMap":"../images/map.png"
        },{
            "sUrl" : "../images/store03.png",
            "sName" : "대전은행점",
            "sAddress" : "대전광역시 중구 대종로<span>488번길 45</span>",
            "sLink" : "http://map.naver.com/?dlevel=12&pinType=site&pinId=37932930&x=127.4285230&y=36.3290270&enc=b64",
            "sMap":"../images/map.png"
        },{
            "sUrl" : "../images/store04.png",
            "sName" : "연신내점",
            "sAddress" : "서울시 은평구 갈현1동 399-7",
            "sLink" : "http://map.naver.com/?dlevel=12&pinType=site&pinId=37916110&x=126.9192869&y=37.6189746&enc=b64",
            "sMap":"../images/map.png"
        },{
            "sUrl" : "../images/store05.png",
            "sName" : "일산라페스타점",
            "sAddress" : "경기도 고양시 일산동구 장항동<span>761번지 라페스타F동</span>",
            "sLink" : "http://map.naver.com/?dlevel=12&pinType=site&pinId=37918467&x=126.7675435&y=37.6618339&enc=b64",
            "sMap":"../images/map.png"
        },{
            "sUrl" : "../images/store06.png",
            "sName" : "판교점",
            "sAddress" : "경기도 성남시 분당구 대왕판교로<span>660번지 USPACE몰 1동 139호</span>",
            "sLink" : "http://map.naver.com/?dlevel=12&lat=37.4011414&lng=127.1064163&query=6rK96riw64%2BEIOyEseuCqOyLnCDrtoTri7nqtawg64yA7JmV7YyQ6rWQ66GcIDY2MA%3D%3D&type=ADDRESS&tab=1&isDetailAddress=true&isNewAddress=true&rcode=02135109&enc=b64",
            "sMap":"../images/map.png"
        },{
            "sUrl" : "../images/store07.png",
            "sName" : "의정부역점",
            "sAddress" : "경기도 의정부시 의정부동 494-4",
            "sLink" : "http://map.naver.com/?dlevel=12&lat=37.7378113&lng=127.0445652&query=6rK96riw64%2BEIOydmOygleu2gOyLnCDsnZjsoJXrtoDrj5kgNDk0LTQ%3D&type=ADDRESS&tab=1&isDetailAddress=true&isNewAddress=false&rcode=02150101&enc=b64",
            "sMap":"../images/map.png"
        }, {
            "sUrl": "../images/store08.png",
            "sName": "평택점",
            "sAddress": "경기도 평택시 중앙2로 13번길<span>103호</span>",
            "sLink": "http://map.naver.com/?dlevel=13&lat=36.9919135&lng=127.0886955&query=6rK96riw64%2BEIO2Pie2DneyLnCDspJHslZky66GcIDEz&type=ADDRESS&tab=1&isDetailAddress=true&isNewAddress=true&rcode=02220113&enc=b64",
            "sMap":"../images/map.png"
        }
    ],
    slideWeb : [
        {
	        "wUrl" : "../images/visual-w01.png"
	    },{
		    "wUrl" : "../images/visual-w02.png"
		},{
			"wUrl" : "../images/visual-w03.png"
		}
    ],
    slideMob : [
        {
	        "mUrl" : "../images/visual-m01.png"
	    },{
	        "mUrl" : "../images/visual-m02.png"
	    },{
	        "mUrl" : "../images/visual-m03.png"
	    }
    ],
    num : [
        {
	        "nUrl" : "../images/num1.png"
	    },{
	        "nUrl" : "../images/num2.png"
	    },{
	        "nUrl" : "../images/num3.png"
	    },{
	        "nUrl" : "../images/num4.png"
	    },{
	        "nUrl" : "../images/num5.png"
	    },{
	        "nUrl" : "../images/num6.png"
	    },{
	        "nUrl" : "../images/num7.png"
	    },{
	        "nUrl" : "../images/num8.png"
	    }
    ]
};

(function () {
    function getBundledList(orgList, bundledList, unit) {
        var stIdx = 0;
        var endIdx = unit;
        function pushBundledList(start, end) {
            bundledList.push(orgList.slice(start, end));
        }
        var orgListLength = orgList.length;
        while(endIdx < orgListLength + unit) {
            pushBundledList(stIdx, endIdx);
            stIdx += unit;
            endIdx += unit;
        }
        return bundledList;
    }
    function getTestArr() {
        var arr = [];
        $.each(tirData.storeInfo, function (i,e) {
            var html_li = "";
            html_li += "<li style='background-image:url("+e.sUrl+")'>";
            html_li += "<p>"+e.sName+"</p>";
            html_li += "<p>"+e.sAddress+"</p>";
            html_li += "<p><a href="+e.sLink+" target='_blank'>";
            html_li += "<img src="+e.sMap+" alt='지도앱으로 바로가기'></a></p>";
            html_li += "</li>";
            arr.push(html_li)
        });
        return arr;
    }
    var html = getBundledList(getTestArr(), [], 6);
    var length = html.length;
    for(var i = 0; i < length; i++){
        var html_ul = "<ul class='store-list'>"+html[i]+"</ul>";
        $('#store-box').append(html_ul)
    }
    $('#store-box').find('.store-list:first').addClass('on');

	var winWID = $(window).width();
	var $logoImg = $('.header-logo').find('img');
	var $slideli = $('.slide > li');
	var $num = $('.num');
	
	if(winWID > 720){
	    $logoImg.attr('src','../images/logo.png');
	    $.each($slideli,function (i,e) {
	        $(e).find('img').attr('src',tirData.slideWeb[i].wUrl);
	    });
	}else if(winWID < 720){
	    $logoImg.attr('src','../images/logo_m.png');
	    $.each($slideli,function (i,e) {
	        $(e).find('img').attr('src',tirData.slideMob[i].mUrl);
	    });
	}
	$.each($num,function (i,e) {
	    $(e).css('backgroundImage','url('+tirData.num[i].nUrl+')');
	});
})();