$("#sim").on("mouseover", function(){
    var randPosX = Math.floor((Math.random()*200));
    var randPosY = Math.floor((Math.random()*200));
    $('#sim').css('left', randPosX);
    $('#sim').css('top', randPosY);
})
$("#nao").on("click", function(){
    document.location.href="./index2.html";
})
