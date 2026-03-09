ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:4326").setExtent([-43.121821, -22.884865, -43.108562, -22.877550]);
var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_FundeadourosLongoPrazo_1 = new ol.format.GeoJSON();
var features_FundeadourosLongoPrazo_1 = format_FundeadourosLongoPrazo_1.readFeatures(json_FundeadourosLongoPrazo_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_FundeadourosLongoPrazo_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FundeadourosLongoPrazo_1.addFeatures(features_FundeadourosLongoPrazo_1);
var lyr_FundeadourosLongoPrazo_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FundeadourosLongoPrazo_1, 
                style: style_FundeadourosLongoPrazo_1,
                popuplayertitle: 'Fundeadouros - Longo Prazo ',
                interactive: true,
                title: '<img src="styles/legend/FundeadourosLongoPrazo_1.png" /> Fundeadouros - Longo Prazo '
            });
var format_FundeadourosMdioPrazo_2 = new ol.format.GeoJSON();
var features_FundeadourosMdioPrazo_2 = format_FundeadourosMdioPrazo_2.readFeatures(json_FundeadourosMdioPrazo_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_FundeadourosMdioPrazo_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FundeadourosMdioPrazo_2.addFeatures(features_FundeadourosMdioPrazo_2);
var lyr_FundeadourosMdioPrazo_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FundeadourosMdioPrazo_2, 
                style: style_FundeadourosMdioPrazo_2,
                popuplayertitle: 'Fundeadouros - Médio Prazo ',
                interactive: true,
                title: '<img src="styles/legend/FundeadourosMdioPrazo_2.png" /> Fundeadouros - Médio Prazo '
            });
var format_FundeadourosCurtoPrazo_3 = new ol.format.GeoJSON();
var features_FundeadourosCurtoPrazo_3 = format_FundeadourosCurtoPrazo_3.readFeatures(json_FundeadourosCurtoPrazo_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_FundeadourosCurtoPrazo_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FundeadourosCurtoPrazo_3.addFeatures(features_FundeadourosCurtoPrazo_3);
var lyr_FundeadourosCurtoPrazo_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FundeadourosCurtoPrazo_3, 
                style: style_FundeadourosCurtoPrazo_3,
                popuplayertitle: 'Fundeadouros - Curto Prazo ',
                interactive: true,
                title: '<img src="styles/legend/FundeadourosCurtoPrazo_3.png" /> Fundeadouros - Curto Prazo '
            });
var format_FundeadourosSituaoAtual_4 = new ol.format.GeoJSON();
var features_FundeadourosSituaoAtual_4 = format_FundeadourosSituaoAtual_4.readFeatures(json_FundeadourosSituaoAtual_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_FundeadourosSituaoAtual_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FundeadourosSituaoAtual_4.addFeatures(features_FundeadourosSituaoAtual_4);
var lyr_FundeadourosSituaoAtual_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FundeadourosSituaoAtual_4, 
                style: style_FundeadourosSituaoAtual_4,
                popuplayertitle: 'Fundeadouros - Situação Atual ',
                interactive: true,
                title: '<img src="styles/legend/FundeadourosSituaoAtual_4.png" /> Fundeadouros - Situação Atual '
            });
var format_BaciasdeEvoluoLongoPrazo_5 = new ol.format.GeoJSON();
var features_BaciasdeEvoluoLongoPrazo_5 = format_BaciasdeEvoluoLongoPrazo_5.readFeatures(json_BaciasdeEvoluoLongoPrazo_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_BaciasdeEvoluoLongoPrazo_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BaciasdeEvoluoLongoPrazo_5.addFeatures(features_BaciasdeEvoluoLongoPrazo_5);
var lyr_BaciasdeEvoluoLongoPrazo_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BaciasdeEvoluoLongoPrazo_5, 
                style: style_BaciasdeEvoluoLongoPrazo_5,
                popuplayertitle: 'Bacias de Evolução - Longo Prazo ',
                interactive: true,
                title: '<img src="styles/legend/BaciasdeEvoluoLongoPrazo_5.png" /> Bacias de Evolução - Longo Prazo '
            });
var format_BaciasdeEvoluoMdioPrazo_6 = new ol.format.GeoJSON();
var features_BaciasdeEvoluoMdioPrazo_6 = format_BaciasdeEvoluoMdioPrazo_6.readFeatures(json_BaciasdeEvoluoMdioPrazo_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_BaciasdeEvoluoMdioPrazo_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BaciasdeEvoluoMdioPrazo_6.addFeatures(features_BaciasdeEvoluoMdioPrazo_6);
var lyr_BaciasdeEvoluoMdioPrazo_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BaciasdeEvoluoMdioPrazo_6, 
                style: style_BaciasdeEvoluoMdioPrazo_6,
                popuplayertitle: 'Bacias de Evolução - Médio Prazo ',
                interactive: true,
                title: '<img src="styles/legend/BaciasdeEvoluoMdioPrazo_6.png" /> Bacias de Evolução - Médio Prazo '
            });
var format_BaciasdeEvoluoCurtoPrazo_7 = new ol.format.GeoJSON();
var features_BaciasdeEvoluoCurtoPrazo_7 = format_BaciasdeEvoluoCurtoPrazo_7.readFeatures(json_BaciasdeEvoluoCurtoPrazo_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_BaciasdeEvoluoCurtoPrazo_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BaciasdeEvoluoCurtoPrazo_7.addFeatures(features_BaciasdeEvoluoCurtoPrazo_7);
var lyr_BaciasdeEvoluoCurtoPrazo_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BaciasdeEvoluoCurtoPrazo_7, 
                style: style_BaciasdeEvoluoCurtoPrazo_7,
                popuplayertitle: 'Bacias de Evolução - Curto Prazo ',
                interactive: true,
                title: '<img src="styles/legend/BaciasdeEvoluoCurtoPrazo_7.png" /> Bacias de Evolução - Curto Prazo '
            });
var format_BaciasdeEvoluoSituaoAtual_8 = new ol.format.GeoJSON();
var features_BaciasdeEvoluoSituaoAtual_8 = format_BaciasdeEvoluoSituaoAtual_8.readFeatures(json_BaciasdeEvoluoSituaoAtual_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_BaciasdeEvoluoSituaoAtual_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BaciasdeEvoluoSituaoAtual_8.addFeatures(features_BaciasdeEvoluoSituaoAtual_8);
var lyr_BaciasdeEvoluoSituaoAtual_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BaciasdeEvoluoSituaoAtual_8, 
                style: style_BaciasdeEvoluoSituaoAtual_8,
                popuplayertitle: 'Bacias de Evolução - Situação Atual ',
                interactive: true,
                title: '<img src="styles/legend/BaciasdeEvoluoSituaoAtual_8.png" /> Bacias de Evolução - Situação Atual '
            });
var format_CanaisdeAcessoLongoPrazo_9 = new ol.format.GeoJSON();
var features_CanaisdeAcessoLongoPrazo_9 = format_CanaisdeAcessoLongoPrazo_9.readFeatures(json_CanaisdeAcessoLongoPrazo_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_CanaisdeAcessoLongoPrazo_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CanaisdeAcessoLongoPrazo_9.addFeatures(features_CanaisdeAcessoLongoPrazo_9);
var lyr_CanaisdeAcessoLongoPrazo_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CanaisdeAcessoLongoPrazo_9, 
                style: style_CanaisdeAcessoLongoPrazo_9,
                popuplayertitle: 'Canais de Acesso - Longo Prazo ',
                interactive: true,
                title: '<img src="styles/legend/CanaisdeAcessoLongoPrazo_9.png" /> Canais de Acesso - Longo Prazo '
            });
var format_CanaisdeAcessoMdioPrazo_10 = new ol.format.GeoJSON();
var features_CanaisdeAcessoMdioPrazo_10 = format_CanaisdeAcessoMdioPrazo_10.readFeatures(json_CanaisdeAcessoMdioPrazo_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_CanaisdeAcessoMdioPrazo_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CanaisdeAcessoMdioPrazo_10.addFeatures(features_CanaisdeAcessoMdioPrazo_10);
var lyr_CanaisdeAcessoMdioPrazo_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CanaisdeAcessoMdioPrazo_10, 
                style: style_CanaisdeAcessoMdioPrazo_10,
                popuplayertitle: 'Canais de Acesso - Médio Prazo ',
                interactive: true,
                title: '<img src="styles/legend/CanaisdeAcessoMdioPrazo_10.png" /> Canais de Acesso - Médio Prazo '
            });
var format_CanaisdeAcessoCurtoPrazo_11 = new ol.format.GeoJSON();
var features_CanaisdeAcessoCurtoPrazo_11 = format_CanaisdeAcessoCurtoPrazo_11.readFeatures(json_CanaisdeAcessoCurtoPrazo_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_CanaisdeAcessoCurtoPrazo_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CanaisdeAcessoCurtoPrazo_11.addFeatures(features_CanaisdeAcessoCurtoPrazo_11);
var lyr_CanaisdeAcessoCurtoPrazo_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CanaisdeAcessoCurtoPrazo_11, 
                style: style_CanaisdeAcessoCurtoPrazo_11,
                popuplayertitle: 'Canais de Acesso - Curto Prazo ',
                interactive: true,
                title: '<img src="styles/legend/CanaisdeAcessoCurtoPrazo_11.png" /> Canais de Acesso - Curto Prazo '
            });
var format_CanaisdeAcessoSituaoAtual_12 = new ol.format.GeoJSON();
var features_CanaisdeAcessoSituaoAtual_12 = format_CanaisdeAcessoSituaoAtual_12.readFeatures(json_CanaisdeAcessoSituaoAtual_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_CanaisdeAcessoSituaoAtual_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CanaisdeAcessoSituaoAtual_12.addFeatures(features_CanaisdeAcessoSituaoAtual_12);
var lyr_CanaisdeAcessoSituaoAtual_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CanaisdeAcessoSituaoAtual_12, 
                style: style_CanaisdeAcessoSituaoAtual_12,
                popuplayertitle: 'Canais de Acesso - Situação Atual ',
                interactive: true,
                title: '<img src="styles/legend/CanaisdeAcessoSituaoAtual_12.png" /> Canais de Acesso - Situação Atual '
            });
var format_AcessosRodoviriosInternosLongoPrazo_13 = new ol.format.GeoJSON();
var features_AcessosRodoviriosInternosLongoPrazo_13 = format_AcessosRodoviriosInternosLongoPrazo_13.readFeatures(json_AcessosRodoviriosInternosLongoPrazo_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_AcessosRodoviriosInternosLongoPrazo_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AcessosRodoviriosInternosLongoPrazo_13.addFeatures(features_AcessosRodoviriosInternosLongoPrazo_13);
var lyr_AcessosRodoviriosInternosLongoPrazo_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AcessosRodoviriosInternosLongoPrazo_13, 
                style: style_AcessosRodoviriosInternosLongoPrazo_13,
                popuplayertitle: 'Acessos Rodoviários Internos - Longo Prazo ',
                interactive: true,
                title: '<img src="styles/legend/AcessosRodoviriosInternosLongoPrazo_13.png" /> Acessos Rodoviários Internos - Longo Prazo '
            });
var format_AcessosRodoviriosInternosMdioPrazo_14 = new ol.format.GeoJSON();
var features_AcessosRodoviriosInternosMdioPrazo_14 = format_AcessosRodoviriosInternosMdioPrazo_14.readFeatures(json_AcessosRodoviriosInternosMdioPrazo_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_AcessosRodoviriosInternosMdioPrazo_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AcessosRodoviriosInternosMdioPrazo_14.addFeatures(features_AcessosRodoviriosInternosMdioPrazo_14);
var lyr_AcessosRodoviriosInternosMdioPrazo_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AcessosRodoviriosInternosMdioPrazo_14, 
                style: style_AcessosRodoviriosInternosMdioPrazo_14,
                popuplayertitle: 'Acessos Rodoviários Internos - Médio Prazo ',
                interactive: true,
                title: '<img src="styles/legend/AcessosRodoviriosInternosMdioPrazo_14.png" /> Acessos Rodoviários Internos - Médio Prazo '
            });
var format_AcessosRodoviriosInternosCurtoPrazo_15 = new ol.format.GeoJSON();
var features_AcessosRodoviriosInternosCurtoPrazo_15 = format_AcessosRodoviriosInternosCurtoPrazo_15.readFeatures(json_AcessosRodoviriosInternosCurtoPrazo_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_AcessosRodoviriosInternosCurtoPrazo_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AcessosRodoviriosInternosCurtoPrazo_15.addFeatures(features_AcessosRodoviriosInternosCurtoPrazo_15);
var lyr_AcessosRodoviriosInternosCurtoPrazo_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AcessosRodoviriosInternosCurtoPrazo_15, 
                style: style_AcessosRodoviriosInternosCurtoPrazo_15,
                popuplayertitle: 'Acessos Rodoviários Internos - Curto Prazo ',
                interactive: true,
                title: '<img src="styles/legend/AcessosRodoviriosInternosCurtoPrazo_15.png" /> Acessos Rodoviários Internos - Curto Prazo '
            });
var format_AcessosRodoviriosInternosSituaoAtual_16 = new ol.format.GeoJSON();
var features_AcessosRodoviriosInternosSituaoAtual_16 = format_AcessosRodoviriosInternosSituaoAtual_16.readFeatures(json_AcessosRodoviriosInternosSituaoAtual_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_AcessosRodoviriosInternosSituaoAtual_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AcessosRodoviriosInternosSituaoAtual_16.addFeatures(features_AcessosRodoviriosInternosSituaoAtual_16);
var lyr_AcessosRodoviriosInternosSituaoAtual_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AcessosRodoviriosInternosSituaoAtual_16, 
                style: style_AcessosRodoviriosInternosSituaoAtual_16,
                popuplayertitle: 'Acessos Rodoviários Internos - Situação Atual ',
                interactive: true,
                title: '<img src="styles/legend/AcessosRodoviriosInternosSituaoAtual_16.png" /> Acessos Rodoviários Internos - Situação Atual '
            });
var format_AcessosRodoviriosExternos_17 = new ol.format.GeoJSON();
var features_AcessosRodoviriosExternos_17 = format_AcessosRodoviriosExternos_17.readFeatures(json_AcessosRodoviriosExternos_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_AcessosRodoviriosExternos_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AcessosRodoviriosExternos_17.addFeatures(features_AcessosRodoviriosExternos_17);
var lyr_AcessosRodoviriosExternos_17 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AcessosRodoviriosExternos_17, 
                style: style_AcessosRodoviriosExternos_17,
                popuplayertitle: 'Acessos Rodoviários Externos ',
                interactive: true,
                title: '<img src="styles/legend/AcessosRodoviriosExternos_17.png" /> Acessos Rodoviários Externos '
            });
var format_reaseInstalaesAlfandegadas_18 = new ol.format.GeoJSON();
var features_reaseInstalaesAlfandegadas_18 = format_reaseInstalaesAlfandegadas_18.readFeatures(json_reaseInstalaesAlfandegadas_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_reaseInstalaesAlfandegadas_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reaseInstalaesAlfandegadas_18.addFeatures(features_reaseInstalaesAlfandegadas_18);
var lyr_reaseInstalaesAlfandegadas_18 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reaseInstalaesAlfandegadas_18, 
                style: style_reaseInstalaesAlfandegadas_18,
                popuplayertitle: 'Áreas e Instalações Alfandegadas ',
                interactive: true,
                title: '<img src="styles/legend/reaseInstalaesAlfandegadas_18.png" /> Áreas e Instalações Alfandegadas '
            });
var format_AcostagemLongoPrazo_19 = new ol.format.GeoJSON();
var features_AcostagemLongoPrazo_19 = format_AcostagemLongoPrazo_19.readFeatures(json_AcostagemLongoPrazo_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_AcostagemLongoPrazo_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AcostagemLongoPrazo_19.addFeatures(features_AcostagemLongoPrazo_19);
var lyr_AcostagemLongoPrazo_19 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AcostagemLongoPrazo_19, 
                style: style_AcostagemLongoPrazo_19,
                popuplayertitle: 'Acostagem - Longo Prazo ',
                interactive: true,
                title: '<img src="styles/legend/AcostagemLongoPrazo_19.png" /> Acostagem - Longo Prazo '
            });
var format_AcostagemMdioPrazo_20 = new ol.format.GeoJSON();
var features_AcostagemMdioPrazo_20 = format_AcostagemMdioPrazo_20.readFeatures(json_AcostagemMdioPrazo_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_AcostagemMdioPrazo_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AcostagemMdioPrazo_20.addFeatures(features_AcostagemMdioPrazo_20);
var lyr_AcostagemMdioPrazo_20 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AcostagemMdioPrazo_20, 
                style: style_AcostagemMdioPrazo_20,
                popuplayertitle: 'Acostagem - Médio Prazo ',
                interactive: true,
                title: '<img src="styles/legend/AcostagemMdioPrazo_20.png" /> Acostagem - Médio Prazo '
            });
var format_AcostagemCurtoPrazo_21 = new ol.format.GeoJSON();
var features_AcostagemCurtoPrazo_21 = format_AcostagemCurtoPrazo_21.readFeatures(json_AcostagemCurtoPrazo_21, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_AcostagemCurtoPrazo_21 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AcostagemCurtoPrazo_21.addFeatures(features_AcostagemCurtoPrazo_21);
var lyr_AcostagemCurtoPrazo_21 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AcostagemCurtoPrazo_21, 
                style: style_AcostagemCurtoPrazo_21,
                popuplayertitle: 'Acostagem - Curto Prazo',
                interactive: true,
                title: '<img src="styles/legend/AcostagemCurtoPrazo_21.png" /> Acostagem - Curto Prazo'
            });
var format_AcostagemSituaoAtual_22 = new ol.format.GeoJSON();
var features_AcostagemSituaoAtual_22 = format_AcostagemSituaoAtual_22.readFeatures(json_AcostagemSituaoAtual_22, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_AcostagemSituaoAtual_22 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AcostagemSituaoAtual_22.addFeatures(features_AcostagemSituaoAtual_22);
var lyr_AcostagemSituaoAtual_22 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AcostagemSituaoAtual_22, 
                style: style_AcostagemSituaoAtual_22,
                popuplayertitle: 'Acostagem - Situação Atual ',
                interactive: true,
                title: '<img src="styles/legend/AcostagemSituaoAtual_22.png" /> Acostagem - Situação Atual '
            });
var format_ArmazenagemLongoPrazo_23 = new ol.format.GeoJSON();
var features_ArmazenagemLongoPrazo_23 = format_ArmazenagemLongoPrazo_23.readFeatures(json_ArmazenagemLongoPrazo_23, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_ArmazenagemLongoPrazo_23 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ArmazenagemLongoPrazo_23.addFeatures(features_ArmazenagemLongoPrazo_23);
var lyr_ArmazenagemLongoPrazo_23 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ArmazenagemLongoPrazo_23, 
                style: style_ArmazenagemLongoPrazo_23,
                popuplayertitle: 'Armazenagem - Longo Prazo ',
                interactive: true,
                title: '<img src="styles/legend/ArmazenagemLongoPrazo_23.png" /> Armazenagem - Longo Prazo '
            });
var format_ArmazenagemMdioPrazo_24 = new ol.format.GeoJSON();
var features_ArmazenagemMdioPrazo_24 = format_ArmazenagemMdioPrazo_24.readFeatures(json_ArmazenagemMdioPrazo_24, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_ArmazenagemMdioPrazo_24 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ArmazenagemMdioPrazo_24.addFeatures(features_ArmazenagemMdioPrazo_24);
var lyr_ArmazenagemMdioPrazo_24 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ArmazenagemMdioPrazo_24, 
                style: style_ArmazenagemMdioPrazo_24,
                popuplayertitle: 'Armazenagem - Médio Prazo ',
                interactive: true,
                title: '<img src="styles/legend/ArmazenagemMdioPrazo_24.png" /> Armazenagem - Médio Prazo '
            });
var format_ArmazenagemCurtoPrazo_25 = new ol.format.GeoJSON();
var features_ArmazenagemCurtoPrazo_25 = format_ArmazenagemCurtoPrazo_25.readFeatures(json_ArmazenagemCurtoPrazo_25, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_ArmazenagemCurtoPrazo_25 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ArmazenagemCurtoPrazo_25.addFeatures(features_ArmazenagemCurtoPrazo_25);
var lyr_ArmazenagemCurtoPrazo_25 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ArmazenagemCurtoPrazo_25, 
                style: style_ArmazenagemCurtoPrazo_25,
                popuplayertitle: 'Armazenagem - Curto Prazo ',
                interactive: true,
                title: '<img src="styles/legend/ArmazenagemCurtoPrazo_25.png" /> Armazenagem - Curto Prazo '
            });
var format_ArmazenagemSituaoAtual_26 = new ol.format.GeoJSON();
var features_ArmazenagemSituaoAtual_26 = format_ArmazenagemSituaoAtual_26.readFeatures(json_ArmazenagemSituaoAtual_26, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_ArmazenagemSituaoAtual_26 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ArmazenagemSituaoAtual_26.addFeatures(features_ArmazenagemSituaoAtual_26);
var lyr_ArmazenagemSituaoAtual_26 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ArmazenagemSituaoAtual_26, 
                style: style_ArmazenagemSituaoAtual_26,
                popuplayertitle: 'Armazenagem - Situação Atual ',
                interactive: true,
                title: '<img src="styles/legend/ArmazenagemSituaoAtual_26.png" /> Armazenagem - Situação Atual '
            });
var format_reasAfetassOperaesPorturiasDisponveisparaArrendamentoLongoPrazo_27 = new ol.format.GeoJSON();
var features_reasAfetassOperaesPorturiasDisponveisparaArrendamentoLongoPrazo_27 = format_reasAfetassOperaesPorturiasDisponveisparaArrendamentoLongoPrazo_27.readFeatures(json_reasAfetassOperaesPorturiasDisponveisparaArrendamentoLongoPrazo_27, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_reasAfetassOperaesPorturiasDisponveisparaArrendamentoLongoPrazo_27 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reasAfetassOperaesPorturiasDisponveisparaArrendamentoLongoPrazo_27.addFeatures(features_reasAfetassOperaesPorturiasDisponveisparaArrendamentoLongoPrazo_27);
var lyr_reasAfetassOperaesPorturiasDisponveisparaArrendamentoLongoPrazo_27 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reasAfetassOperaesPorturiasDisponveisparaArrendamentoLongoPrazo_27, 
                style: style_reasAfetassOperaesPorturiasDisponveisparaArrendamentoLongoPrazo_27,
                popuplayertitle: 'Áreas Afetas às Operações Portuárias Disponíveis para Arrendamento - Longo Prazo ',
                interactive: true,
                title: '<img src="styles/legend/reasAfetassOperaesPorturiasDisponveisparaArrendamentoLongoPrazo_27.png" /> Áreas Afetas às Operações Portuárias Disponíveis para Arrendamento - Longo Prazo '
            });
var format_reasAfetassOperaesPorturiasDisponveisparaArrendamentoMdioPrazo_28 = new ol.format.GeoJSON();
var features_reasAfetassOperaesPorturiasDisponveisparaArrendamentoMdioPrazo_28 = format_reasAfetassOperaesPorturiasDisponveisparaArrendamentoMdioPrazo_28.readFeatures(json_reasAfetassOperaesPorturiasDisponveisparaArrendamentoMdioPrazo_28, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_reasAfetassOperaesPorturiasDisponveisparaArrendamentoMdioPrazo_28 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reasAfetassOperaesPorturiasDisponveisparaArrendamentoMdioPrazo_28.addFeatures(features_reasAfetassOperaesPorturiasDisponveisparaArrendamentoMdioPrazo_28);
var lyr_reasAfetassOperaesPorturiasDisponveisparaArrendamentoMdioPrazo_28 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reasAfetassOperaesPorturiasDisponveisparaArrendamentoMdioPrazo_28, 
                style: style_reasAfetassOperaesPorturiasDisponveisparaArrendamentoMdioPrazo_28,
                popuplayertitle: 'Áreas Afetas às Operações Portuárias Disponíveis para Arrendamento - Médio Prazo ',
                interactive: true,
                title: '<img src="styles/legend/reasAfetassOperaesPorturiasDisponveisparaArrendamentoMdioPrazo_28.png" /> Áreas Afetas às Operações Portuárias Disponíveis para Arrendamento - Médio Prazo '
            });
var format_reasAfetassOperaesPorturiasDisponveisparaArrendamentoCurtoPrazo_29 = new ol.format.GeoJSON();
var features_reasAfetassOperaesPorturiasDisponveisparaArrendamentoCurtoPrazo_29 = format_reasAfetassOperaesPorturiasDisponveisparaArrendamentoCurtoPrazo_29.readFeatures(json_reasAfetassOperaesPorturiasDisponveisparaArrendamentoCurtoPrazo_29, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_reasAfetassOperaesPorturiasDisponveisparaArrendamentoCurtoPrazo_29 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reasAfetassOperaesPorturiasDisponveisparaArrendamentoCurtoPrazo_29.addFeatures(features_reasAfetassOperaesPorturiasDisponveisparaArrendamentoCurtoPrazo_29);
var lyr_reasAfetassOperaesPorturiasDisponveisparaArrendamentoCurtoPrazo_29 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reasAfetassOperaesPorturiasDisponveisparaArrendamentoCurtoPrazo_29, 
                style: style_reasAfetassOperaesPorturiasDisponveisparaArrendamentoCurtoPrazo_29,
                popuplayertitle: 'Áreas Afetas às Operações Portuárias Disponíveis para Arrendamento - Curto Prazo ',
                interactive: true,
                title: '<img src="styles/legend/reasAfetassOperaesPorturiasDisponveisparaArrendamentoCurtoPrazo_29.png" /> Áreas Afetas às Operações Portuárias Disponíveis para Arrendamento - Curto Prazo '
            });
var format_reasAfetassOperaesPorturiasArrendadas_30 = new ol.format.GeoJSON();
var features_reasAfetassOperaesPorturiasArrendadas_30 = format_reasAfetassOperaesPorturiasArrendadas_30.readFeatures(json_reasAfetassOperaesPorturiasArrendadas_30, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_reasAfetassOperaesPorturiasArrendadas_30 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reasAfetassOperaesPorturiasArrendadas_30.addFeatures(features_reasAfetassOperaesPorturiasArrendadas_30);
var lyr_reasAfetassOperaesPorturiasArrendadas_30 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reasAfetassOperaesPorturiasArrendadas_30, 
                style: style_reasAfetassOperaesPorturiasArrendadas_30,
                popuplayertitle: 'Áreas Afetas às Operações Portuárias Arrendadas ',
                interactive: true,
                title: '<img src="styles/legend/reasAfetassOperaesPorturiasArrendadas_30.png" /> Áreas Afetas às Operações Portuárias Arrendadas '
            });
var format_FluidosdePerfurao_31 = new ol.format.GeoJSON();
var features_FluidosdePerfurao_31 = format_FluidosdePerfurao_31.readFeatures(json_FluidosdePerfurao_31, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_FluidosdePerfurao_31 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FluidosdePerfurao_31.addFeatures(features_FluidosdePerfurao_31);
var lyr_FluidosdePerfurao_31 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FluidosdePerfurao_31, 
                style: style_FluidosdePerfurao_31,
                popuplayertitle: 'Fluidos de Perfuração',
                interactive: true,
                title: '<img src="styles/legend/FluidosdePerfurao_31.png" /> Fluidos de Perfuração'
            });
var format_CargaGeraleOffshore_32 = new ol.format.GeoJSON();
var features_CargaGeraleOffshore_32 = format_CargaGeraleOffshore_32.readFeatures(json_CargaGeraleOffshore_32, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_CargaGeraleOffshore_32 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CargaGeraleOffshore_32.addFeatures(features_CargaGeraleOffshore_32);
var lyr_CargaGeraleOffshore_32 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CargaGeraleOffshore_32, 
                style: style_CargaGeraleOffshore_32,
                popuplayertitle: 'Carga Geral e Offshore',
                interactive: true,
                title: '<img src="styles/legend/CargaGeraleOffshore_32.png" /> Carga Geral e Offshore'
            });
var format_GranisSlidoseCargaGeral_33 = new ol.format.GeoJSON();
var features_GranisSlidoseCargaGeral_33 = format_GranisSlidoseCargaGeral_33.readFeatures(json_GranisSlidoseCargaGeral_33, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_GranisSlidoseCargaGeral_33 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GranisSlidoseCargaGeral_33.addFeatures(features_GranisSlidoseCargaGeral_33);
var lyr_GranisSlidoseCargaGeral_33 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GranisSlidoseCargaGeral_33, 
                style: style_GranisSlidoseCargaGeral_33,
                popuplayertitle: 'Granéis Sólidos e Carga Geral',
                interactive: true,
                title: '<img src="styles/legend/GranisSlidoseCargaGeral_33.png" /> Granéis Sólidos e Carga Geral'
            });
var format_CargaOffshoreeReparoNaval_34 = new ol.format.GeoJSON();
var features_CargaOffshoreeReparoNaval_34 = format_CargaOffshoreeReparoNaval_34.readFeatures(json_CargaOffshoreeReparoNaval_34, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_CargaOffshoreeReparoNaval_34 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CargaOffshoreeReparoNaval_34.addFeatures(features_CargaOffshoreeReparoNaval_34);
var lyr_CargaOffshoreeReparoNaval_34 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CargaOffshoreeReparoNaval_34, 
                style: style_CargaOffshoreeReparoNaval_34,
                popuplayertitle: 'Carga Offshore e Reparo Naval',
                interactive: true,
                title: '<img src="styles/legend/CargaOffshoreeReparoNaval_34.png" /> Carga Offshore e Reparo Naval'
            });
var format_FluidosdePerfurao_35 = new ol.format.GeoJSON();
var features_FluidosdePerfurao_35 = format_FluidosdePerfurao_35.readFeatures(json_FluidosdePerfurao_35, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_FluidosdePerfurao_35 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FluidosdePerfurao_35.addFeatures(features_FluidosdePerfurao_35);
var lyr_FluidosdePerfurao_35 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FluidosdePerfurao_35, 
                style: style_FluidosdePerfurao_35,
                popuplayertitle: 'Fluidos de Perfuração',
                interactive: true,
                title: '<img src="styles/legend/FluidosdePerfurao_35.png" /> Fluidos de Perfuração'
            });
var format_CargaGeraleOffshore_36 = new ol.format.GeoJSON();
var features_CargaGeraleOffshore_36 = format_CargaGeraleOffshore_36.readFeatures(json_CargaGeraleOffshore_36, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_CargaGeraleOffshore_36 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CargaGeraleOffshore_36.addFeatures(features_CargaGeraleOffshore_36);
var lyr_CargaGeraleOffshore_36 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CargaGeraleOffshore_36, 
                style: style_CargaGeraleOffshore_36,
                popuplayertitle: 'Carga Geral e Offshore',
                interactive: true,
                title: '<img src="styles/legend/CargaGeraleOffshore_36.png" /> Carga Geral e Offshore'
            });
var format_GranisSlidoseCargaGeral_37 = new ol.format.GeoJSON();
var features_GranisSlidoseCargaGeral_37 = format_GranisSlidoseCargaGeral_37.readFeatures(json_GranisSlidoseCargaGeral_37, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_GranisSlidoseCargaGeral_37 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GranisSlidoseCargaGeral_37.addFeatures(features_GranisSlidoseCargaGeral_37);
var lyr_GranisSlidoseCargaGeral_37 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GranisSlidoseCargaGeral_37, 
                style: style_GranisSlidoseCargaGeral_37,
                popuplayertitle: 'Granéis Sólidos e Carga Geral',
                interactive: true,
                title: '<img src="styles/legend/GranisSlidoseCargaGeral_37.png" /> Granéis Sólidos e Carga Geral'
            });
var format_CargaOffshoreeReparoNaval_38 = new ol.format.GeoJSON();
var features_CargaOffshoreeReparoNaval_38 = format_CargaOffshoreeReparoNaval_38.readFeatures(json_CargaOffshoreeReparoNaval_38, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_CargaOffshoreeReparoNaval_38 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CargaOffshoreeReparoNaval_38.addFeatures(features_CargaOffshoreeReparoNaval_38);
var lyr_CargaOffshoreeReparoNaval_38 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CargaOffshoreeReparoNaval_38, 
                style: style_CargaOffshoreeReparoNaval_38,
                popuplayertitle: 'Carga Offshore e Reparo Naval',
                interactive: true,
                title: '<img src="styles/legend/CargaOffshoreeReparoNaval_38.png" /> Carga Offshore e Reparo Naval'
            });
var format_FluidosdePerfurao_39 = new ol.format.GeoJSON();
var features_FluidosdePerfurao_39 = format_FluidosdePerfurao_39.readFeatures(json_FluidosdePerfurao_39, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_FluidosdePerfurao_39 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FluidosdePerfurao_39.addFeatures(features_FluidosdePerfurao_39);
var lyr_FluidosdePerfurao_39 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FluidosdePerfurao_39, 
                style: style_FluidosdePerfurao_39,
                popuplayertitle: 'Fluidos de Perfuração ',
                interactive: true,
                title: '<img src="styles/legend/FluidosdePerfurao_39.png" /> Fluidos de Perfuração '
            });
var format_CargaGeraleOffshore_40 = new ol.format.GeoJSON();
var features_CargaGeraleOffshore_40 = format_CargaGeraleOffshore_40.readFeatures(json_CargaGeraleOffshore_40, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_CargaGeraleOffshore_40 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CargaGeraleOffshore_40.addFeatures(features_CargaGeraleOffshore_40);
var lyr_CargaGeraleOffshore_40 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CargaGeraleOffshore_40, 
                style: style_CargaGeraleOffshore_40,
                popuplayertitle: 'Carga Geral e Offshore',
                interactive: true,
                title: '<img src="styles/legend/CargaGeraleOffshore_40.png" /> Carga Geral e Offshore'
            });
var format_GranisSlidoseCargaGeral_41 = new ol.format.GeoJSON();
var features_GranisSlidoseCargaGeral_41 = format_GranisSlidoseCargaGeral_41.readFeatures(json_GranisSlidoseCargaGeral_41, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_GranisSlidoseCargaGeral_41 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GranisSlidoseCargaGeral_41.addFeatures(features_GranisSlidoseCargaGeral_41);
var lyr_GranisSlidoseCargaGeral_41 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GranisSlidoseCargaGeral_41, 
                style: style_GranisSlidoseCargaGeral_41,
                popuplayertitle: 'Granéis Sólidos e Carga Geral',
                interactive: true,
                title: '<img src="styles/legend/GranisSlidoseCargaGeral_41.png" /> Granéis Sólidos e Carga Geral'
            });
var format_CargaOffshoreeReparoNaval_42 = new ol.format.GeoJSON();
var features_CargaOffshoreeReparoNaval_42 = format_CargaOffshoreeReparoNaval_42.readFeatures(json_CargaOffshoreeReparoNaval_42, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_CargaOffshoreeReparoNaval_42 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CargaOffshoreeReparoNaval_42.addFeatures(features_CargaOffshoreeReparoNaval_42);
var lyr_CargaOffshoreeReparoNaval_42 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CargaOffshoreeReparoNaval_42, 
                style: style_CargaOffshoreeReparoNaval_42,
                popuplayertitle: 'Carga Offshore e Reparo Naval',
                interactive: true,
                title: '<img src="styles/legend/CargaOffshoreeReparoNaval_42.png" /> Carga Offshore e Reparo Naval'
            });
var format_FluidosdePerfurao_43 = new ol.format.GeoJSON();
var features_FluidosdePerfurao_43 = format_FluidosdePerfurao_43.readFeatures(json_FluidosdePerfurao_43, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_FluidosdePerfurao_43 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FluidosdePerfurao_43.addFeatures(features_FluidosdePerfurao_43);
var lyr_FluidosdePerfurao_43 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FluidosdePerfurao_43, 
                style: style_FluidosdePerfurao_43,
                popuplayertitle: 'Fluidos de Perfuração',
                interactive: true,
                title: '<img src="styles/legend/FluidosdePerfurao_43.png" /> Fluidos de Perfuração'
            });
var format_CargaGeraleOffshore_44 = new ol.format.GeoJSON();
var features_CargaGeraleOffshore_44 = format_CargaGeraleOffshore_44.readFeatures(json_CargaGeraleOffshore_44, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_CargaGeraleOffshore_44 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CargaGeraleOffshore_44.addFeatures(features_CargaGeraleOffshore_44);
var lyr_CargaGeraleOffshore_44 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CargaGeraleOffshore_44, 
                style: style_CargaGeraleOffshore_44,
                popuplayertitle: 'Carga Geral e Offshore',
                interactive: true,
                title: '<img src="styles/legend/CargaGeraleOffshore_44.png" /> Carga Geral e Offshore'
            });
var format_GranisSlidoseCargaGeral_45 = new ol.format.GeoJSON();
var features_GranisSlidoseCargaGeral_45 = format_GranisSlidoseCargaGeral_45.readFeatures(json_GranisSlidoseCargaGeral_45, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_GranisSlidoseCargaGeral_45 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GranisSlidoseCargaGeral_45.addFeatures(features_GranisSlidoseCargaGeral_45);
var lyr_GranisSlidoseCargaGeral_45 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GranisSlidoseCargaGeral_45, 
                style: style_GranisSlidoseCargaGeral_45,
                popuplayertitle: 'Granéis Sólidos e Carga Geral',
                interactive: true,
                title: '<img src="styles/legend/GranisSlidoseCargaGeral_45.png" /> Granéis Sólidos e Carga Geral'
            });
var format_CargaOffshoreeReparoNaval_46 = new ol.format.GeoJSON();
var features_CargaOffshoreeReparoNaval_46 = format_CargaOffshoreeReparoNaval_46.readFeatures(json_CargaOffshoreeReparoNaval_46, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_CargaOffshoreeReparoNaval_46 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CargaOffshoreeReparoNaval_46.addFeatures(features_CargaOffshoreeReparoNaval_46);
var lyr_CargaOffshoreeReparoNaval_46 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CargaOffshoreeReparoNaval_46, 
                style: style_CargaOffshoreeReparoNaval_46,
                popuplayertitle: 'Carga Offshore e Reparo Naval',
                interactive: true,
                title: '<img src="styles/legend/CargaOffshoreeReparoNaval_46.png" /> Carga Offshore e Reparo Naval'
            });
var format_reasAfetassOperaesPorturiasLongoPrazo_47 = new ol.format.GeoJSON();
var features_reasAfetassOperaesPorturiasLongoPrazo_47 = format_reasAfetassOperaesPorturiasLongoPrazo_47.readFeatures(json_reasAfetassOperaesPorturiasLongoPrazo_47, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_reasAfetassOperaesPorturiasLongoPrazo_47 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reasAfetassOperaesPorturiasLongoPrazo_47.addFeatures(features_reasAfetassOperaesPorturiasLongoPrazo_47);
var lyr_reasAfetassOperaesPorturiasLongoPrazo_47 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reasAfetassOperaesPorturiasLongoPrazo_47, 
                style: style_reasAfetassOperaesPorturiasLongoPrazo_47,
                popuplayertitle: 'Áreas Afetas às Operações Portuárias - Longo Prazo ',
                interactive: true,
                title: '<img src="styles/legend/reasAfetassOperaesPorturiasLongoPrazo_47.png" /> Áreas Afetas às Operações Portuárias - Longo Prazo '
            });
var format_reasAfetassOperaesPorturiasMdioPrazo_48 = new ol.format.GeoJSON();
var features_reasAfetassOperaesPorturiasMdioPrazo_48 = format_reasAfetassOperaesPorturiasMdioPrazo_48.readFeatures(json_reasAfetassOperaesPorturiasMdioPrazo_48, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_reasAfetassOperaesPorturiasMdioPrazo_48 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reasAfetassOperaesPorturiasMdioPrazo_48.addFeatures(features_reasAfetassOperaesPorturiasMdioPrazo_48);
var lyr_reasAfetassOperaesPorturiasMdioPrazo_48 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reasAfetassOperaesPorturiasMdioPrazo_48, 
                style: style_reasAfetassOperaesPorturiasMdioPrazo_48,
                popuplayertitle: 'Áreas Afetas às Operações Portuárias - Médio Prazo ',
                interactive: true,
                title: '<img src="styles/legend/reasAfetassOperaesPorturiasMdioPrazo_48.png" /> Áreas Afetas às Operações Portuárias - Médio Prazo '
            });
var format_reasAfetassOperaesPorturiasCurtoPrazo_49 = new ol.format.GeoJSON();
var features_reasAfetassOperaesPorturiasCurtoPrazo_49 = format_reasAfetassOperaesPorturiasCurtoPrazo_49.readFeatures(json_reasAfetassOperaesPorturiasCurtoPrazo_49, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_reasAfetassOperaesPorturiasCurtoPrazo_49 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reasAfetassOperaesPorturiasCurtoPrazo_49.addFeatures(features_reasAfetassOperaesPorturiasCurtoPrazo_49);
var lyr_reasAfetassOperaesPorturiasCurtoPrazo_49 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reasAfetassOperaesPorturiasCurtoPrazo_49, 
                style: style_reasAfetassOperaesPorturiasCurtoPrazo_49,
                popuplayertitle: 'Áreas Afetas às Operações Portuárias - Curto Prazo ',
                interactive: true,
                title: '<img src="styles/legend/reasAfetassOperaesPorturiasCurtoPrazo_49.png" /> Áreas Afetas às Operações Portuárias - Curto Prazo '
            });
var format_reasAfetassOperaesPorturiasSituaoAtual_50 = new ol.format.GeoJSON();
var features_reasAfetassOperaesPorturiasSituaoAtual_50 = format_reasAfetassOperaesPorturiasSituaoAtual_50.readFeatures(json_reasAfetassOperaesPorturiasSituaoAtual_50, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_reasAfetassOperaesPorturiasSituaoAtual_50 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reasAfetassOperaesPorturiasSituaoAtual_50.addFeatures(features_reasAfetassOperaesPorturiasSituaoAtual_50);
var lyr_reasAfetassOperaesPorturiasSituaoAtual_50 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reasAfetassOperaesPorturiasSituaoAtual_50, 
                style: style_reasAfetassOperaesPorturiasSituaoAtual_50,
                popuplayertitle: 'Áreas Afetas às Operações Portuárias - Situação Atual ',
                interactive: true,
                title: '<img src="styles/legend/reasAfetassOperaesPorturiasSituaoAtual_50.png" /> Áreas Afetas às Operações Portuárias - Situação Atual '
            });
var format_PoligonaldareadoPortoOrganizadodeNiteri_51 = new ol.format.GeoJSON();
var features_PoligonaldareadoPortoOrganizadodeNiteri_51 = format_PoligonaldareadoPortoOrganizadodeNiteri_51.readFeatures(json_PoligonaldareadoPortoOrganizadodeNiteri_51, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_PoligonaldareadoPortoOrganizadodeNiteri_51 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PoligonaldareadoPortoOrganizadodeNiteri_51.addFeatures(features_PoligonaldareadoPortoOrganizadodeNiteri_51);
var lyr_PoligonaldareadoPortoOrganizadodeNiteri_51 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PoligonaldareadoPortoOrganizadodeNiteri_51, 
                style: style_PoligonaldareadoPortoOrganizadodeNiteri_51,
                popuplayertitle: 'Poligonal da Área do Porto Organizado de Niterói',
                interactive: true,
                title: '<img src="styles/legend/PoligonaldareadoPortoOrganizadodeNiteri_51.png" /> Poligonal da Área do Porto Organizado de Niterói'
            });
var group_PoligonaldareadoPortoOrganizado = new ol.layer.Group({
                                layers: [lyr_PoligonaldareadoPortoOrganizadodeNiteri_51,],
                                fold: 'open',
                                title: 'Poligonal da Área do Porto Organizado '});
var group_reasAfetassOperaesPorturias = new ol.layer.Group({
                                layers: [lyr_reasAfetassOperaesPorturiasLongoPrazo_47,lyr_reasAfetassOperaesPorturiasMdioPrazo_48,lyr_reasAfetassOperaesPorturiasCurtoPrazo_49,lyr_reasAfetassOperaesPorturiasSituaoAtual_50,],
                                fold: 'open',
                                title: 'Áreas Afetas às Operações Portuárias '});
var group_reasAfetassOperaesPorturiasporPerfildeCargaSituaoAtual = new ol.layer.Group({
                                layers: [lyr_FluidosdePerfurao_43,lyr_CargaGeraleOffshore_44,lyr_GranisSlidoseCargaGeral_45,lyr_CargaOffshoreeReparoNaval_46,],
                                fold: 'open',
                                title: 'Áreas Afetas às Operações Portuárias por Perfil de Carga - Situação Atual '});
var group_reasAfetassOperaesPorturiasporPerfildeCargaCurtoPrazo = new ol.layer.Group({
                                layers: [lyr_FluidosdePerfurao_39,lyr_CargaGeraleOffshore_40,lyr_GranisSlidoseCargaGeral_41,lyr_CargaOffshoreeReparoNaval_42,],
                                fold: 'open',
                                title: 'Áreas Afetas às Operações Portuárias por Perfil de Carga - Curto Prazo'});
var group_reasAfetassOperaesPorturiasporPerfildeCargaMdioPrazo = new ol.layer.Group({
                                layers: [lyr_FluidosdePerfurao_35,lyr_CargaGeraleOffshore_36,lyr_GranisSlidoseCargaGeral_37,lyr_CargaOffshoreeReparoNaval_38,],
                                fold: 'open',
                                title: 'Áreas Afetas às Operações Portuárias por Perfil de Carga - Médio Prazo'});
var group_reasAfetassOperaesPorturiasporPerfildeCargaLongoPrazo = new ol.layer.Group({
                                layers: [lyr_FluidosdePerfurao_31,lyr_CargaGeraleOffshore_32,lyr_GranisSlidoseCargaGeral_33,lyr_CargaOffshoreeReparoNaval_34,],
                                fold: 'open',
                                title: 'Áreas Afetas às Operações Portuárias por Perfil de Carga - Longo Prazo'});
var group_reasAfetassOperaesPorturiasArrendadas = new ol.layer.Group({
                                layers: [lyr_reasAfetassOperaesPorturiasArrendadas_30,],
                                fold: 'open',
                                title: 'Áreas Afetas às Operações Portuárias Arrendadas '});
var group_reasAfetassOperaesPorturiasDisponveisparaArrendamento = new ol.layer.Group({
                                layers: [lyr_reasAfetassOperaesPorturiasDisponveisparaArrendamentoLongoPrazo_27,lyr_reasAfetassOperaesPorturiasDisponveisparaArrendamentoMdioPrazo_28,lyr_reasAfetassOperaesPorturiasDisponveisparaArrendamentoCurtoPrazo_29,],
                                fold: 'open',
                                title: 'Áreas Afetas às Operações Portuárias Disponíveis para Arrendamento '});
var group_Armazenagem = new ol.layer.Group({
                                layers: [lyr_ArmazenagemLongoPrazo_23,lyr_ArmazenagemMdioPrazo_24,lyr_ArmazenagemCurtoPrazo_25,lyr_ArmazenagemSituaoAtual_26,],
                                fold: 'open',
                                title: 'Armazenagem '});
var group_Acostagem = new ol.layer.Group({
                                layers: [lyr_AcostagemLongoPrazo_19,lyr_AcostagemMdioPrazo_20,lyr_AcostagemCurtoPrazo_21,lyr_AcostagemSituaoAtual_22,],
                                fold: 'open',
                                title: 'Acostagem '});
var group_reaseInstalaesAlfandegadas = new ol.layer.Group({
                                layers: [lyr_reaseInstalaesAlfandegadas_18,],
                                fold: 'open',
                                title: 'Áreas e Instalações Alfandegadas '});
var group_AcessosRodoviriosExternos = new ol.layer.Group({
                                layers: [lyr_AcessosRodoviriosExternos_17,],
                                fold: 'open',
                                title: 'Acessos Rodoviários Externos '});
var group_AcessosRodoviriosInternos = new ol.layer.Group({
                                layers: [lyr_AcessosRodoviriosInternosLongoPrazo_13,lyr_AcessosRodoviriosInternosMdioPrazo_14,lyr_AcessosRodoviriosInternosCurtoPrazo_15,lyr_AcessosRodoviriosInternosSituaoAtual_16,],
                                fold: 'open',
                                title: 'Acessos Rodoviários Internos '});
var group_CanaisdeAcesso = new ol.layer.Group({
                                layers: [lyr_CanaisdeAcessoLongoPrazo_9,lyr_CanaisdeAcessoMdioPrazo_10,lyr_CanaisdeAcessoCurtoPrazo_11,lyr_CanaisdeAcessoSituaoAtual_12,],
                                fold: 'open',
                                title: 'Canais de Acesso '});
var group_BaciasdeEvoluo = new ol.layer.Group({
                                layers: [lyr_BaciasdeEvoluoLongoPrazo_5,lyr_BaciasdeEvoluoMdioPrazo_6,lyr_BaciasdeEvoluoCurtoPrazo_7,lyr_BaciasdeEvoluoSituaoAtual_8,],
                                fold: 'open',
                                title: 'Bacias de Evolução '});
var group_Fundeadouros = new ol.layer.Group({
                                layers: [lyr_FundeadourosLongoPrazo_1,lyr_FundeadourosMdioPrazo_2,lyr_FundeadourosCurtoPrazo_3,lyr_FundeadourosSituaoAtual_4,],
                                fold: 'open',
                                title: 'Fundeadouros '});

lyr_GoogleSatellite_0.setVisible(true);lyr_FundeadourosLongoPrazo_1.setVisible(false);lyr_FundeadourosMdioPrazo_2.setVisible(false);lyr_FundeadourosCurtoPrazo_3.setVisible(false);lyr_FundeadourosSituaoAtual_4.setVisible(false);lyr_BaciasdeEvoluoLongoPrazo_5.setVisible(false);lyr_BaciasdeEvoluoMdioPrazo_6.setVisible(false);lyr_BaciasdeEvoluoCurtoPrazo_7.setVisible(false);lyr_BaciasdeEvoluoSituaoAtual_8.setVisible(false);lyr_CanaisdeAcessoLongoPrazo_9.setVisible(false);lyr_CanaisdeAcessoMdioPrazo_10.setVisible(false);lyr_CanaisdeAcessoCurtoPrazo_11.setVisible(false);lyr_CanaisdeAcessoSituaoAtual_12.setVisible(false);lyr_AcessosRodoviriosInternosLongoPrazo_13.setVisible(false);lyr_AcessosRodoviriosInternosMdioPrazo_14.setVisible(false);lyr_AcessosRodoviriosInternosCurtoPrazo_15.setVisible(false);lyr_AcessosRodoviriosInternosSituaoAtual_16.setVisible(false);lyr_AcessosRodoviriosExternos_17.setVisible(false);lyr_reaseInstalaesAlfandegadas_18.setVisible(false);lyr_AcostagemLongoPrazo_19.setVisible(false);lyr_AcostagemMdioPrazo_20.setVisible(false);lyr_AcostagemCurtoPrazo_21.setVisible(false);lyr_AcostagemSituaoAtual_22.setVisible(false);lyr_ArmazenagemLongoPrazo_23.setVisible(false);lyr_ArmazenagemMdioPrazo_24.setVisible(false);lyr_ArmazenagemCurtoPrazo_25.setVisible(false);lyr_ArmazenagemSituaoAtual_26.setVisible(false);lyr_reasAfetassOperaesPorturiasDisponveisparaArrendamentoLongoPrazo_27.setVisible(false);lyr_reasAfetassOperaesPorturiasDisponveisparaArrendamentoMdioPrazo_28.setVisible(false);lyr_reasAfetassOperaesPorturiasDisponveisparaArrendamentoCurtoPrazo_29.setVisible(false);lyr_reasAfetassOperaesPorturiasArrendadas_30.setVisible(false);lyr_FluidosdePerfurao_31.setVisible(false);lyr_CargaGeraleOffshore_32.setVisible(false);lyr_GranisSlidoseCargaGeral_33.setVisible(false);lyr_CargaOffshoreeReparoNaval_34.setVisible(false);lyr_FluidosdePerfurao_35.setVisible(false);lyr_CargaGeraleOffshore_36.setVisible(false);lyr_GranisSlidoseCargaGeral_37.setVisible(false);lyr_CargaOffshoreeReparoNaval_38.setVisible(false);lyr_FluidosdePerfurao_39.setVisible(false);lyr_CargaGeraleOffshore_40.setVisible(false);lyr_GranisSlidoseCargaGeral_41.setVisible(false);lyr_CargaOffshoreeReparoNaval_42.setVisible(false);lyr_FluidosdePerfurao_43.setVisible(false);lyr_CargaGeraleOffshore_44.setVisible(false);lyr_GranisSlidoseCargaGeral_45.setVisible(false);lyr_CargaOffshoreeReparoNaval_46.setVisible(false);lyr_reasAfetassOperaesPorturiasLongoPrazo_47.setVisible(false);lyr_reasAfetassOperaesPorturiasMdioPrazo_48.setVisible(false);lyr_reasAfetassOperaesPorturiasCurtoPrazo_49.setVisible(false);lyr_reasAfetassOperaesPorturiasSituaoAtual_50.setVisible(false);lyr_PoligonaldareadoPortoOrganizadodeNiteri_51.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,group_Fundeadouros,group_BaciasdeEvoluo,group_CanaisdeAcesso,group_AcessosRodoviriosInternos,group_AcessosRodoviriosExternos,group_reaseInstalaesAlfandegadas,group_Acostagem,group_Armazenagem,group_reasAfetassOperaesPorturiasDisponveisparaArrendamento,group_reasAfetassOperaesPorturiasArrendadas,group_reasAfetassOperaesPorturiasporPerfildeCargaLongoPrazo,group_reasAfetassOperaesPorturiasporPerfildeCargaMdioPrazo,group_reasAfetassOperaesPorturiasporPerfildeCargaCurtoPrazo,group_reasAfetassOperaesPorturiasporPerfildeCargaSituaoAtual,group_reasAfetassOperaesPorturias,group_PoligonaldareadoPortoOrganizado];
lyr_FundeadourosLongoPrazo_1.set('fieldAliases', {'Funcao': 'Função', 'Calado': 'Calado (m) ', 'N. Ident.': 'Número de Identificação ', });
lyr_FundeadourosMdioPrazo_2.set('fieldAliases', {'Funcao': 'Função', 'Calado': 'Calado (m) ', 'N. Ident.': 'Número de Identificação ', });
lyr_FundeadourosCurtoPrazo_3.set('fieldAliases', {'Funcao': 'Função', 'Calado': 'Calado (m) ', 'N. Ident.': 'Número de Identificação ', });
lyr_FundeadourosSituaoAtual_4.set('fieldAliases', {'Funcao': 'Função', 'Calado': 'Calado (m)', 'N. Ident.': 'Número de Identificação ', });
lyr_BaciasdeEvoluoLongoPrazo_5.set('fieldAliases', {'Calado_m': 'Calado (m) ', 'Função': 'Função', });
lyr_BaciasdeEvoluoMdioPrazo_6.set('fieldAliases', {'Calado_m': 'Calado (m) ', 'Função': 'Função', });
lyr_BaciasdeEvoluoCurtoPrazo_7.set('fieldAliases', {'Calado_m': 'Calado (m) ', 'Função': 'Função', });
lyr_BaciasdeEvoluoSituaoAtual_8.set('fieldAliases', {'Calado_m': 'Calado (m) ', 'Função': 'Função ', });
lyr_CanaisdeAcessoLongoPrazo_9.set('fieldAliases', {'Nome': 'Trecho ', 'Calado': 'Calado (m) ', });
lyr_CanaisdeAcessoMdioPrazo_10.set('fieldAliases', {'Nome': 'Trecho ', 'Calado': 'Calado (m) ', });
lyr_CanaisdeAcessoCurtoPrazo_11.set('fieldAliases', {'Nome': 'Trecho ', 'Calado': 'Calado (m) ', });
lyr_CanaisdeAcessoSituaoAtual_12.set('fieldAliases', {'Nome': 'Trecho ', 'Calado': 'Calado (m) ', });
lyr_AcessosRodoviriosInternosLongoPrazo_13.set('fieldAliases', {'Ident.': 'Identificação ', 'Nº Pistas': 'Número de Pistas de Rolamento ', });
lyr_AcessosRodoviriosInternosMdioPrazo_14.set('fieldAliases', {'Ident.': 'Identificação ', 'Nº Pistas': 'Número de Pistas de Rolamento ', });
lyr_AcessosRodoviriosInternosCurtoPrazo_15.set('fieldAliases', {'Ident.': 'Identificação ', 'Nº Pistas': 'Número de Pistas de Rolamento ', });
lyr_AcessosRodoviriosInternosSituaoAtual_16.set('fieldAliases', {'Ident.': 'Identificação ', 'Nº Pistas': 'Número de Pistas de Rolamento ', });
lyr_AcessosRodoviriosExternos_17.set('fieldAliases', {'Nome': 'Nome', 'Sigla': 'Sigla', 'Jurisdicao': 'Jurisdição ', });
lyr_reaseInstalaesAlfandegadas_18.set('fieldAliases', {'Ins. Legal': 'Instrumento Legal ', });
lyr_AcostagemLongoPrazo_19.set('fieldAliases', {'Id. Cais': 'Identificador do Cais ', 'Id. Berço': 'Identificador do Berço ', 'C. Const.': 'Características Construtivas ', 'Comp.': 'Comprimento (m) ', 'Profund.': 'Profundidade (m) ', 'Calado': 'Calado (m) ', 'Per. Carga': 'Perfil de Carga ', });
lyr_AcostagemMdioPrazo_20.set('fieldAliases', {'Id. Cais': 'Identificador do Cais ', 'Id. Berço': 'Identificador do Berço ', 'C. Const.': 'Características Construtivas ', 'Comp.': 'Comprimento (m) ', 'Profund.': 'Profundidade (m) ', 'Calado': 'Calado (m) ', 'Per. Carga': 'Perfil de Carga ', });
lyr_AcostagemCurtoPrazo_21.set('fieldAliases', {'Id. Cais': 'Identificador do Cais ', 'Id. Berço': 'Identificador do Berço ', 'C. Const.': 'Características Construtivas ', 'Comp.': 'Comprimento (m) ', 'Profund.': 'Profundidade (m) ', 'Calado': 'Calado (m) ', 'Per. Carga': 'Perfil de Carga ', });
lyr_AcostagemSituaoAtual_22.set('fieldAliases', {'Id. Cais': 'Identificador do Cais ', 'Id. Berço': 'Identificador do Berço ', 'C. Const.': 'Características Construtivas ', 'Comp.': 'Comprimento (m) ', 'Profund.': 'Profundidade (m) ', 'Calado': 'Calado (m) ', 'Per. Carga': 'Perfil de Carga ', });
lyr_ArmazenagemLongoPrazo_23.set('fieldAliases', {'T. Instal.': 'Tipo da Instalação ', 'Capacidade': 'Capacidade', 'Área': 'Área (m²) ', 'Volulme': 'Volulme', });
lyr_ArmazenagemMdioPrazo_24.set('fieldAliases', {'T. Instal.': 'Tipo da Instalação ', 'Capacidade': 'Capacidade', 'Área': 'Área (m²) ', 'Volulme': 'Volulme', });
lyr_ArmazenagemCurtoPrazo_25.set('fieldAliases', {'T. Instal.': 'Tipo da Instalação ', 'Capacidade': 'Capacidade', 'Área': 'Área (m²) ', 'Volulme': 'Volulme', });
lyr_ArmazenagemSituaoAtual_26.set('fieldAliases', {'T. Instal.': 'Tipo da Instalação ', 'Capacidade': 'Capacidade', 'Área': 'Área (m²) ', 'Volulme': 'Volulme', });
lyr_reasAfetassOperaesPorturiasDisponveisparaArrendamentoLongoPrazo_27.set('fieldAliases', {'Perfil': 'Perfil de Carga ', 'Área': 'Área (m²) ', 'Nome': 'Nome', });
lyr_reasAfetassOperaesPorturiasDisponveisparaArrendamentoMdioPrazo_28.set('fieldAliases', {'Perfil': 'Perfil de Carga ', 'Área': 'Área (m²) ', 'Nome': 'Nome', });
lyr_reasAfetassOperaesPorturiasDisponveisparaArrendamentoCurtoPrazo_29.set('fieldAliases', {'Perfil': 'Perfil de Carga ', 'Área': 'Área (m²) ', 'Nome': 'Nome', });
lyr_reasAfetassOperaesPorturiasArrendadas_30.set('fieldAliases', {'Arrend.': 'Arrendatário ', 'Nº Cont.': 'Número do Contrato', 'D.Inicio': 'Data Início do Contrato ', 'D. Term.': 'Data do Término do Contrato ', 'P. Prorrog': 'Possibilidade de Prorrogação ', 'Perfil': 'Perfil de Carga ', 'Área': 'Área (m²) ', });
lyr_FluidosdePerfurao_31.set('fieldAliases', {'Perfil de': 'Perfil de Carga ', 'Área (m²': 'Área (m²) ', 'Tipo de In': 'Tipo de Instalação ', 'Nome': 'Nome', });
lyr_CargaGeraleOffshore_32.set('fieldAliases', {'Perfil de': 'Perfil de Carga ', 'Área (m²': 'Área (m²) ', 'Tipo de In': 'Tipo de Instalação ', 'Nome': 'Nome', });
lyr_GranisSlidoseCargaGeral_33.set('fieldAliases', {'Perfil de': 'Perfil de Carga ', 'Área (m²': 'Área (m²) ', 'Tipo de In': 'Tipo de Instalação ', 'Nome': 'Nome', });
lyr_CargaOffshoreeReparoNaval_34.set('fieldAliases', {'Perfil de': 'Perfil de Carga ', 'Área (m²': 'Área (m²) ', 'Tipo de In': 'Tipo de Instalação ', 'Nome': 'Nome', });
lyr_FluidosdePerfurao_35.set('fieldAliases', {'Perfil de': 'Perfil de Carga ', 'Área (m²': 'Área (m²) ', 'Tipo de In': 'Tipo de Instalação ', 'Nome': 'Nome', });
lyr_CargaGeraleOffshore_36.set('fieldAliases', {'Perfil de': 'Perfil de Carga ', 'Área (m²': 'Área (m²) ', 'Tipo de In': 'Tipo de Instalação ', 'Nome': 'Nome', });
lyr_GranisSlidoseCargaGeral_37.set('fieldAliases', {'Perfil de': 'Perfil de Carga ', 'Área (m²': 'Área (m²) ', 'Tipo de In': 'Tipo de Instalação ', 'Nome': 'Nome', });
lyr_CargaOffshoreeReparoNaval_38.set('fieldAliases', {'Perfil de': 'Perfil de Carga ', 'Área (m²': 'Área (m²) ', 'Tipo de In': 'Tipo de Instalação ', 'Nome': 'Nome', });
lyr_FluidosdePerfurao_39.set('fieldAliases', {'Perfil de': 'Perfil de Carga ', 'Área (m²': 'Área (m²) ', 'Tipo de In': 'Tipo de Instalação ', 'Nome': 'Nome', });
lyr_CargaGeraleOffshore_40.set('fieldAliases', {'Perfil de': 'Perfil de Carga ', 'Área (m²': 'Área (m²) ', 'Tipo de In': 'Tipo de Instalação ', 'Nome': 'Nome', });
lyr_GranisSlidoseCargaGeral_41.set('fieldAliases', {'Perfil de': 'Perfil de Carga ', 'Área (m²': 'Área (m²) ', 'Tipo de In': 'Tipo de Instalação ', 'Nome': 'Nome', });
lyr_CargaOffshoreeReparoNaval_42.set('fieldAliases', {'Perfil de': 'Perfil de Carga ', 'Área (m²': 'Área (m²) ', 'Tipo de In': 'Tipo de Instalação ', 'Nome': 'Nome', });
lyr_FluidosdePerfurao_43.set('fieldAliases', {'Perfil de': 'Perfil de Carga ', 'Área (m²': 'Área (m²) ', 'Tipo de In': 'Tipo de Instalação ', 'Nome': 'Nome', });
lyr_CargaGeraleOffshore_44.set('fieldAliases', {'Perfil de': 'Perfil de Carga ', 'Área (m²': 'Área (m²) ', 'Tipo de In': 'Tipo de Instalação ', 'Nome': 'Nome', });
lyr_GranisSlidoseCargaGeral_45.set('fieldAliases', {'Perfil de': 'Perfil de Carga ', 'Área (m²': 'Área (m²) ', 'Tipo de In': 'Tipo de Instalação ', 'Nome': 'Nome', });
lyr_CargaOffshoreeReparoNaval_46.set('fieldAliases', {'Perfil de': 'Perfil de Carga ', 'Área (m²': 'Área (m²) ', 'Tipo de In': 'Tipo de Instalação ', 'Nome': 'Nome', });
lyr_reasAfetassOperaesPorturiasLongoPrazo_47.set('fieldAliases', {'Perfil': 'Perfil de Carga ', 'Área': 'Área (m²) ', 'T. Instal.': 'Tipo de Instalação ', 'Nome': 'Nome', });
lyr_reasAfetassOperaesPorturiasMdioPrazo_48.set('fieldAliases', {'Perfil': 'Perfil de Carga ', 'Área': 'Área (m²) ', 'T. Instal.': 'Tipo de Instalação ', 'Nome': 'Nome', });
lyr_reasAfetassOperaesPorturiasCurtoPrazo_49.set('fieldAliases', {'Perfil': 'Perfil de Carga ', 'Área': 'Área (m²) ', 'T. Instal.': 'Tipo de Instalação ', 'Nome': 'Nome', });
lyr_reasAfetassOperaesPorturiasSituaoAtual_50.set('fieldAliases', {'Perfil': 'Perfil de Carga ', 'Área': 'Área (m²) ', 'T. Instal.': 'Tipo de Instalação ', 'Nome': 'Nome', });
lyr_PoligonaldareadoPortoOrganizadodeNiteri_51.set('fieldAliases', {'Name': 'Anexo ', 'Ins': 'Instrumento Legal ', });
lyr_FundeadourosLongoPrazo_1.set('fieldImages', {'Funcao': 'TextEdit', 'Calado': 'TextEdit', 'N. Ident.': 'TextEdit', });
lyr_FundeadourosMdioPrazo_2.set('fieldImages', {'Funcao': 'TextEdit', 'Calado': 'TextEdit', 'N. Ident.': 'TextEdit', });
lyr_FundeadourosCurtoPrazo_3.set('fieldImages', {'Funcao': 'TextEdit', 'Calado': 'TextEdit', 'N. Ident.': 'TextEdit', });
lyr_FundeadourosSituaoAtual_4.set('fieldImages', {'Funcao': 'TextEdit', 'Calado': 'TextEdit', 'N. Ident.': 'TextEdit', });
lyr_BaciasdeEvoluoLongoPrazo_5.set('fieldImages', {'Calado_m': 'TextEdit', 'Função': 'TextEdit', });
lyr_BaciasdeEvoluoMdioPrazo_6.set('fieldImages', {'Calado_m': 'TextEdit', 'Função': 'TextEdit', });
lyr_BaciasdeEvoluoCurtoPrazo_7.set('fieldImages', {'Calado_m': 'TextEdit', 'Função': 'TextEdit', });
lyr_BaciasdeEvoluoSituaoAtual_8.set('fieldImages', {'Calado_m': 'TextEdit', 'Função': 'TextEdit', });
lyr_CanaisdeAcessoLongoPrazo_9.set('fieldImages', {'Nome': 'TextEdit', 'Calado': 'TextEdit', });
lyr_CanaisdeAcessoMdioPrazo_10.set('fieldImages', {'Nome': 'TextEdit', 'Calado': 'TextEdit', });
lyr_CanaisdeAcessoCurtoPrazo_11.set('fieldImages', {'Nome': 'TextEdit', 'Calado': 'TextEdit', });
lyr_CanaisdeAcessoSituaoAtual_12.set('fieldImages', {'Nome': 'TextEdit', 'Calado': 'TextEdit', });
lyr_AcessosRodoviriosInternosLongoPrazo_13.set('fieldImages', {'Ident.': 'TextEdit', 'Nº Pistas': 'TextEdit', });
lyr_AcessosRodoviriosInternosMdioPrazo_14.set('fieldImages', {'Ident.': 'TextEdit', 'Nº Pistas': 'TextEdit', });
lyr_AcessosRodoviriosInternosCurtoPrazo_15.set('fieldImages', {'Ident.': 'TextEdit', 'Nº Pistas': 'TextEdit', });
lyr_AcessosRodoviriosInternosSituaoAtual_16.set('fieldImages', {'Ident.': 'TextEdit', 'Nº Pistas': 'TextEdit', });
lyr_AcessosRodoviriosExternos_17.set('fieldImages', {'Nome': 'TextEdit', 'Sigla': 'TextEdit', 'Jurisdicao': 'TextEdit', });
lyr_reaseInstalaesAlfandegadas_18.set('fieldImages', {'Ins. Legal': 'TextEdit', });
lyr_AcostagemLongoPrazo_19.set('fieldImages', {'Id. Cais': 'TextEdit', 'Id. Berço': 'TextEdit', 'C. Const.': 'TextEdit', 'Comp.': 'TextEdit', 'Profund.': 'TextEdit', 'Calado': 'TextEdit', 'Per. Carga': 'TextEdit', });
lyr_AcostagemMdioPrazo_20.set('fieldImages', {'Id. Cais': 'TextEdit', 'Id. Berço': 'TextEdit', 'C. Const.': 'TextEdit', 'Comp.': 'TextEdit', 'Profund.': 'TextEdit', 'Calado': 'TextEdit', 'Per. Carga': 'TextEdit', });
lyr_AcostagemCurtoPrazo_21.set('fieldImages', {'Id. Cais': 'TextEdit', 'Id. Berço': 'TextEdit', 'C. Const.': 'TextEdit', 'Comp.': 'TextEdit', 'Profund.': 'TextEdit', 'Calado': 'TextEdit', 'Per. Carga': 'TextEdit', });
lyr_AcostagemSituaoAtual_22.set('fieldImages', {'Id. Cais': 'TextEdit', 'Id. Berço': 'TextEdit', 'C. Const.': 'TextEdit', 'Comp.': 'TextEdit', 'Profund.': 'TextEdit', 'Calado': 'TextEdit', 'Per. Carga': 'TextEdit', });
lyr_ArmazenagemLongoPrazo_23.set('fieldImages', {'T. Instal.': 'TextEdit', 'Capacidade': 'TextEdit', 'Área': 'TextEdit', 'Volulme': '', });
lyr_ArmazenagemMdioPrazo_24.set('fieldImages', {'T. Instal.': 'TextEdit', 'Capacidade': 'TextEdit', 'Área': 'TextEdit', 'Volulme': '', });
lyr_ArmazenagemCurtoPrazo_25.set('fieldImages', {'T. Instal.': 'TextEdit', 'Capacidade': 'TextEdit', 'Área': 'TextEdit', 'Volulme': '', });
lyr_ArmazenagemSituaoAtual_26.set('fieldImages', {'T. Instal.': 'TextEdit', 'Capacidade': 'TextEdit', 'Área': 'TextEdit', 'Volulme': '', });
lyr_reasAfetassOperaesPorturiasDisponveisparaArrendamentoLongoPrazo_27.set('fieldImages', {'Perfil': 'TextEdit', 'Área': 'TextEdit', 'Nome': 'TextEdit', });
lyr_reasAfetassOperaesPorturiasDisponveisparaArrendamentoMdioPrazo_28.set('fieldImages', {'Perfil': 'TextEdit', 'Área': 'TextEdit', 'Nome': 'TextEdit', });
lyr_reasAfetassOperaesPorturiasDisponveisparaArrendamentoCurtoPrazo_29.set('fieldImages', {'Perfil': 'TextEdit', 'Área': 'TextEdit', 'Nome': 'TextEdit', });
lyr_reasAfetassOperaesPorturiasArrendadas_30.set('fieldImages', {'Arrend.': 'TextEdit', 'Nº Cont.': 'TextEdit', 'D.Inicio': 'DateTime', 'D. Term.': 'DateTime', 'P. Prorrog': 'TextEdit', 'Perfil': 'TextEdit', 'Área': 'TextEdit', });
lyr_FluidosdePerfurao_31.set('fieldImages', {'Perfil de': 'TextEdit', 'Área (m²': 'TextEdit', 'Tipo de In': 'TextEdit', 'Nome': 'TextEdit', });
lyr_CargaGeraleOffshore_32.set('fieldImages', {'Perfil de': 'TextEdit', 'Área (m²': 'TextEdit', 'Tipo de In': 'TextEdit', 'Nome': 'TextEdit', });
lyr_GranisSlidoseCargaGeral_33.set('fieldImages', {'Perfil de': 'TextEdit', 'Área (m²': 'TextEdit', 'Tipo de In': 'TextEdit', 'Nome': 'TextEdit', });
lyr_CargaOffshoreeReparoNaval_34.set('fieldImages', {'Perfil de': 'TextEdit', 'Área (m²': 'TextEdit', 'Tipo de In': 'TextEdit', 'Nome': 'TextEdit', });
lyr_FluidosdePerfurao_35.set('fieldImages', {'Perfil de': 'TextEdit', 'Área (m²': 'TextEdit', 'Tipo de In': 'TextEdit', 'Nome': 'TextEdit', });
lyr_CargaGeraleOffshore_36.set('fieldImages', {'Perfil de': 'TextEdit', 'Área (m²': 'TextEdit', 'Tipo de In': 'TextEdit', 'Nome': 'TextEdit', });
lyr_GranisSlidoseCargaGeral_37.set('fieldImages', {'Perfil de': 'TextEdit', 'Área (m²': 'TextEdit', 'Tipo de In': 'TextEdit', 'Nome': 'TextEdit', });
lyr_CargaOffshoreeReparoNaval_38.set('fieldImages', {'Perfil de': 'TextEdit', 'Área (m²': 'TextEdit', 'Tipo de In': 'TextEdit', 'Nome': 'TextEdit', });
lyr_FluidosdePerfurao_39.set('fieldImages', {'Perfil de': 'TextEdit', 'Área (m²': 'TextEdit', 'Tipo de In': 'TextEdit', 'Nome': 'TextEdit', });
lyr_CargaGeraleOffshore_40.set('fieldImages', {'Perfil de': 'TextEdit', 'Área (m²': 'TextEdit', 'Tipo de In': 'TextEdit', 'Nome': 'TextEdit', });
lyr_GranisSlidoseCargaGeral_41.set('fieldImages', {'Perfil de': 'TextEdit', 'Área (m²': 'TextEdit', 'Tipo de In': 'TextEdit', 'Nome': 'TextEdit', });
lyr_CargaOffshoreeReparoNaval_42.set('fieldImages', {'Perfil de': 'TextEdit', 'Área (m²': 'TextEdit', 'Tipo de In': 'TextEdit', 'Nome': 'TextEdit', });
lyr_FluidosdePerfurao_43.set('fieldImages', {'Perfil de': 'TextEdit', 'Área (m²': 'TextEdit', 'Tipo de In': 'TextEdit', 'Nome': 'TextEdit', });
lyr_CargaGeraleOffshore_44.set('fieldImages', {'Perfil de': 'TextEdit', 'Área (m²': 'TextEdit', 'Tipo de In': 'TextEdit', 'Nome': 'TextEdit', });
lyr_GranisSlidoseCargaGeral_45.set('fieldImages', {'Perfil de': 'TextEdit', 'Área (m²': 'TextEdit', 'Tipo de In': 'TextEdit', 'Nome': 'TextEdit', });
lyr_CargaOffshoreeReparoNaval_46.set('fieldImages', {'Perfil de': 'TextEdit', 'Área (m²': 'TextEdit', 'Tipo de In': 'TextEdit', 'Nome': 'TextEdit', });
lyr_reasAfetassOperaesPorturiasLongoPrazo_47.set('fieldImages', {'Perfil': 'TextEdit', 'Área': 'TextEdit', 'T. Instal.': 'TextEdit', 'Nome': 'TextEdit', });
lyr_reasAfetassOperaesPorturiasMdioPrazo_48.set('fieldImages', {'Perfil': 'TextEdit', 'Área': 'TextEdit', 'T. Instal.': 'TextEdit', 'Nome': 'TextEdit', });
lyr_reasAfetassOperaesPorturiasCurtoPrazo_49.set('fieldImages', {'Perfil': 'TextEdit', 'Área': 'TextEdit', 'T. Instal.': 'TextEdit', 'Nome': 'TextEdit', });
lyr_reasAfetassOperaesPorturiasSituaoAtual_50.set('fieldImages', {'Perfil': 'TextEdit', 'Área': 'TextEdit', 'T. Instal.': 'TextEdit', 'Nome': 'TextEdit', });
lyr_PoligonaldareadoPortoOrganizadodeNiteri_51.set('fieldImages', {'Name': 'TextEdit', 'Ins': 'TextEdit', });
lyr_FundeadourosLongoPrazo_1.set('fieldLabels', {'Funcao': 'inline label - visible with data', 'Calado': 'inline label - visible with data', 'N. Ident.': 'inline label - visible with data', });
lyr_FundeadourosMdioPrazo_2.set('fieldLabels', {'Funcao': 'inline label - visible with data', 'Calado': 'inline label - visible with data', 'N. Ident.': 'inline label - visible with data', });
lyr_FundeadourosCurtoPrazo_3.set('fieldLabels', {'Funcao': 'inline label - visible with data', 'Calado': 'inline label - visible with data', 'N. Ident.': 'inline label - visible with data', });
lyr_FundeadourosSituaoAtual_4.set('fieldLabels', {'Funcao': 'inline label - visible with data', 'Calado': 'inline label - visible with data', 'N. Ident.': 'inline label - visible with data', });
lyr_BaciasdeEvoluoLongoPrazo_5.set('fieldLabels', {'Calado_m': 'inline label - visible with data', 'Função': 'inline label - visible with data', });
lyr_BaciasdeEvoluoMdioPrazo_6.set('fieldLabels', {'Calado_m': 'inline label - visible with data', 'Função': 'inline label - visible with data', });
lyr_BaciasdeEvoluoCurtoPrazo_7.set('fieldLabels', {'Calado_m': 'inline label - visible with data', 'Função': 'inline label - visible with data', });
lyr_BaciasdeEvoluoSituaoAtual_8.set('fieldLabels', {'Calado_m': 'inline label - visible with data', 'Função': 'inline label - visible with data', });
lyr_CanaisdeAcessoLongoPrazo_9.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Calado': 'inline label - visible with data', });
lyr_CanaisdeAcessoMdioPrazo_10.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Calado': 'inline label - visible with data', });
lyr_CanaisdeAcessoCurtoPrazo_11.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Calado': 'inline label - visible with data', });
lyr_CanaisdeAcessoSituaoAtual_12.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Calado': 'inline label - visible with data', });
lyr_AcessosRodoviriosInternosLongoPrazo_13.set('fieldLabels', {'Ident.': 'inline label - visible with data', 'Nº Pistas': 'inline label - visible with data', });
lyr_AcessosRodoviriosInternosMdioPrazo_14.set('fieldLabels', {'Ident.': 'inline label - visible with data', 'Nº Pistas': 'inline label - visible with data', });
lyr_AcessosRodoviriosInternosCurtoPrazo_15.set('fieldLabels', {'Ident.': 'inline label - visible with data', 'Nº Pistas': 'inline label - visible with data', });
lyr_AcessosRodoviriosInternosSituaoAtual_16.set('fieldLabels', {'Ident.': 'inline label - visible with data', 'Nº Pistas': 'inline label - visible with data', });
lyr_AcessosRodoviriosExternos_17.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Sigla': 'inline label - visible with data', 'Jurisdicao': 'inline label - visible with data', });
lyr_reaseInstalaesAlfandegadas_18.set('fieldLabels', {'Ins. Legal': 'inline label - visible with data', });
lyr_AcostagemLongoPrazo_19.set('fieldLabels', {'Id. Cais': 'inline label - visible with data', 'Id. Berço': 'inline label - visible with data', 'C. Const.': 'inline label - visible with data', 'Comp.': 'inline label - visible with data', 'Profund.': 'inline label - visible with data', 'Calado': 'inline label - visible with data', 'Per. Carga': 'inline label - visible with data', });
lyr_AcostagemMdioPrazo_20.set('fieldLabels', {'Id. Cais': 'inline label - visible with data', 'Id. Berço': 'inline label - visible with data', 'C. Const.': 'inline label - visible with data', 'Comp.': 'inline label - visible with data', 'Profund.': 'inline label - visible with data', 'Calado': 'inline label - visible with data', 'Per. Carga': 'inline label - visible with data', });
lyr_AcostagemCurtoPrazo_21.set('fieldLabels', {'Id. Cais': 'inline label - visible with data', 'Id. Berço': 'inline label - visible with data', 'C. Const.': 'inline label - visible with data', 'Comp.': 'inline label - visible with data', 'Profund.': 'inline label - visible with data', 'Calado': 'inline label - visible with data', 'Per. Carga': 'inline label - visible with data', });
lyr_AcostagemSituaoAtual_22.set('fieldLabels', {'Id. Cais': 'inline label - visible with data', 'Id. Berço': 'inline label - visible with data', 'C. Const.': 'inline label - visible with data', 'Comp.': 'inline label - visible with data', 'Profund.': 'inline label - visible with data', 'Calado': 'inline label - visible with data', 'Per. Carga': 'inline label - visible with data', });
lyr_ArmazenagemLongoPrazo_23.set('fieldLabels', {'T. Instal.': 'inline label - visible with data', 'Capacidade': 'inline label - visible with data', 'Área': 'inline label - visible with data', 'Volulme': 'inline label - visible with data', });
lyr_ArmazenagemMdioPrazo_24.set('fieldLabels', {'T. Instal.': 'inline label - visible with data', 'Capacidade': 'inline label - visible with data', 'Área': 'inline label - visible with data', 'Volulme': 'inline label - visible with data', });
lyr_ArmazenagemCurtoPrazo_25.set('fieldLabels', {'T. Instal.': 'inline label - visible with data', 'Capacidade': 'inline label - visible with data', 'Área': 'inline label - visible with data', 'Volulme': 'inline label - visible with data', });
lyr_ArmazenagemSituaoAtual_26.set('fieldLabels', {'T. Instal.': 'inline label - visible with data', 'Capacidade': 'inline label - visible with data', 'Área': 'inline label - visible with data', 'Volulme': 'inline label - visible with data', });
lyr_reasAfetassOperaesPorturiasDisponveisparaArrendamentoLongoPrazo_27.set('fieldLabels', {'Perfil': 'inline label - visible with data', 'Área': 'inline label - visible with data', 'Nome': 'inline label - visible with data', });
lyr_reasAfetassOperaesPorturiasDisponveisparaArrendamentoMdioPrazo_28.set('fieldLabels', {'Perfil': 'inline label - visible with data', 'Área': 'inline label - visible with data', 'Nome': 'inline label - visible with data', });
lyr_reasAfetassOperaesPorturiasDisponveisparaArrendamentoCurtoPrazo_29.set('fieldLabels', {'Perfil': 'inline label - visible with data', 'Área': 'inline label - visible with data', 'Nome': 'inline label - visible with data', });
lyr_reasAfetassOperaesPorturiasArrendadas_30.set('fieldLabels', {'Arrend.': 'inline label - visible with data', 'Nº Cont.': 'inline label - visible with data', 'D.Inicio': 'inline label - visible with data', 'D. Term.': 'inline label - visible with data', 'P. Prorrog': 'inline label - visible with data', 'Perfil': 'inline label - visible with data', 'Área': 'inline label - visible with data', });
lyr_FluidosdePerfurao_31.set('fieldLabels', {'Perfil de': 'inline label - visible with data', 'Área (m²': 'inline label - visible with data', 'Tipo de In': 'inline label - visible with data', 'Nome': 'inline label - visible with data', });
lyr_CargaGeraleOffshore_32.set('fieldLabels', {'Perfil de': 'inline label - visible with data', 'Área (m²': 'inline label - visible with data', 'Tipo de In': 'inline label - visible with data', 'Nome': 'inline label - visible with data', });
lyr_GranisSlidoseCargaGeral_33.set('fieldLabels', {'Perfil de': 'inline label - visible with data', 'Área (m²': 'inline label - visible with data', 'Tipo de In': 'inline label - visible with data', 'Nome': 'inline label - visible with data', });
lyr_CargaOffshoreeReparoNaval_34.set('fieldLabels', {'Perfil de': 'inline label - visible with data', 'Área (m²': 'inline label - visible with data', 'Tipo de In': 'inline label - visible with data', 'Nome': 'inline label - visible with data', });
lyr_FluidosdePerfurao_35.set('fieldLabels', {'Perfil de': 'inline label - visible with data', 'Área (m²': 'inline label - visible with data', 'Tipo de In': 'inline label - visible with data', 'Nome': 'inline label - visible with data', });
lyr_CargaGeraleOffshore_36.set('fieldLabels', {'Perfil de': 'inline label - visible with data', 'Área (m²': 'inline label - visible with data', 'Tipo de In': 'inline label - visible with data', 'Nome': 'inline label - visible with data', });
lyr_GranisSlidoseCargaGeral_37.set('fieldLabels', {'Perfil de': 'inline label - visible with data', 'Área (m²': 'inline label - visible with data', 'Tipo de In': 'inline label - visible with data', 'Nome': 'inline label - visible with data', });
lyr_CargaOffshoreeReparoNaval_38.set('fieldLabels', {'Perfil de': 'inline label - visible with data', 'Área (m²': 'inline label - visible with data', 'Tipo de In': 'inline label - visible with data', 'Nome': 'inline label - visible with data', });
lyr_FluidosdePerfurao_39.set('fieldLabels', {'Perfil de': 'inline label - visible with data', 'Área (m²': 'inline label - visible with data', 'Tipo de In': 'inline label - visible with data', 'Nome': 'inline label - visible with data', });
lyr_CargaGeraleOffshore_40.set('fieldLabels', {'Perfil de': 'inline label - visible with data', 'Área (m²': 'inline label - visible with data', 'Tipo de In': 'inline label - visible with data', 'Nome': 'inline label - visible with data', });
lyr_GranisSlidoseCargaGeral_41.set('fieldLabels', {'Perfil de': 'inline label - visible with data', 'Área (m²': 'inline label - visible with data', 'Tipo de In': 'inline label - visible with data', 'Nome': 'inline label - visible with data', });
lyr_CargaOffshoreeReparoNaval_42.set('fieldLabels', {'Perfil de': 'inline label - visible with data', 'Área (m²': 'inline label - visible with data', 'Tipo de In': 'inline label - visible with data', 'Nome': 'inline label - visible with data', });
lyr_FluidosdePerfurao_43.set('fieldLabels', {'Perfil de': 'inline label - visible with data', 'Área (m²': 'inline label - visible with data', 'Tipo de In': 'inline label - visible with data', 'Nome': 'inline label - visible with data', });
lyr_CargaGeraleOffshore_44.set('fieldLabels', {'Perfil de': 'inline label - visible with data', 'Área (m²': 'inline label - visible with data', 'Tipo de In': 'inline label - visible with data', 'Nome': 'inline label - visible with data', });
lyr_GranisSlidoseCargaGeral_45.set('fieldLabels', {'Perfil de': 'inline label - visible with data', 'Área (m²': 'inline label - visible with data', 'Tipo de In': 'inline label - visible with data', 'Nome': 'inline label - visible with data', });
lyr_CargaOffshoreeReparoNaval_46.set('fieldLabels', {'Perfil de': 'inline label - visible with data', 'Área (m²': 'inline label - visible with data', 'Tipo de In': 'inline label - visible with data', 'Nome': 'inline label - visible with data', });
lyr_reasAfetassOperaesPorturiasLongoPrazo_47.set('fieldLabels', {'Perfil': 'inline label - visible with data', 'Área': 'inline label - visible with data', 'T. Instal.': 'inline label - visible with data', 'Nome': 'inline label - visible with data', });
lyr_reasAfetassOperaesPorturiasMdioPrazo_48.set('fieldLabels', {'Perfil': 'inline label - visible with data', 'Área': 'inline label - visible with data', 'T. Instal.': 'inline label - visible with data', 'Nome': 'inline label - visible with data', });
lyr_reasAfetassOperaesPorturiasCurtoPrazo_49.set('fieldLabels', {'Perfil': 'inline label - visible with data', 'Área': 'inline label - visible with data', 'T. Instal.': 'inline label - visible with data', 'Nome': 'inline label - visible with data', });
lyr_reasAfetassOperaesPorturiasSituaoAtual_50.set('fieldLabels', {'Perfil': 'inline label - visible with data', 'Área': 'inline label - visible with data', 'T. Instal.': 'inline label - visible with data', 'Nome': 'inline label - visible with data', });
lyr_PoligonaldareadoPortoOrganizadodeNiteri_51.set('fieldLabels', {'Name': 'inline label - visible with data', 'Ins': 'inline label - visible with data', });
lyr_PoligonaldareadoPortoOrganizadodeNiteri_51.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});