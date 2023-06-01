var map = L.map('map').setView([-28.6729, -49.3731], 13);

var markerPostoChile = L.marker([-28.684761682540767, -49.34613407787312]).addTo(map);
markerPostoChile.bindPopup("<b>Posto Chile</b><br><b/>R. Miguel Patrício de Souza, 150<br>Ceará</b><br>Criciúma - SC").openPopup();

var markerWosocris = L.marker([-28.66578632254444, -49.42890826239412]).addTo(map);
markerWosocris.bindPopup("<b>Wosocris</b><br><b/>R. Virgílio Mondardo, 390</b><br>Criciúma - SC").openPopup();

var markerPrefeituraSaoLuiz = L.marker([-28.705909369677336, -49.42913009122244]).addTo(map);
markerPrefeituraSaoLuiz.bindPopup("<b>Intendência Prefeitura Santa Luzia</b><br>R. Getúlio Cândido Albino, 558-630<br>Vila Nova Esperanca<br>Criciúma - SC").openPopup();

var markerNaspolini = L.marker([-28.681210289483424, -49.35014156292016]).addTo(map);
markerNaspolini.bindPopup("<b>Av. Centenário</b><br>Próspera<br>Criciúma - SC").openPopup();

var markerLuizRosso = L.marker([-28.780927077946085, -49.36583959120728]).addTo(map);
markerLuizRosso.bindPopup("<b>Rod. Luiz Rosso, 10200</b><br>Criciúma - SC").openPopup();

var markerRioMaina = L.marker([-28.675208383000353, -49.42168576424765]).addTo(map);
markerRioMaina.bindPopup("<b>Intendencia Distrital Subprefeitura Rio Maina</b><br>R. Miguel Nápoli, 547-595<br>Vila Isabel<br>Criciúma - SC").openPopup();

var markerAutoPosto = L.marker([-28.773438629880904, -49.36616488935357]).addTo(map);
markerAutoPosto.bindPopup("<b>Auto Posto HG - Posto Shell</b><br>KM 08 - Rod. Luiz Rosso, 9330<br>Quarta Linha<br>Criciúma - SC").openPopup();

var markerEcoponto = L.marker([-28.731552938704517, -49.402172302852506]).addTo(map);
markerEcoponto.bindPopup("<b>Ecoponto</b><br>Santa Barbara<br>Criciúma - SC").openPopup();

var markerFamcri = L.marker([-28.686924574306076, -49.38465352006289]).addTo(map);
markerFamcri.bindPopup("<b>FAMCRI</b><br>R. Henrique Lage, 1873<br>Santa Barbara<br>Criciúma - SC").openPopup();

var markerAltairGuidi = L.marker([-28.69085403918656, -49.38250611820658]).addTo(map);
markerAltairGuidi.bindPopup("<b>Parque Centenário</b><br>Av. Centenário<br>Criciúma - SC").openPopup();

var markerParqueImigrantes = L.marker([-28.670876018779598, -49.41734295075792]).addTo(map);
markerParqueImigrantes.bindPopup("<b>Parque dos Imigrantes</b><br>R. Jose Geronimo Mateus s/n Vila Francesa<br>Criciúma - SC").openPopup();

var markerFortunato = L.marker([-28.63869694157338, -49.3872091340661]).addTo(map);
markerFortunato.bindPopup("<b>Escola Municipal Fortunato</b><br>R. Itália, 70<br>Mina do Toco<br>Criciúma - SC").openPopup();

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);