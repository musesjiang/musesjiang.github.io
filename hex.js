window.addEvent('domready',function(){
    var hexes = document.getElements('div.hex'),
        coords = [[95,0],[190,55],[190,165],[95,219],[0,165],[0,55]];

    hexes.each(function(hex){
        var idle = hex.getElement('canvas.idle'),
            ico = idle.getContext('2d'),
            image;

        idle.setStyle('opacity' , 0);
        ico.save();
        ico.beginPath();
        ico.moveTo(coords[5][0],coords[5][1]);
        coords.each(function(c){
            ico.lineTo(c[0],c[1]);
        })
        ico.closePath();
        ico.fillStyle = '#000';
        ico.fill();
        ico.restore();

        ico.save();
        ico.clip();
        image = new Image();
        image.src = idle.get('data-image');
        image.addEvent('load',function(){
            idle.set('tween',{duration: 500}).tween('opacity' , 1);
            ico.drawImage( image , 0 , 0 , 329 , 219 );
            ico.restore();
        });
    });
});
