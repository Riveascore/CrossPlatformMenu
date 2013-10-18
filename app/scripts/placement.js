function translateForLineup(originalWrapper, rotatedWrapper, rotation, radius, translateArray) {

    var rotationAmount = 2 * Math.PI * rotation / 360;
    
    var hypotenuse = Math.sqrt(2 * Math.pow(radius, 2) * (1 - Math.cos(rotationAmount)));
    
    var yFinal = radius * Math.sin(rotationAmount);

    var xFinal = Math.sqrt(Math.pow(hypotenuse, 2) - Math.pow(yFinal, 2));
    
    var currentTop = originalWrapper.offset().top;
    var currentLeft = originalWrapper.offset().left;
    //alert(xFinal + ", " + yFinal);
    rotatedWrapper.offset({
        top: currentTop + yFinal,
        left: currentLeft + xFinal + translateArray.x
    });
}

var emptyTranslate = {
    x:0, 
    y:0
};

translateForLineup($('.wrapper.fir'), $('.wrapper2.fir'), 120, $('.wrapper.fir').width() / 2, emptyTranslate);
translateForLineup($('.wrapper.fir'), $('.wrapper3.fir'), -120, $('.wrapper.fir').width() / 2, emptyTranslate);

translateForLineup($('.wrapper.sec'), $('.wrapper2.sec'), 120, $('.wrapper').width() / 2 - 100, emptyTranslate);
translateForLineup($('.wrapper.sec'), $('.wrapper3.sec'), 240, $('.wrapper').width() / 2 - 100, emptyTranslate);



translateForLineup($('.wrapper.thr'), $('.wrapper2.thr'), 120, $('.wrapper').width() / 2 - 200, emptyTranslate);
translateForLineup($('.wrapper.thr'), $('.wrapper3.thr'), -120, $('.wrapper').width() / 2 - 200, emptyTranslate);


var secondTranslate = {x:100, y:0};
translateForLineup($('.outerSpin'), $('.outerSpin2'), 20, $('.outerSpin2').width()/2 - 100, secondTranslate);

var thirdTranslate = {x:200, y:0};
translateForLineup($('.outerSpin'), $('.outerSpin3'), 50, $('.outerSpin3').width()/2 - 200, thirdTranslate);





function prepareSizeAndLocation(element) {
	var maxSize = Math.max($(window).width(), $(window).height());
	
	element.width(maxSize);
	element.height(maxSize);
	
	var wrappers = element.find('.wrapper');
	
	$.each(wrappers function () {
		wrapperElement.width(maxSize);
		wrapperElement.height(maxSize);
	});

	
}