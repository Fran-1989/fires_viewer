	//javascript code for the map using OpenLayers3
	var map = new ol.Map({

	    layers: [new ol.layer.Group({
	            'title': 'Capas Base',
	            layers: [


	                new ol.layer.Tile({
	                    title: 'Satellite',
	                    visible: true,
	                    source: new ol.source.MapQuest({ layer: 'sat' })
	                }),

	                new ol.layer.Tile({
	                    title: 'OSM',
	                    visible: false,
	                    source: new ol.source.OSM()
	                }),


	                new ol.layer.Tile({
	                    title: 'Incendios',
	                    visible: false,
	                    source: new ol.source.TileWMS({
	                        url: 'http://localhost:8080/geoserver/incendios/wms',
	                        params: { 'LAYERS': 'incendios:incendios' },
	                        serverType: 'geoserver',

	                    })
	                }),


	                new ol.layer.Tile({
	                    title: 'Embalses',
	                    visible: false,
	                    source: new ol.source.TileWMS({
	                        url: 'http://localhost:8080/geoserver/incendios/wms',
	                        params: { 'LAYERS': 'incendios:embalses' },
	                        serverType: 'geoserver',

	                    })
	                }),


	                new ol.layer.Tile({
	                    title: 'PN',
	                    visible: false,
	                    source: new ol.source.TileWMS({
	                        url: 'http://localhost:8080/geoserver/incendios/wms',
	                        params: { 'LAYERS': 'incendios:parques_naturales' },
	                        serverType: 'geoserver',

	                    })
	                }),

	                new ol.layer.Tile({
	                    title: 'Provincias',
	                    visible: false,
	                    source: new ol.source.TileWMS({
	                        url: 'http://localhost:8080/geoserver/incendios/wms',
	                        params: { 'LAYERS': 'incendios:provincias' },
	                        serverType: 'geoserver',

	                    })
	                }),




	            ]
	        }),
	        new ol.layer.Group({
	            title: 'Capas Análisis',
	            layers: [

	                new ol.layer.Tile({
	                    title: 'Incendios_Prov',
	                    visible: false,
	                    source: new ol.source.TileWMS({
	                        url: 'http://localhost:8080/geoserver/incendios/wms',
	                        params: { 'LAYERS': 'incendios:incendios_provincias' },
	                        serverType: 'geoserver',

	                    })
	                }),


	                new ol.layer.Tile({
	                    title: 'Incendios-PN',
	                    visible: false,
	                    source: new ol.source.TileWMS({
	                        url: 'http://localhost:8080/geoserver/incendios/wms',
	                        params: { 'LAYERS': 'incendios:incendios_pn' },
	                        serverType: 'geoserver',

	                    })
	                }),


	                new ol.layer.Tile({
	                    title: 'Distancia',
	                    visible: false,
	                    source: new ol.source.TileWMS({
	                        url: 'http://localhost:8080/geoserver/incendios/wms',
	                        params: { 'LAYERS': 'incendios:distancia' },
	                        serverType: 'geoserver',

	                    })
	                }),

	            ]

	        })


	    ],
	    target: 'map',
	    view: new ol.View({
	        center: ol.proj.transform([-4.449462890625, 37.65773212628274], 'EPSG:4326', 'EPSG:3857'),
	        zoom: 7

	    })
	});

	var layerSwitcher = new ol.control.LayerSwitcher({
	    tipLabel: 'Leyenda'
	});
	map.addControl(layerSwitcher);
	layerSwitcher.showPanel();

	map.addControl(new ol.control.ZoomSlider());
	map.addControl(new ol.control.MousePosition());
	map.addControl(new ol.control.OverviewMap());
