var wms_layers = [];


        var lyr_OpenStreetMaps_0 = new ol.layer.Tile({
            'title': 'OpenStreetMaps',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Bangunan_PWD_1 = new ol.format.GeoJSON();
var features_Bangunan_PWD_1 = format_Bangunan_PWD_1.readFeatures(json_Bangunan_PWD_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Bangunan_PWD_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Bangunan_PWD_1.addFeatures(features_Bangunan_PWD_1);
var lyr_Bangunan_PWD_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Bangunan_PWD_1, 
                style: style_Bangunan_PWD_1,
                interactive: true,
                title: '<img src="styles/legend/Bangunan_PWD_1.png" /> Bangunan_PWD'
            });
var format_Area_Terdampak_Pembangunan_2 = new ol.format.GeoJSON();
var features_Area_Terdampak_Pembangunan_2 = format_Area_Terdampak_Pembangunan_2.readFeatures(json_Area_Terdampak_Pembangunan_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Area_Terdampak_Pembangunan_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Area_Terdampak_Pembangunan_2.addFeatures(features_Area_Terdampak_Pembangunan_2);
var lyr_Area_Terdampak_Pembangunan_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Area_Terdampak_Pembangunan_2, 
                style: style_Area_Terdampak_Pembangunan_2,
                interactive: true,
                title: '<img src="styles/legend/Area_Terdampak_Pembangunan_2.png" /> Area_Terdampak_Pembangunan'
            });
var format_Jaringan_Jalan_3 = new ol.format.GeoJSON();
var features_Jaringan_Jalan_3 = format_Jaringan_Jalan_3.readFeatures(json_Jaringan_Jalan_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Jaringan_Jalan_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Jaringan_Jalan_3.addFeatures(features_Jaringan_Jalan_3);
var lyr_Jaringan_Jalan_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Jaringan_Jalan_3, 
                style: style_Jaringan_Jalan_3,
                interactive: true,
                title: '<img src="styles/legend/Jaringan_Jalan_3.png" /> Jaringan_Jalan'
            });

lyr_OpenStreetMaps_0.setVisible(true);lyr_Bangunan_PWD_1.setVisible(true);lyr_Area_Terdampak_Pembangunan_2.setVisible(true);lyr_Jaringan_Jalan_3.setVisible(true);
var layersList = [lyr_OpenStreetMaps_0,lyr_Bangunan_PWD_1,lyr_Area_Terdampak_Pembangunan_2,lyr_Jaringan_Jalan_3];
lyr_Bangunan_PWD_1.set('fieldAliases', {'Jenis': 'Jenis', });
lyr_Area_Terdampak_Pembangunan_2.set('fieldAliases', {'Jenis': 'Jenis', 'Desa': 'Desa', 'Kecamatan': 'Kecamatan', 'Kabupaten': 'Kabupaten', 'ganti_rugi': 'ganti_rugi', });
lyr_Jaringan_Jalan_3.set('fieldAliases', {'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'Tema': 'Tema', 'Jenis': 'Jenis', 'Jenis_Bang': 'Jenis_Bang', 'Toponim': 'Toponim', 'Metadata': 'Metadata', });
lyr_Bangunan_PWD_1.set('fieldImages', {'Jenis': 'TextEdit', });
lyr_Area_Terdampak_Pembangunan_2.set('fieldImages', {'Jenis': 'TextEdit', 'Desa': 'TextEdit', 'Kecamatan': 'TextEdit', 'Kabupaten': 'TextEdit', 'ganti_rugi': 'TextEdit', });
lyr_Jaringan_Jalan_3.set('fieldImages', {'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'Tema': 'TextEdit', 'Jenis': 'TextEdit', 'Jenis_Bang': 'TextEdit', 'Toponim': 'TextEdit', 'Metadata': 'TextEdit', });
lyr_Bangunan_PWD_1.set('fieldLabels', {'Jenis': 'no label', });
lyr_Area_Terdampak_Pembangunan_2.set('fieldLabels', {'Jenis': 'header label', 'Desa': 'header label', 'Kecamatan': 'header label', 'Kabupaten': 'header label', 'ganti_rugi': 'header label', });
lyr_Jaringan_Jalan_3.set('fieldLabels', {'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'Tema': 'no label', 'Jenis': 'no label', 'Jenis_Bang': 'no label', 'Toponim': 'no label', 'Metadata': 'no label', });
lyr_Jaringan_Jalan_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});