	
/*
 *  Project: Mapper 1.0
 *  Description: Responsive html map area highlighter with area selection
 *  Author: 
 *  License: 
 */

// the semi-colon before function invocation is a safety net against concatenated
// scripts and/or other plugins which may not be closed properly.


;(function ( $, window, document, undefined ) {

    // undefined is used here as the undefined global variable in ECMAScript 3 is
    // mutable (ie. it can be changed by someone else). undefined isn't really being
    // passed in so we can ensure the value of it is truly undefined. In ES5, undefined
    // can no longer be modified.

    // window is passed through as local variable rather than global
    // as this (slightly) quickens the resolution process and can be more efficiently
    // minified (especially when both are regularly referenced in your plugin).

    // Create the defaults once
    var pluginName = 'mapoid',
        defaults = {
            propertyName: "value"
        };

    // The actual plugin constructor
    function mapoidPlugin( element, options ) {
        //this.element = element;

        // jQuery has an extend method which merges the contents of two or
        // more objects, storing the result in the first object. The first object
        // is generally empty as we don't want to alter the default options for
        // future instances of the plugin
        
		this.elem = element;
		this.$elem = $(element);
		this.$elem_original = this.$elem
		this.options = options;
		
		
		// This next line takes advantage of HTML5 data attributes
		// to support customization of the plugin on a per-element
		// basis. For example,
		// <div class=item' data-plugin-options='{"message":"Goodbye World!"}'></div>
		//this.metadata = this.$elem.data( 'plugin-options' );
		this.metadata = this.$elem.data( );
		
		this._init();
		
    }

	
	//Plugin.prototype = 
	mapoidPlugin.prototype = 
	{
	
		defaults: { 
			width : 600,
			
			strokeColor: 'black',
			strokeWidth: 1,
			fillColor: 'black',
			fillOpacity: 0.5,
			fadeTime: 500,
			selectedArea: false,
			selectOnClick: true,
			
			click:false,
			dblclick:false,
			mousedown:false,
			mouseup:false,
			mouseover:false,
			mouseout:false,
			mousemove:false,
			mouseenter:false,
			mouseleave:false,
			hoverIn:false,
			hoverOut:false,
			
			select:false,
			deselect:false
		},
		
		
		lang: {
			textSelectAll: function () { return "Select all"; }
		},
		
		_init: function() {
			// Introduce defaults that can be extended either 
			// globally or using an object literal. 
			this.config = $.extend({}, this.defaults, this.options, 
			this.metadata);
			//alert( JSON.stringify( this.lang.textSearching() ) )

			//alert( this.config.strokeWidth )
			//alert(42)
					
			//this.isResponsive = false			
			//this.imageLoaded = false			
			this.map = this.$elem	
			
			this.selectedAreas = []	
			
			var self = this
			
			//self.mapLoaded = false
			//self.coordsLoaded = false
			//self.mapHidden = false
			
			var mapName = self.$elem.attr('name')
			self.image = $(document).find("img[usemap='#"+mapName+"']")	
			//self.imageSrc = self.image.attr('src')
			//alert( self.$elem.attr('name') )
			
			var wrapper = $("<div class='wrp'></div>")
			$("map[name="+mapName+"]").add("img[usemap='#"+mapName+"']").wrapAll(wrapper);
				//});
			this.$elem = this.$elem.closest('div')
				//this.elem = wrapper[0]
			//alert( this.image.width() )
			
			//if( !self.image.is(':visible')  ){
			
				//self.image.css('display','block')
				//self.map.css('display','block')
				//self.$elem.css('display','block')
			
			//}
			
			//alert( self.image.width() )
			//alert( self.image.css('width') )
			//self.map.on('show',function(){
			//alert(1)
			//})
			//var w = this.image.attr('width')
			//var h = this.image.attr('height')
			//var wd = this.image.width()
			//alert(w+" - "+wd)
			
			self.mapHidden = ( self.mapIsVisible() ) ? false : true 
			
			//alert(self.mapHidden)
			//if( !self.mapIsVisible()  )
			//	self.mapHidden = true
			
				//alert( self.$elem.attr('name') )
				//$("map[name="+mapName+"],img[usemap='#"+mapName+"']").each(function(){
					
			//alert(self.mapIsVisible())
				//alert(1)
				
				
				
				
				self._onImgLoad( self.image, function(img){	
						
					//alert(img.height)	
					//self.
					self.image.attr('width', img.width ) 
					self.image.attr('height', img.height ) 
					
					//alert(self.image.attr('width') )
					//alert(self.image.attr('height') )
					//alert(self.image.css('width') )
					//do something
					//alert('map is not visible')
					self._loadMap();
					
					
				
					//else
					//
								
					self._initEvents();
					
					
					$(window).resize(function() {
						//self.resetMap( );
						//if(!self.mapLoaded)
						//self._loadMap();
						self._reloadAreas()
						
						//alert(s)
					});
					//self.imageLoaded = true
				
				})
				
				
			
			return this;
		},
		
		/**
		 * Returns a random integer between min (inclusive) and max (inclusive)
		 * Using Math.round() will give you a non-uniform distribution!
		 */
		_getRandomInt: function(min, max) {
			return Math.floor(Math.random() * (max - min + 1)) + min;
		},
		
		mapIsVisible : function()
		{
			var self = this
			
			return ( self.map.is(':visible') && self.image.is(':visible') )
			//return true
			
			//return false
			
		},
		
		
		_loadMap : function(){
			
			var self = this
			
			//self.mapLoaded = false
			
			
			
			
			var i = self._getRandomInt(1,65000)
			var j = self._getRandomInt(1,100)
			
					//var j = Math.ceil(Math.random() * 100 + 1);
			//var $this    = $(this);
			var $this    = self.image
					
			//alert($this.prop('tagName'))		
				

				
			//self._loadMap();
			//self._responsiveImage( );
			
			// redraw canvas of the selected areas
			
			
			
			
	
			var cla = $this.attr('class')
			//alert( $(this).attr('class') )
			//i = $(this).attr('class')
			//i=j
			//alert(cla)
			
			//$this.attr('class', 'map'+i)
			
			//$this.attr('usemap', '#map'+i)
			//this.map.attr('name', 'map'+i)
			
			//var this_class = $this.attr('class')
			
			self.$elem.css({'position':'relative'});
			//alert(this_class)
			//self.mlDrawIt(this_class);
			
			//if (!document.all) {
			//self.mlDrawCanvas('map'+i);
			//}
			
			//var	mlSource = $this.attr('src'),
				//idPrefix = mlSource.substr(mlSource.length - 1),	
				//mlThisID = $this.addClass('image'+j+idPrefix+i),
				
				//mlMapName = $this.attr('usemap').replace('#',''),
				//$that = $('map[name="'+mlMapName+'"]'),
			/*	$that    = $this.nextAll('map').eq(0), */
				//mlThatID = $that.addClass('ml_map'+j+idPrefix+i);
	
			//self.saveMapData( );
			
			//self._responsiveImage( );

			
			//self.isResponsive = false
			
			if (typeof(self.image.attr('usemap')) == 'undefined')
					return;
			
			//return
			
			//if( self.mapIsVisible()  )
			self._redrawCoords()
			
		
			if(self.config.selectedArea)
				self._selectAreas( self.config.selectedArea )
		
			//console.log('mapa je nacitana')
			
			
			//self.mapLoaded = true
			
			
			
			
	
			
			
			
			
		},
		
		
		_redrawCoords : function()
		{
			
			var self = this
			
			//self.coordsLoaded = false
			
			//if(!self.mapIsVisible)
			//return 
			
			
			var c = 'coords'
			var w = self.image.attr('width')
			var h = self.image.attr('height')
			var wd = self.image.width()
			//var	hg = this.image.height()
			//var wPercent = this.image.width()/100
			//var	hPercent = this.image.height()/100
			
			var proportion = (wd / w) * 100;
			
			
			
			self.map.find('area').each(function()
			{
				var $this = $(this);
				
				if (!$this.data(c))
				$this.data(c, $this.attr(c));
				var coords = $this.data(c).split(','),
				coordsPercent = new Array(coords.length);
				for (var i = 0; i < coordsPercent.length; ++i) 
				{
					coordsPercent[i] = ((coords[i])*proportion) / 100
									
				}
				
				//Change old coordinates to new
				$this.attr(c, coordsPercent.toString());
				
			});
			
			//self.coordsLoaded = true
			
		},
		
		_eventCallback : function(event, e, el){
			var self = this
			
				
			if(self.config[event])
			{
				var id = el.data('id')
				if(typeof self.config[event] === 'function')
					self.config[event]( e, el, id, self.selectedAreas )
				else
					console.log( event + ' nie je funkcia!')
				
				return true
			}
			
			return false
				
		},
		
		_reloadAreasIfHidden : function(){
			
			var self = this
			if(self.mapHidden)
			{
				self._reloadAreas()
				self.mapHidden = false;
			}
		
		},
		
		
		_reloadAreas : function(){
			
			var self = this
			
			self.$elem.find('canvas').remove();
					
			if( !self.mapIsVisible()  )
			{
				self.mapHidden = true
				console.log('mapa nie je vidiet')
				return
			}
					
					
			self._redrawCoords()
				
			var s = self.$elem.find('area.selected').each(function(k,v){
					
					var id = $(this).data('id')
					var fixed = $(this).hasClass('fixed')
					
					self._mapover( $(this), true, fixed )
					
				})
					
		},
		
		_initEvents : function(){
			
			var self = this
			
			
			
			self.map.on('mouseover', 'area',  function(e){
				//console.log(14891)
				//if(!self.coordsLoaded)
				//if( !self.mapIsVisible()  )
				
				self._reloadAreasIfHidden()
				
				self._eventCallback('mouseover', e, $(this))
				
				self._mapover( $(this), false, false, true )
				//alert(1)
				
				
				
			})
			
			
			
			self.map.on('mouseout', 'area',  function(e){
				//console.log(tid)
				
				self._eventCallback('mouseout',  e, $(this))
				
				self.$elem.find('canvas.temp').fadeOut( self.config.fadeTime )
				//alert( $(this).closest('div').find('canvas').length )
				//alert(self.$elem.attr('class'))
				//alert( self.$elem.find('canvas').length )
				
				
				
			})
			
			self.map.on('click', 'area',  function(e){
				//console.log(tid)
				e.preventDefault()
				
				
				if(!self._eventCallback('click', e, $(this)) && !self.config.selectOnClick)
				{
					var href = $(this).attr('href')	
					if(href)
					location.href = href;
				}
				
				else if(self.config.selectOnClick)
				{
					var id = parseInt( $(this).data('id') )
					
					//var selected = $(this).hasClass('selected')
					var selected = self._inArray(self.selectedAreas, id)
					var fixed = $(this).hasClass('fixed')
					
					//if(!fixed)
					{
						if(!selected)
						{
							//self.selectedAreas.push(id)
							self._selectArea(id,fixed,false)
							
							
						}
						else
						{
							self._deselectArea( id, false )
							
							
						}
					}
					//else
					//alert(id)
					//console.log( self.selectedAreas ) 
				}
				
				
				
				
				
				//alert(href)
				return false
				
				
				//self.$elem.find('canvas.temp').fadeOut( self.config.fadeTime )
			})
			
			self.map.on('mousedown', 'area',  function(e){
				self._eventCallback('mousedown', e, $(this))
			})
			self.map.on('mouseup', 'area',  function(e){
				self._eventCallback('mouseup',  e, $(this))
			})
			
			self.map.on('dblclick', 'area',  function(e){
				self._eventCallback('dblclick',  e, $(this))
			})
			
			self.map.on('mousemove', 'area',  function(e){
				self._eventCallback('mousemove',  e, $(this))
			})
			
			self.map.on('mouseenter', 'area',  function(e){
				self._eventCallback('mouseenter',  e, $(this))
			})
			self.map.on('mouseleave', 'area',  function(e){
				self._eventCallback('mouseleave',  e, $(this))
			})
			
			self.map.find('area').hover(function(e){
				self._eventCallback('hoverIn',  e, $(this))
			}, function(e){
				self._eventCallback('hoverOut', e, $(this))
			})

		},
		
		_removeItem: function (array, item)
		{
			for (var i = 0; i < array.length; i++)
			{
				if(array[i]===item){
				array.splice(i,1);
				break;
				}
			}
		},
		
		_inArray: function (array, item)
		{
			for (var i = 0; i < array.length; i++)
			{
				if(array[i]===item){
				return true;
				break;
				}
			}
			
			return false;
		},

		
		_onImgLoad: function ( image, cb )
		{
			var self = this
			var img = new Image;
			//img.src = areaImg;
			
			img.src = ( image[0].getAttribute ? image[0].getAttribute("src") : false) || image[0].src;
			
			img.onload = function() {
				
				cb(img)

			}
			
			
			//_getOrigImgSize : function( img ){
			//var t = new Image();
			//t.src = (img.getAttribute ? img.getAttribute("src") : false) || img.src;
			//return {'w':t.width, 'h':t.height};
			//},
			
		},
		
		_onMapLoaded: function(cb)
		{
			var self = this
			
			
			//if( this.mapLoaded && !this.coordsLoaded && self.mapIsVisible()  )
			//{
			//	self._redrawCoords()
				
			//	setTimeout(function(){
			//	console.log('0000')
			//	self._onMapLoaded( cb )
				//},10)
			//}
			//else if(this.mapLoaded && this.coordsLoaded)
			if( self.mapIsVisible() )
			{
				
				self._onImgLoad( self.image, function(img){	
					
					//if(self.mapHidden)
					{
					//self._redrawCoords()
					//self.mapHidden = false;
					}
				
					cb()	
					//self._loadMap();
					//self._initEvents();
					
					//self.imageLoaded = true
				})
				
			}
			//else
			{
				//console.log('Public function denied - hidden')
			
				//self._onImgLoad( self.image.attr('src'), function(img){	
				//if( self.mapIsVisible() )
				//self._loadMap();
				//})
				
				//setTimeout(function(){
				//console.log('0000')
				//self._onMapLoaded( cb )
				//},10)
			}
			
			
		},
		
		
		
		
		_mapover : function( area, selected, fixed, removeTemp ){
			
			var self = this
			
			var area_id = parseInt( area.data('id') )
			if( isNaN(area_id) )
			{
				area_id = self._getRandomInt(1,99999)
				area.data('id', area_id)
				//alert(id)
			}
			
			if(removeTemp)
			self.$elem.find('canvas.temp').remove()
			
			//cId = this._getRandomInt(1,60000)
			
			var $img = self.image,
				$bg_fill = $img.data('bg_fill'),
				w = $img.width(),
				h = $img.height(),
				shapeSort = area.attr('shape');
			var	canvas = $('<canvas data-id="'+area_id+'" width="'+w+'" height="'+h+'"></canvas>');
				//$img.parent().append(makeCanvas);
				
				
				
				//alert(size.h )
				//canvas.width(w)
				//canvas.height(h)
				
				$img.parent().append(canvas);
				//$('body').prepend(canvas);
				//$img.parent().append('<canvas>blablabla</canvas>');
				//$img.parent().append('<>');
				
				if(!selected)
				canvas.addClass('temp')
				//$('#can'+cId).addClass('temp')
				else
				area.addClass('selected')
				
				if(fixed)
				area.addClass('fixed')
				
				
				//var hmap = $(mlAreaID).closest('.hmap')
				//this.$elem.find('.tarea'+tarea_id+' .ttitle').addClass('hovered')
				var bg_fill = self.$elem.find('.fill').css('background-color')
				var bg_opacity = self.$elem.find('.fill').css('opacity')
				//console.log( bg_opacity )
				//alert(area)
				//self.$elem.css({'width':'auto','height':'auto',})
				
				//var o = self.$elem.offset();
				//var x = self.$elem.position();
				//alert(o.top)
				//alert(x.top)
				//alert("Top: " + x.top + " Left: " + x.left);
						
		/* 
		 *
		 * pointer-events:none makes canvas layer invisible to mouse events in most modern browsers
		 * allowing map area to still be clickable through the canvas layer.
		 * For IE browsers less than 11 the highlighting is disabled in DrawIt function.
		 *
		 */	
				//canvas.parent().css({'position':'relative'})
				canvas.css({
						'width': w+'px',
						'height': h+'px',
						'display': 'block',
						'position':'absolute',
						'top': '0px',
						'left': '0px',
						'pointer-events':'none',
						//'z-index':'9999'
						});
			//var	$canvas = document.getElementById('can'+cId),
			var	$canvas = canvas[0],
				context = $canvas.getContext('2d');
				// context.clearRect(0, 0, $canvas.width, $canvas.height);
				
				//$canvas.width = w;
				//$canvas.height = h;
				var cox,coy
				var	coords = area.attr('coords').split(','),
					cox = [];
					coy = [];
					for(var i = 0; i < coords.length; i++) {
						if(i % 2 == 0) {
								cox.push(coords[i]);
								}
								else {
									coy.push(coords[i]);
									}
					}
				
				//alert(coords)
		/* Shape coordinate apportioning */
			
			var showCanvas = true
			var area_img = area.data('img');

			
			
			
			var mainImgSrc = self.image.attr('src')
			
			
			//alert(self.image.attr('src'))
			
			//self.onImgLoad(mainImgSrc, function(im){
			
			
			if(area_img && shapeSort == 'poly')
			{
				showCanvas = false
				//area_img = base_url+area_img;
				
				self._onImgLoad(area_img, function(img){
				
					var min_x = Math.min.apply(null, cox);
					var min_y = Math.min.apply(null, coy);
					var max_x = Math.max.apply(null, cox);
					var max_y = Math.max.apply(null, coy);
					
					var f_w = max_x - min_x
					var f_h = max_y - min_y
					//console.log(f_w+" "+f_h)
					
					context.drawImage(img,min_x,min_y, f_w, f_h);
					canvas.hide().fadeIn( self.config.fadeTime )
					
				})
			
			}
			else
			{
				
				context.fillStyle = self.config.fillColor;
				context.lineWidth = self.config.strokeWidth;
				context.strokeStyle = self.config.strokeColor;
				context.globalAlpha = self.config.fillOpacity
				
				if(shapeSort == 'rect') 
				{
					context.fillRect(cox[0],coy[0],cox[1]-cox[0],coy[1]-coy[0]);
					
					if(self.config.strokeWidth > 0)
					context.strokeRect(cox[0],coy[0],cox[1]-cox[0],coy[1]-coy[0]);
				}
				else
				{
					context.beginPath();
					
					if(shapeSort == 'poly' ) 
					{
						
						context.moveTo(cox[0],coy[0]);
						for(var j = 1; j < cox.length; j++) {
							context.lineTo(cox[j],coy[j]);
							}
						context.closePath();
					}
					else if(shapeSort == 'circle') 
					{
						
						context.arc(cox[0],coy[0],cox[1],0,Math.PI*2,true);
						//context.fillStyle = 'rgba('+Math.floor((Math.random() * 255) + 1)+','+Math.floor((Math.random() * 255) + 1)+','+Math.floor((Math.random() * 100) + 1)+',0.3)';
					}
					
					if(self.config.fillColor)
					context.fill();
					if(self.config.strokeWidth > 0)
					context.stroke();
						
				}
					
				
				if(showCanvas)			
				canvas.hide().fadeIn( self.config.fadeTime )
			}
			
			//})
			
			
		},
		
		_selectArea: function( id, fixed, showCanvas )
		{
			var self = this
			
			id = parseInt( id )
			
			var el = self.$elem.find("area[data-id='"+id+"']")
			var selected = el.hasClass('selected')
			var cnv = self.$elem.find('canvas[data-id="'+id+'"]')
			
			
			//alert(self.mapHidden)
			if( self.mapIsVisible() )
			{
				self._reloadAreasIfHidden()
			}
			else
			self.mapHidden = true
			
			//{
			//console.log('ID '+id+' nemozem vybrat, mapa nie je viditelna!')
			//return false;
			//}
			
			if(selected)
			{
			console.log('ID '+id+' je uz vybrane!')
			return false;
			}
			
			if(fixed !== true)
			fixed = false
			
			if(el.length > 0)
			{
				self.$elem.find('canvas[data-id="'+id+'"]:last').removeClass('temp')	
				el.addClass('selected')
				cnv.removeClass('temp')
				self.selectedAreas.push(id)
				if(showCanvas)
				self._mapover( el, true, fixed )
				
				self._eventCallback('select', false, el )
			}
			else
			console.log('Plocha s ID '+id+' na mape neexistuje!')
		},
		
		_deselectArea: function( id, hideCanvas )
		{
			var self = this
			
			id = parseInt( id )
			
			var el = self.$elem.find("area[data-id='"+id+"']")
			var cnv = self.$elem.find('canvas[data-id="'+id+'"]')
			var selected = el.hasClass('selected')
			var fixed = el.hasClass('fixed')
			
			if(!selected || fixed)
			{
			//console.log('ID '+id+' je uz zrusene!')
			return false;
			}
			
			//if(fixed !== true)
			//fixed = false
			
			if(el.length > 0)
			{
				cnv.addClass('temp')
				
				if( cnv.length > 1 || hideCanvas )
				{
				self.$elem.find('canvas[data-id="'+id+'"]:last').fadeOut( self.config.fadeTime )
				}
				el.removeClass('selected')
				
				self._removeItem( self.selectedAreas, id )
				
				self._eventCallback( 'deselect', false, el )
			}
			else
			console.log('Plocha s ID '+id+' na mape neexistuje!')
		},
		
		
		_selectAreas: function( obj, sec, callback )
		{
			var self = this 
			var sec_init = sec
			var length=obj.length
		
			function doSetTimeout(i,id,fixed) {
				setTimeout(function() { 
				self._selectArea(id,fixed,true) 
				self._doCallback(i,length,sec,callback)
				}, sec_init);
				sec_init += sec	
				
			}
			//console.log('l- '+obj.length)
			for(var i=0; i<length; i++)
			{
				var id = parseInt(obj[i].id)
				var fixed = (obj[i].fixed === true ? true : false )
				//var fixed = val.fixed
				//alert(id)
				//var isLast =  (i == length-1)
				//alert(id + ' is last')
				if(sec)
				{
					doSetTimeout(i,id,fixed)
					//setTimeout(function(){
					
					
					//console.log('ssssss')
					//if(isLast)
					//callback()
					//}, sec_init)
					//sec_init += sec
				}
				else
				{
					self._selectArea(id,fixed,true)
					self._doCallback(i,length,sec,callback)
				}
			}
			//$.each( obj, function(key, val){
				//var id = parseInt(key)
				//var fixed = val.fixed
				//alert(val)
				
				
			//})
		},
		
		_doCallback: function(i,length,sec,callback) {
			var self = this
			if( i === length-1 && typeof callback === 'function')
			{
				if(sec>0)
				setTimeout(function(){
				callback( self.map, self.selectedAreas )
				}, sec)
				else
				callback( self.map, self.selectedAreas )
			}
		},
			
		_deselectAreas: function( obj, sec, callback )
		{
			var self = this 
			var sec_init = sec
			var length=obj.length

			
			function doSetTimeout(i,id) {
				setTimeout(function() { 
				self._deselectArea( id, true )
				self._doCallback(i,length,sec,callback)
				}, sec_init);
				sec_init += sec	
				
			}
			
			//$.each( obj, function(key, val){
			
			for(var i=0; i<length; i++)
			{
				var id = parseInt(obj[i].id)
				//var fixed = (obj[i].fixed === true ? true : false )
			
				//var id = parseInt(key)
				//var fixed = val.fixed
				
				if(sec)
				{
					doSetTimeout(i,id)
					
					//setTimeout(function(){
					//self._selectArea(id,fixed,true)
					//self._deselectArea( id, true )
					//}, sec_init)
					//sec_init += sec
				}
				else
				{
					self._deselectArea( id, true )
					self._doCallback(i,length,sec,callback)
				}
				
					
			}
		},
		
		
		
		isSelected: function( id )
		{
			var self = this 
			
			if ( self._inArray( self.selectedAreas, id) )
			return true
			
			return false
		},
		
		isFixed: function( id )
		{
			var self = this 
			var el = self.$elem.find("area[data-id='"+id+"']")
			
			if ( el.hasClass('fixed') )
			return true
			
			return false
		},
		
		getSelected: function( )
		{
			return this.selectedAreas;
		},
		
		getAll: function( )
		{
			var self = this
			var ids = []
			
			self.$elem.find('area').each(  function(key, val){
				var el = $(this)
				var id = parseInt( el.data('id') )
				//var fixed = val.fixed
				//alert(val)
				ids.push( {'id':id} )
				//ids[id] = {}
				//self._selectArea(id,fixed,true)
			})
			
			return ids;
		},
		

		
		
		selectOne: function( id, fixed )
		{
			var self = this
			
			self._onMapLoaded( function(){ 
			
				self._selectArea(id,fixed,true)
			})
			
			
		},
		
		
		selectAll: function( sec, callback )
		{
			var self = this
		
			var obj = self.getAll()
			//alert(obj)
			self.selectMany( obj, sec, callback )
			
			
		},
		
		deselectAll: function( sec, callback )
		{
			var self = this
			
			var obj = self.getAll()
			//alert(obj)
			self.deselect( obj, sec, callback )
		},
		
		
		selectMany: function( obj, sec, callback )
		{
			var self = this
			
			
			
			self._onMapLoaded( function(){ 
			
				self._selectAreas(obj, sec, callback)
				
				//callback()
			})

			
			
			
			//alert(event)
			//alert(id)
		},
		
		deselect: function( obj, sec, callback )
		{
			var self = this 
			self._deselectAreas(obj, sec, callback)
		},
		
		removeFixed: function( obj )
		{
			var self = this 
			//self._deselectAreas(obj, sec, callback)
			for(var i=0; i<obj.length; i++)
			{
				var id = parseInt( obj[i].id )
				var el = self.$elem.find("area[data-id='"+id+"']")
				var cnv = self.$elem.find('canvas[data-id="'+id+'"]')
				cnv.remove()
				el.removeClass('selected').removeClass('fixed')
				self._removeItem( self.selectedAreas, id )
				
				//alert(obj[i].id)
			}
			
		},
		
		
		changeConfig: function( key, value )
		{
			var self = this 
			self.config[ key ] = value
		}
		
		/*
		mlDrawCanvas : function(){
		
		//var mlImageClass = document.getElementsByClassName(imageClass)[0],
		var $image = this.image,
			//$image = $("."+imageClass),
				w = $image.width(),
				h = $image.height();
			
			if($image.siblings('canvas')) {
					$image.siblings('canvas').remove();
					}
			
			mlGetMapName = $image.attr('usemap').replace('#',''),
			theMap = $('map[name="'+mlGetMapName+'"]').addClass('mlHighlight'),
			wrapped = $('<div id="wrap'+mlGetMapName+'image"></div>');
			//wrapped = $('<div class="wrapper"></div>');
			
			if($image.parent('#wrap'+mlGetMapName+'image').length) {
				$image.unwrap();
				}
					$image.wrap(wrapped);
					
					
					var $wrap = $('#wrap'+mlGetMapName+'image');
					
					var opts = {
								'position':'relative',
								'margin':'0 auto',
								'line-height':'0',
								'width':w
								}
					if($wrap.parent().width() < $image.attr('width'))
					opts.width = 'auto'
					
					
					this.$elem.css(opts);
								

		var index = 0;
		 //Adds function atts to all areas on image map 	
			theMap.children('area').each(function() {
				var $this = $(this);
					index++;
					$this.attr('id',mlGetMapName+'area'+index);
					// World Map add-ons //
					$this.attr('target','_blank');
				var	atTitle = $this.attr('alt');
					//$this.attr('href') ? $this.attr('href') : $this.attr('href', 'http://en.wikipedia.org/wiki/'+atTitle);
					$this.attr('href') ? $this.attr('href') : $this.attr('href', '');
					// End World Map add-ons //
					$this.attr('title') ? $this.attr('title') : $this.attr('title',atTitle);
					
					//var cb = 'mapover('+$this.attr('id')+');'
					//$this.attr('onmouseover','mapover('+$this.attr('id')+');').attr('onmouseout','mapout('+$this.attr('id')+');');
					//$this.attr('onmouseover', cb).attr('onmouseout');
					
				
			});
				
			
			//var a = theMap.children('area:first')
			//var b = theMap.children('area:last')

			//b.mouseover(); mouseover


		}
		*/

	}
	
    // You don't need to change something below:
    // A really lightweight plugin wrapper around the constructor,
    // preventing against multiple instantiations and allowing any
    // public function (ie. a function whose name doesn't start
    // with an underscore) to be called via the jQuery plugin,
    // e.g. $(element).defaultPluginName('functionName', arg1, arg2)
    $.fn[pluginName] = function ( options ) {
        var args = arguments;

        // Is the first parameter an object (options), or was omitted,
        // instantiate a new instance of the plugin.
        if (options === undefined || typeof options === 'object') {
            return this.each(function () {

                // Only allow the plugin to be instantiated once,
                // so we check that the element has no plugin instantiation yet
                if (!$.data(this, 'plugin_' + pluginName)) {
					
                    // if it has no instance, create a new one,
                    // pass options to our plugin constructor,
                    // and store the plugin instance
                    // in the elements jQuery data object.
                    $.data(this, 'plugin_' + pluginName, new mapoidPlugin( this, options ));
                }
            });

        // If the first parameter is a string and it doesn't start
        // with an underscore or "contains" the `init`-function,
        // treat this as a call to a public method.
        } else if (typeof options === 'string' && options[0] !== '_' && options !== 'init') {
			
            // Cache the method call
            // to make it possible
            // to return a value
            var returns;

            this.each(function () {
                var instance = $.data(this, 'plugin_' + pluginName);

                // Tests that there's already a plugin-instance
                // and checks that the requested public method exists
                if (instance instanceof mapoidPlugin && typeof instance[options] === 'function') {
					//alert( options )
                    // Call the method of our plugin instance,
                    // and pass it the supplied arguments.
                    returns = instance[options].apply( instance, Array.prototype.slice.call( args, 1 ) );
                }

                // Allow instances to be destroyed via the 'destroy' method
                if (options === 'destroy') {
                  $.data(this, 'plugin_' + pluginName, null);
                }
            });

            // If the earlier cached method
            // gives a value back return the value,
            // otherwise return this to preserve chainability.
            return returns !== undefined ? returns : this;
        }
    };

}(jQuery, window, document));
