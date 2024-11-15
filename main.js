// import GeoJSON from './v10.2.1-package/format/GeoJSON.js';
// import Map from './v10.2.1-package/Map.js';
// import VectorLayer from './v10.2.1-package/layer/Vector.js';
// import VectorSource from './v10.2.1-package/source/Vector.js';
// import View from './v10.2.1-package/View.js';

const roadMapConfig = [
  // DIR
  {
    gestionn: "DIRA",
    pathId: "dir-atlantique",
    label: "DIR Atlantique",
    color: "#4c90b4",
  },
  {
    gestionn: "DIRCE",
    pathId: "dir-centre-est",
    label: "DIR Centre-Est",
    color: "#e4cc94",
  },
  {
    gestionn: "DIRCO",
    pathId: "dir-centre-ouest",
    label: "DIR Centre-Ouest",
    color: "#cd943b",
  },
  { gestionn: "DIRE", pathId: "dir-est", label: "DIR Est", color: "#008e8b" },
  {
    gestionn: "DIRIF",
    pathId: "dir-ile-de-france",
    label: "DIR Ile-De-France",
    color: "#a2589e",
  },
  {
    gestionn: "DIRMC",
    pathId: "dir-massif-central",
    label: "DIR Massif Central",
    color: "#006b2b",
  },
  {
    gestionn: "DIRMED",
    pathId: "dir-mediterranee",
    label: "DIR Méditerranée",
    color: "#20baae",
  },
  { gestionn: "DIRN", pathId: "dir-nord", label: "DIR Nord", color: "#f6a712" },
  {
    gestionn: "DIRNO",
    pathId: "dir-nord-ouest",
    label: "DIR Nord-Ouest",
    color: "#008e11",
  },
  {
    gestionn: "DIRO",
    pathId: "dir-ouest",
    label: "DIR Ouest",
    color: "#c7b500",
  },
  {
    gestionn: "DIRSO",
    pathId: "dir-sud-ouest",
    label: "DIR Sud-Ouest",
    color: "#c50636",
  },
  {
    gestionn: "DIRSOGT2",
    pathId: "dir-sud-ouest-saint-paul-de-jarrat",
    label: "DIR Sud-Ouest | St-Paul-de-Jarrat",
    color: "#c50636",
  },

  // SCA
  {
    gestionn: "ALICORNE",
    pathId: "sca-alicorne",
    label: "SCA Alicorne",
    color: "#820e11",
  },
  {
    gestionn: "ALIENOR",
    pathId: "sca-alienor",
    label: "SCA A'liénor",
    color: "#820e11",
  },
  { gestionn: "ALIS", pathId: "sca-alis", label: "SCA Alis", color: "#e3bd00" },
  { gestionn: "APRR", pathId: "sca-aprr", label: "SCA APRR", color: "#c00419" },
  {
    gestionn: "ARCOS",
    pathId: "sca-arcos",
    label: "SCA ARCOS",
    color: "#08860b",
  },
  {
    gestionn: "ARCOUR",
    pathId: "sca-arcour",
    label: "SCA Arcour",
    color: "#0178bd",
  },
  { gestionn: "AREA", pathId: "sca-area", label: "SCA Area", color: "#db795a" },
  { gestionn: "ASF", pathId: "sca-asf", label: "SCA ASF", color: "#007195" },
  {
    gestionn: "ATLANDES",
    pathId: "sca-atlandes",
    label: "SCA ATLANDES",
    color: "#e3980a",
  },
  { gestionn: "ATMB", pathId: "sca-atmb", label: "SCA ATMB", color: "#ffca00" },
  {
    gestionn: "CEA",
    pathId: "ct-cea",
    label: "CT Collectivité Européenne d'Alsace",
    color: "#ae6c46",
  },
  {
    gestionn: "COFIROUTE",
    pathId: "sca-cofiroute",
    label: "SCA Cofiroute",
    color: "#4d3e90",
  },
  {
    gestionn: "ESCOTA",
    pathId: "sca-escota",
    label: "SCA Escota",
    color: "#223086",
  },
  {
    gestionn: "SANEF-SAPN",
    pathId: "sca-sanef-sapn",
    label: "SCA Sanef / Sapn",
    color: "#008637",
  },
  {
    gestionn: "SFTRF",
    pathId: "sca-sftrf",
    label: "SCA SFTRF",
    color: "#d184b3",
  },

  // AUTRES
  {
    gestionn: "DIRAC",
    pathId: "dir-routes-concedees",
    label: "Routes concédées",
    color: "#ddd",
  },
];

const franceSource = new ol.source.Vector({
  format: new ol.format.GeoJSON(),
  url: "./geojson/fr_regions.geojson",
});

const openMapLayer = new ol.layer.Tile({
  source: new ol.source.OSM(),
});

var data_raster_positron = new ol.layer.Tile({
  source: new ol.source.XYZ({
    url: "https://cartodb-basemaps-{a-c}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png",
    // Mentions légales
    attributions: [
      '© Contributeur <a href="https://www.openstreetmap.org/copyright" target="_blanc">OpenStreetMap</a>',
      '© <a href="https://carto.com/attribution" target="_blanc">CARTO</a>',
    ],
  }),
  // Opacité de la couche (défaut : 1)
  //opacity: 1,
  // Visibilité de la couche (défaut : true)
  //visible: true,
  // Résolutions minimum (niveau de zoom) incluse d'affichage de la couche en unité de carte par pixel
  //minResolution:25,
  // Résolutions maximum (niveau de dézoom) exclue d'affichage de la couche en unité de carte par pixel
  //maxResolution:500,
  // Niveau de superposition de la couche (défaut : 0)
  //zIndex: 0,
  // Extension LayerSwitcher : Titre de la couche
  title: "Positron",
  // Extension LayerSwitcher : Fond de plan : seul une seule couche de type 'base' est affichée à la fois
  type: "base",
});

let map = new ol.Map({
  target: "map-container",
  layers: [
    data_raster_positron,
    new ol.layer.Vector({
      source: franceSource,
      style: new ol.style.Style({
        // fill: new ol.style.Fill({
        //   color: 'white'
        // }),
        stroke: new ol.style.Stroke({
          color: [0, 0, 139, 0.3],
          width: 0.8,
          lineCap: "round",
        }),
      }),
    }),
  ],
  view: new ol.View({
    center: ol.proj.fromLonLat([2.0, 47.0]),
    zoom: 5.3,
  }),
});

let styleOne = new ol.style.Style({
  fill: new ol.style.Fill({
    color: [203, 194, 185, 1],
  }),
  stroke: new ol.style.Stroke({
    color: [177, 163, 148, 1],
    width: 2,
    lineCap: "round",
  }),
});

let styleTwo = new ol.style.Style({
  fill: new ol.style.Fill({
    color: [203, 194, 185, 1],
  }),
  stroke: new ol.style.Stroke({
    // color: '#FBFBFB',
    width: 1,
    lineCap: "round",
  }),
});

const sourceRoads = new ol.source.Vector({
  url: "./geojson/RRN_DIR2025.geojson",
  format: new ol.format.GeoJSON(),
});

let roads = new ol.layer.Vector({
  source: sourceRoads,
  style: (feature) => {
    return getFeatureStyle(feature.get("gestionn"));
  },
});
map.addLayer(roads);

const getFeatureStyle = (name) => {
  var color = roadMapConfig.find((el) => el.gestionn == name).color;
  return new ol.style.Style({
    fill: new ol.style.Fill({
      color: [203, 194, 185, 1],
    }),
    stroke: new ol.style.Stroke({
      color: color,
      width: 2.3,
      lineCap: "round",
    }),
  });
};

const info = document.getElementById("info");

let currentFeature;
const displayFeatureInfo = function (pixel, target) {
  const feature = target.closest(".ol-control")
    ? undefined
    : map.forEachFeatureAtPixel(pixel, function (feature) {
        return feature;
      });
  if (feature && feature.get("nom_court")) {
    info.style.left = pixel[0] + "px";
    info.style.top = pixel[1] + "px";
    if (feature !== currentFeature) {
      info.style.visibility = "visible";
      info.innerText = feature.get("nom_court");
    }
  } else if (feature && feature.get("nom")) {
    info.style.left = pixel[0] + "px";
    info.style.top = pixel[1] + "px";
    if (feature !== currentFeature) {
      info.style.visibility = "visible";
      info.innerText = feature.get("nom");
    }
  } else {
    info.style.visibility = "hidden";
  }
  currentFeature = feature;
};

map.on("pointermove", function (evt) {
  if (evt.dragging) {
    info.style.visibility = "hidden";
    currentFeature = undefined;
    return;
  }
  const pixel = map.getEventPixel(evt.originalEvent);
  displayFeatureInfo(pixel, evt.originalEvent.target);
});

map.on("click", function (evt) {
  displayFeatureInfo(evt.pixel, evt.originalEvent.target);
});

map.getTargetElement().addEventListener("pointerleave", function () {
  currentFeature = undefined;
  info.style.visibility = "hidden";
});

const regFeatures = fetch("./geojson/fr_regions.geojson").then((response) =>
  response.json()
);

const loadRegionSelector = () => {
  const regSel = $("#region");
  fetch("./geojson/fr_regions.geojson")
    .then((response) => response.json())
    .then((json) => {
      console.log(json);
      json.features.forEach((el) => {
        regSel.append(
          `<option value=${el.properties.code} >${el.properties.nom}</option>`
        );
        regSel.on("change", () => {
          goToReg(map, franceSource, $("#region").val());
        });
      });
    });
};

loadRegionSelector();

$("#center").on("click", () => {
  map.setView(
    new ol.View({
      center: ol.proj.fromLonLat([2.0, 47.0]),
      zoom: 5.3,
    })
  );
});

$("#zoom").on("click", () => {
  var interactions = map.getInteractions();
  for (var i = 0; i < interactions.getLength(); i++) {
    var interaction = interactions.item(i);
    if (interaction instanceof ol.interaction.MouseWheelZoom) {
      map.removeInteraction(interaction);
      break;
    }
  }
});
