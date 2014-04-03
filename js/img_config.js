function Jianglai(){
	this._init();
}

Jianglai.prototype = {
	_constant: {
		IMG_CONFIG: [
			{
				"id": 1,
				"name": "animal",
				"overlay_color": "F49174",
				"images": [
				{
					"name": "1.jpg",
					"width": 1024,
					"height": 1024
				},{
					"name": "2.jpg",
					"width": 1024,
					"height": 1024
				},{
					"name": "3.jpg",
					"width": 1024,
					"height": 1024
				},{
					"name": "4.jpg",
					"width": 1024,
					"height": 1024
				},{
					"name": "5.jpg",
					"width": 1024,
					"height": 1024
				},{
					"name": "6.jpg",
					"width": 1024,
					"height": 1024
				},{
					"name": "7.jpg",
					"width": 1024,
					"height": 1024
				},{
					"name": "8.jpg",
					"width": 1024,
					"height": 1024
				},{
					"name": "9.jpg",
					"width": 1024,
					"height": 1024
				}]
			},
			{
				"id": 2,
				"name": "box-world",
				"overlay_color": "E3557E",
				"images": [{
					"name": "1.png",
					"width": 1000,
					"height": 1000
				}]
			},
			{
				"id": 3,
				"name": "MIUI",
				"overlay_color": "23232A",
				"images": [{
					"name": "1.jpg",
					"width": 725,
					"height": 1289
				},{
					"name": "2.jpg",
					"width": 725,
					"height": 1289
				},{
					"name": "3.jpg",
					"width": 1440,
					"height": 1177
				},{
					"name": "4.jpg",
					"width": 720,
					"height": 1280
				}]
			},
			{
				"id": 4,
				"name": "rainbow",
				"overlay_color": "1B5982",
				"images": [{
					"name": "1.jpg",
					"width": 1024,
					"height": 1024
				}]
			},
			{
				"id": 5,
				"name": "UIKit",
				"overlay_color": "545454",
				"images": [{
					"name": "1.jpg",
					"width": 1041,
					"height": 2336
				}]
			},
			{
				"id": 6,
				"name": "zondy-icon",
				"overlay_color": "049689",
				"images": [{
					"name": "1.jpg",
					"width": 800,
					"height": 1341
				}]
			},
			{
				"id": 7,
				"name": "personal-app",
				"overlay_color": "252932",
				"images": [{
					"name": "1.jpg",
					"width": 1461,
					"height": 1461
				}]
			},
			{
				"id": 8,
				"name": "name-card1",
				"overlay_color": "2E6CB5",
				"images": [{
					"name": "1.jpg",
					"width": 1500,
					"height": 980
				}]
			},
			{
				"id": 9,
				"name": "name-card2",
				"overlay_color": "E42204",
				"images": [{
					"name": "1.jpg",
					"width": 1769,
					"height": 1185
				}]
			},
			{
				"id": 10,
				"name": "fruits",
				"overlay_color": "FF8EB4",
				"images": [{
					"name": "1.png",
					"width": 512,
					"height": 512
				},{
					"name": "2.png",
					"width": 512,
					"height": 512
				},{
					"name": "3.png",
					"width": 512,
					"height": 512
				},{
					"name": "4.png",
					"width": 512,
					"height": 512
				},{
					"name": "5.png",
					"width": 512,
					"height": 512
				},{
					"name": "6.png",
					"width": 512,
					"height": 512
				}]
			},
			
			{
				"id": 11,
				"name": "game-video",
				"overlay_color": "273060",
				"images": [{
					"name": "1.jpg",
					"width": 1903,
					"height": 1213
				}]
			}
		],

		COORDS: [[150,0],[302,87],[302,261],[150,348],[0,261],[0,87]],
		NAV_COORDS: [[45,0],[91,26],[91,79],[45,105],[0,79],[0,26]],
		NAV_BORDER_COORDS: [[45,2],[89,26],[89,79],[45,103],[2,79],[2,26]],
		DEVICE_PIXEL_RATIO_IMG_TYPE: (window.devicePixelRatio === 1) ? 'sm' : 'lg',
	},

	_init: function(){
		this.createNav();
	    this.createList();
	    this.bind();

	    this.gallery.prototype = {
	    	_initilize: function(name, images, clickOffset){
	    		this.curThumbImg = images;
	    		this.createCurThumb(name, images, clickOffset);
	    		this.createThumbList(name, images);
			},

			createCurThumb: function(name, images, clickOffset){
				console.log(clickOffset);
				this.tpl = $('#galleryTmpl').tmpl({
					filename: name,
					url: images[0].url,
					offsetX: clickOffset.offsetX,
					offsetY: clickOffset.offsetY
				});
	    		$('#hex-list').after(this.tpl);
	    		this.tpl.find('#gallery-img').css(this.getCurThumbStyle(this.curThumbImg[0]));
			},

			createThumbList: function(name, images){
				this.listTpl = $('#galleryListTmpl').tmpl(images);
				$('.gallery').append(this.listTpl);
			},

			getCurThumbStyle: function(thumb) {
				var _window = $(window),
					_clientHeight = _window.height(),
					_clientWidth = _window.width(),
					_curThumbHeight = _clientHeight - 150, //150 is gallery footer height (90) + padding-top & padding-bottom(60)
					_curThumbWidth = _clientWidth <= 1285 ? _clientWidth - 80 : 1205 , //1205 is gallery width (1285) without padding-left & padding right (80)
					_curThumbScale = _curThumbWidth / _curThumbHeight;
					_thumbScale = thumb.width/thumb.height;
					_thumbStyle = {
						width: 0,
						height: 0,
						top: 0,
						left: 0
					};

				if (_thumbScale <= _curThumbScale) {
					_thumbStyle.height = _curThumbHeight;
					_thumbStyle.width = _thumbStyle.height * _thumbScale;
					_thumbStyle.top = 30;
					_thumbStyle.left = (_clientWidth - _thumbStyle.width) / 2;

				} else {
					_thumbStyle.width = _curThumbWidth;
					_thumbStyle.height = _thumbStyle.width / _thumbScale;
					_thumbStyle.left = (_clientWidth -_curThumbWidth) / 2;
					_thumbStyle.top = (_clientHeight - 90 - _thumbStyle.height) / 2;
				}

				return _thumbStyle;
			},

			getThumbListStyle: function(){
				var _clientWidth = $(window).width(),
					_thumbListWidth = $('.gallery').width(),
					_thumbListStyle = {left: 0};

				if (_thumbListWidth + 50 <= _clientWidth) {
					_thumbListStyle.left = (_clientWidth - _thumbListWidth) / 2;
				} else {
					_thumbListStyle.left = 50;
				}
				return _thumbListStyle;
			},

			changeThumb: function(thumb_info){
				$('#gallery-img').find('img').attr('src', thumb_info.url);
				$('#gallery-img').css(this.getCurThumbStyle(thumb_info));
			},

			destroy: function(){
				this.tpl.animate({opacity: 0}, 200,  function(){
					this.remove();
				});
			}

	    }
	    
	},

	bind: function(){
		var jianglai = this;

	    $('#nav').hover(function(){
	        $(this).children().addClass('show');
	    }, function(){
	        $(this).children().removeClass('show');
	    })

		$('#hex-list').on('click', 'li', function(e){
			var _self = $(this);
	        jianglai._gallery = new jianglai.gallery(_self.data('name'), _self.data('images'), {offsetX: e.screenX, offsetY: e.screenY});
	    })

	    $(document).on('click', '.gallery-wrapper', function(){
	        jianglai._gallery.destroy();
	    });

	    $(document).on('click', '#gallery-img', function(e){
	        e.stopPropagation();
	    });

	    $(document).on('click', '.link', function(e){
	        e.stopPropagation();
	        var _self = $(this);
	        jianglai._gallery.changeThumb({
	        	url: _self.find('img').attr('src'),
	        	width: _self.attr('data-origin-width'),
	        	height: _self.attr('data-origin-height')
	        });
	    });


	},
	
	createNav: function(){
		var hexes = $('#nav li');
		var _color = '';
		for (var i = 0; i < hexes.length; i++) {
			switch (hexes[i].id) {
				case 'work':
					_color = '03a17c';
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
			this.canvasHex(hexes[i].getElementsByTagName('canvas')[0], this._constant.NAV_COORDS, _color);
			if ($(hexes[i]).hasClass('active')) {
				this.canvasHexBorder(hexes[i].getElementsByTagName('canvas')[0]);
			}
		}
	},

	createList: function(){
		for (i in this._constant.IMG_CONFIG) {
			var _self = this._constant.IMG_CONFIG[i];

			var item = $('<li class="hex-item"><img src="'+ this.getHexUrl(_self.name) +'"/><canvas class="overlay" width="301" height="347"></canvas><img class="show-icon" src="./images/show.png"/></li>');
			
			var hex = item.find('canvas');
			
			
			this.canvasHex(hex[0], this._constant.COORDS, _self.overlay_color);
			for (j in _self.images) {
				_self.images[j].url = this.getGalleryUrl(_self.name, _self.images[j].name);
			}
	        item.data({
	        	images: _self.images,
	        	name: _self.name
	        });
			$('#hex-list').append(item);
	    }
	},

	addMargin: function(_self){
		var originImage  = new Image();
		originImage.src = _self.src;
		originImage.onload = function(){
			var showHeight = originImage.height / originImage.width * 550;
			if (showHeight < 660) {
				$(_self).css('margin-top', (660 - showHeight)/2)
			}
		}
	},

	canvasHex: function(elements, coords, color){
		var ctx = elements.getContext('2d');

		ctx.beginPath();
		ctx.moveTo(coords[5][0],coords[5][1]);
		for (var j = 0; j < coords.length; j++) {
	        ctx.lineTo(coords[j][0],coords[j][1]);
	    }
	    ctx.closePath();
	    ctx.fillStyle = '#' + color;
	    ctx.fill();

	},

	canvasHexBorder: function(elements){
		var ctx = elements.getContext('2d');

		ctx.beginPath();
		ctx.strokeStyle = "#FFF";
		ctx.lineWidth = 4.0;
		ctx.moveTo(this._constant.NAV_BORDER_COORDS[5][0],this._constant.NAV_BORDER_COORDS[5][1]);
		for (var j = 0; j < this._constant.NAV_BORDER_COORDS.length; j++) {
	        ctx.lineTo(this._constant.NAV_BORDER_COORDS[j][0],this._constant.NAV_BORDER_COORDS[j][1]);
	    }
	    ctx.closePath();
	    ctx.stroke();
	},

	gallery: function(name, images, clickOffset){
		this._initilize(name, images, clickOffset);
	},

	getGalleryUrl: function(name, imageName){
		return 'src/' + name + '/' + imageName;
	},

	getHexUrl: function(name){
		return 'src/'+ name +'/icon_'+ this._constant.DEVICE_PIXEL_RATIO_IMG_TYPE +'.png';
	}




};