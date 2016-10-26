$(document).ready(function () {
    var idx = 0;
	var winWID = $(window).width();
    var arrSecTOP = [];
    var flag = true;

    var $a = $('a');
    var $visual = $('#visual');
    var $aDot = $('.slide').find('a');
    var $logoImg = $('.header-logo').find('img');
    var $slideli = $('.slide > li');
    var $sectionID = $('#wrapper > *');
    var $tab_list = $('#info').find('.tab-list');
    var $slideImg = $('.slide > li.on').find('img');
    var tabLiHEIg;
    var tabConHEIg;

    $(window).on({
	    load:function(){
            imageChange($logoImg,$slideli,winWID);

            var imgHEI = $slideImg.height();
            var aDotHEI = $aDot.height();
            var tabLiHEI = $tab_list.find('> ul > li').outerHeight();
            var tabConHEI = $tab_list.find('> ul > li.on').find('.tab-content').innerHeight();
            var storeHEI = $('.store-list').height();
            tabLiHEIg = tabLiHEI;
            tabConHEIg = tabConHEI;
            winWID = $(window).width();
            $visual.css('height',imgHEI);
			$aDot.css('top',imgHEI - aDotHEI * 1.9 );
            $tab_list.css('height', tabConHEI + tabLiHEI);
            $('.btn-box').css({top:storeHEI + ((tabConHEI - storeHEI) / 2) + 40});

            offsetTop($sectionID);
	    },
        resize:function(){
            $(this).load();
        },
        scroll:function () {
            var scrTop = $(this).scrollTop();
            var $btnTOP = $('.btn-top');
            var $slideHEI = $('.slide li:first').find('img').height();
            var winHEI = $(window).height();
            if (scrTop >= $slideHEI) {
                $btnTOP.css('display', 'block').stop().animate({top: scrTop + winHEI * 0.7, opacity: 0.5}, 1000);
            }else if (scrTop <= $slideHEI) {
                $btnTOP.css({display: 'none', top: 0, opacity: 0});
            }
        }
    });

    $a.on('click',function (e) {
        var $this = $(this);
        var $storeList = $('.store-list');
        var $pageNum = $('li.page-num');
        var listleng = $storeList.length;

        if($this.attr('href') == '#'){e.preventDefault()}else{ }
        if($this.parents().is('.lnb')){
            idx = $this.parent().index();
            $('html,body').stop().animate({scrollTop:arrSecTOP[idx+1]});
        }
        if($this.parent().is('.btn-top')){
            $('html,body').stop().animate({scrollTop:0});
            $tab_list.find('li:first').addClass('on').siblings('li').removeClass('on');
            $tab_list.css('height', tabConHEIg+tabLiHEIg);
            tabView($storeList,$pageNum, 0);
        }
        if($this.parents().is('.slide')){
            var thisIdx = idx;
            idx = $this.parent('li').index();
            if(thisIdx < idx){
                slideaction($slideli, 0, "-100%", thisIdx);
                slideaction($slideli, "100%", 0, idx);
            }else if(thisIdx > idx){
                slideaction($slideli,0,"100%",thisIdx);
                slideaction($slideli,"-100%",0, idx);
            }else{

            }
        }
        if($this.parent().is('.is-tab')){
            $this.parent().addClass('on').siblings('li').removeClass('on');
            $tab_list.css('height', $(this).next('.tab-content').innerHeight()+tabLiHEIg);
        }
        if($this.parents().is('.page-move')){
            $tab_list.css('height', tabConHEIg+tabLiHEIg);
            if($this.parent().is('.page-start')){
                tabView($storeList,$pageNum, 0);
            }
            if($this.parent().is('.page-next')){
                tabView($storeList,$pageNum, idx);
                idx ++;
                tabView($storeList,$pageNum, idx);
            }
            if($this.parent().is('.page-prev')){
                tabView($storeList,$pageNum, idx);
                idx --;
                tabView($storeList,$pageNum, idx);
            }
            if($this.parent().is('.page-end')){
                tabView($storeList,$pageNum, listleng-1);
            }
            if($this.parent().is('.page-num')){
                idx = $this.parent('.page-num').index();
                tabView($storeList,$pageNum, idx-2);
            }
        }
    });

    function offsetTop(select){
	    arrSecTOP = [];
		select.each(function () {
			arrSecTOP.push($(this).offset().top)
		});
    }
    
    function imageChange(select1,select2,win){
		if(win > 761){
		    select1.attr('src','../images/logo.png');
		    $.each(select2,function (i,e) {
		        $(e).find('img').attr('src',tirData.slideWeb[i].wUrl);
		 	});
		}else if(win < 760){
		    select1.attr('src','../images/logo_m.png');
		    $.each(select2,function (i,e) {
		        $(e).find('img').attr('src',tirData.slideMob[i].mUrl);
			});
		}
	}

    var slideRel = setInterval(slideNext,4000);
    $('header > .container').on({
            mouseenter:function () {
            clearInterval(slideRel);
        },
            mouseleave:function () {
            slideRel = setInterval(slideNext,4000);
        }
    });
    $('.visual-box > button').on('click', function(){
        var $this = $(this);
        if($this.is('.next')){
            if(flag == true){
                flag = false;
                slideNext();
            }
        }
        if($this.is('.prev')) {
            if (flag == true) {
                flag = false;
                slideaction($slideli, 0, "100%", idx);
                idx--;
                slideaction($slideli, "-100%", 0, idx);
            }
        }
    });



    function slideaction(slector, start, end, index){

        var leng = slector.length;
        slector.eq(index).addClass('on').siblings().removeClass('on');
        slector.eq(index).find('div').css({display:"block", left:start})
        .stop().animate({left:end},700,function(){flag = true;});

        if(index == leng){
            idx = 0;
            slideaction(slector, start, end, idx, true)
        }else if(index < 0){
            idx = leng-1;
            slideaction(slector, start, end, idx, false)
        }
    }

    function slideNext(){
        slideaction($slideli, 0, "-100%", idx, true);
        idx ++;
        slideaction($slideli, "100%", 0, idx, false);
    }

    function tabView(slector1,slector2, index){
        var leng = slector1.length;
        slector1.eq(index).addClass('on').siblings().removeClass('on');
        slector2.eq(index).addClass('on').siblings().removeClass('on');
        if(index == leng){
            idx = leng-1;
            tabView(slector1,slector2, idx);
        }else if(index < 0){
            idx = 0;
            tabView(slector1,slector2, idx);
        }
    }
});