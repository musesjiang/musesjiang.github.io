var IMG_CONFIG = 
	[
		{
			"id": 1,
			"name": "animal",
			"overlay_color": "F49174",
			"images": ["1.jpg","2.jpg","3.jpg","4.jpg","5.jpg","6.jpg","7.jpg","8.jpg","9.jpg"]
		},
		{
			"id": 2,
			"name": "box-world",
			"overlay_color": "E3557E",
			"images": ["1.png"]
		},
		{
			"id": 3,
			"name": "MIUI",
			"overlay_color": "23232A",
			"images": ["1.jpg","2.jpg","3.jpg","4.jpg"]
		},
		{
			"id": 4,
			"name": "rainbow",
			"overlay_color": "1B5982",
			"images": ["1.jpg"]
		},
		{
			"id": 5,
			"name": "UIKit",
			"overlay_color": "545454",
			"images": ["1.jpg"]
		},
		{
			"id": 6,
			"name": "zondy-icon",
			"overlay_color": "FFFFFF",
			"images": ["1.jpg"]
		},
		{
			"id": 7,
			"name": "personal-app",
			"overlay_color": "252932",
			"images": ["1.jpg"]
		},
		{
			"id": 8,
			"name": "name-card1",
			"overlay_color": "2E6CB5",
			"images": ["1.jpg"]
		},
		{
			"id": 9,
			"name": "name-card2",
			"overlay_color": "E42204",
			"images": ["1.jpg"]
		},
		{
			"id": 10,
			"name": "fruits",
			"overlay_color": "FCFBF4",
			"images": ["1.png","2.png","3.png","4.png","5.png","6.png"]
		},
		{
			"id": 11,
			"name": "game-video",
			"overlay_color": "273060",
			"images": ["1.jpg"]
		}
	];


var COORDS = [[150,0],[301,87],[301,261],[150,348],[0,261],[0,87]];
var NAV_COORDS = [[45,0],[91,26],[91,79],[45,105],[0,79],[0,26]];
var DEVICE_PIXEL_RATIO_IMG_TYPE = (window.devicePixelRatio === 1) ? 'sm' : 'lg';


var createNav = function(){
	var hexes = $('#nav li');
	var _color = '';
	for (var i = 0; i < hexes.length; i++) {
		switch (hexes[i].id) {
			case 'work':
				_color = '13b18c';
				break;
			case 'logo':
			case 'logo-clone':
				_color = 'fe3e67';
				break;
			case 'food':
				_color = 'ffab1f';
				break;
			case 'book':
				_color = '34a2e7';
				break;
			case 'photo':
				_color = 'fb5616';
				break;
		}
		canvasHex(hexes[i].getElementsByTagName('canvas')[0], NAV_COORDS, _color);
	}
};


var createList = function(){
	for (i in IMG_CONFIG) {
		var _self = IMG_CONFIG[i];

		var item = $('<li class="hex-item"><img src="src/'+ _self.name +'/icon_'+ DEVICE_PIXEL_RATIO_IMG_TYPE +'.png"/><canvas class="overlay" width="301" height="347"></canvas></li>');
		
		var hex = item.find('canvas');
		
		
		canvasHex(hex[0], COORDS, _self.overlay_color);

        item.data({
        	images: _self.images,
        	name: _self.name
        });
		$('#hex-list').append(item);
    }
	
};

var addMargin = function(_self){
	var originImage  = new Image();
	originImage.src = _self.src;
	originImage.onload = function(){
		var showHeight = originImage.height / originImage.width * 550;
		if (showHeight < 660) {
			$(_self).css('margin-top', (660 - showHeight)/2)
		}
	}
}

var canvasHex = function(elements, coords, color){
	var ico_overlay = elements.getContext('2d');
	ico_overlay.beginPath();
	ico_overlay.moveTo(coords[5][0],coords[5][1]);
	for (var j = 0; j < coords.length; j++) {
        ico_overlay.lineTo(coords[j][0],coords[j][1]);
    }
    ico_overlay.closePath();
    ico_overlay.fillStyle = '#' + color;
    ico_overlay.fill();
    ico_overlay.clip();
}

var canvasHexBorder = function(elements, coords, color){

}