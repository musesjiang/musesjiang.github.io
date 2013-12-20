var IMG_CONFIG = 
	[
		{
			"id": 1,
			"url": "images/item_01.png",
			"overlay_color": "ec275f"
		},
		{
			"id": 2,
			"url": "images/item_02.png",
			"overlay_color": "e73100"
		},
		{
			"id": 3,
			"url": "images/item_03.png",
			"overlay_color": "00aee7"
		},
		{
			"id": 4,
			"url": "images/item_04.png",
			"overlay_color": "1960bf"
		},
		{
			"id": 5,
			"url": "images/item_05.png",
			"overlay_color": "f02d8d"
		},
		{
			"id": 6,
			"url": "images/item_06.png",
			"overlay_color": "00a0fe"
		},
		{
			"id": 7,
			"url": "images/item_01.png",
			"overlay_color": "ec275f"
		},
		{
			"id": 8,
			"url": "images/item_02.png",
			"overlay_color": "e73100"
		},
		{
			"id": 9,
			"url": "images/item_03.png",
			"overlay_color": "00aee7"
		},
		{
			"id": 10,
			"url": "images/item_04.png",
			"overlay_color": "1960bf"
		},
		{
			"id": 11,
			"url": "images/item_05.png",
			"overlay_color": "f02d8d"
		},
		{
			"id": 12,
			"url": "images/item_06.png",
			"overlay_color": "00a0fe"
		}
	];



var IMG_TPL = function(url, color){
	var img = new Image();
	img.src = url;
	var con = document.createElement('canvas');
	con.className = 'overlay';
	con.setAttribute('data-rgb', color);
	con.setAttribute('width', 301);
	con.setAttribute('height', 347);

	return '<img src=' + url + '/>
			<canvas class="overlay" data-rgb=' + color + ' width="301" height="347">
			</canvas>'
};