define([
	"esri/layers/ArcGISDynamicMapServiceLayer", "esri/geometry/Extent", "esri/SpatialReference", "esri/tasks/query" ,"esri/tasks/QueryTask", "dojo/_base/declare", "esri/layers/FeatureLayer", 
	"esri/symbols/SimpleLineSymbol", "esri/symbols/SimpleFillSymbol","esri/symbols/SimpleMarkerSymbol", "esri/graphic", "dojo/_base/Color"
],
function ( 	ArcGISDynamicMapServiceLayer, Extent, SpatialReference, Query, QueryTask, declare, FeatureLayer, 
			SimpleLineSymbol, SimpleFillSymbol, SimpleMarkerSymbol, Graphic, Color ) {
        "use strict";

        return declare(null, {
			esriApiFunctions: function(t){	
				// Add dynamic map service
				t.dynamicLayer = new ArcGISDynamicMapServiceLayer(t.url, {opacity:0.5});
				t.map.addLayer(t.dynamicLayer);	
				t.dynamicLayer.setVisibleLayers(t.obj.visibleLayers);
				t.dynamicLayer.on("load", function () { 			
					t.layersArray = t.dynamicLayer.layerInfos;
					if (t.obj.stateSet == "no"){
						t.map.setExtent(t.dynamicLayer.fullExtent.expand(0.6), true)
					}
					// set initial top control checks
					$.each($('#' + t.id + 'top-controls input'),function(i,v){
						if (t.obj[v.name] == v.value){
							$('#' + v.id).prop('checked', true);	
						}	
					});
					// reclick first checked item
					$.each($('#' + t.id + 'top-controls input'),function(i,v){
						if (v.checked){
							$('#' + v.id).trigger("click");
							return false;
						}
					})
					// Save and Share Handler					
					if (t.obj.stateSet == "yes"){
						// set slider values
						$.each(t.obj.slIdsVals,function(i,v){
							$('#' + t.id + v[0]).slider('values', v[1]);
						});	
						// checkboxes for sliders
						$.each(t.obj.slCbIds,function(i,v){
							$('#' + t.id + v).trigger('click');
						})
						// set radio buttons to checked state
						$.each(t.obj.rbIds,function(i,v){
							$('#' + t.id + v).attr('checked', true);
						})
						// checkboxes for radio buttons
						$.each(t.obj.rbCbIds,function(i,v){
							$('#' + t.id + v).trigger('click');
						})
						//extent
						var extent = new Extent(t.obj.extent.xmin, t.obj.extent.ymin, t.obj.extent.xmax, t.obj.extent.ymax, new SpatialReference({ wkid:4326 }))
						t.map.setExtent(extent, true);
						t.obj.stateSet = "no";
					}	
				});	
				// Add supporting layers map service
				if ( t.supLayersAdded ){
					t.supportingLayer = new ArcGISDynamicMapServiceLayer(t.url, {opacity:0.3});
					t.map.addLayer(t.supportingLayer);	
					t.dynamicLayer.setVisibleLayers(t.obj.supportingLayers);
				}	
				
				t.sym1  = new SimpleLineSymbol(SimpleLineSymbol.STYLE_SOLID, new Color([88,116,215,1]), 2), new Color([88,116,215]);	
				t.map.on("click",function(c){	
					var q = new Query();
					var qt = new QueryTask(t.url + '/' + t.obj.hucLayer);
					q.geometry = c.mapPoint;
					q.outFields = ["*"];
					q.returnGeometry = true;
					qt.execute(q, function(e){
						if (e.features[0]){
							t.map.graphics.clear();
							t.atts = e.features[0].attributes;
							e.features[0].setSymbol(t.sym1);
							t.map.graphics.add(e.features[0]);
							$.each($("#popupAttWrap input"),function(i,v){
								var commaVal = t.atts[v.id];
								if (!isNaN(commaVal)){
									commaVal = t.clicks.abbreviateNumberPopup(t.atts[v.id])
								}
								if (!isNaN(commaVal)){
									if ( $(`#${v.id}`).hasClass("round") ){
										commaVal = t.clicks.commaSeparateNumber(t.atts[v.id].toFixed(0))
									}else{
										commaVal = t.clicks.commaSeparateNumber(t.atts[v.id].toFixed(2))
									}
								}
								$(v).val(commaVal)
							})
							$("#" + t.descID).show();
						}else{
							t.esriapi.clearGraphics(t);
						}
					}, function(er){
						console.log(er);
					});			
				})
				$("#hideDesc").click(function(c){
					t.esriapi.clearGraphics(t);
				})
			},
			clearGraphics: function(t){
				$('#' + t.descID).hide();
				t.map.graphics.clear();
			}
		});
    }
);