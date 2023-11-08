/**

script para el menú lateral

 */

let btn=document.querySelector("#btn");
let btnOpen=document.querySelector("#btn_open");
let sidebar=document.querySelector(".sidebar");
let searchBTn=document.querySelector("#bx-search");

btn.onclick = function(){
    sidebar.classList.toggle("active");
}
btnOpen.onclick = function() {
  sidebar.classList.remove("active"); // Eliminamos el nombre de la clase para que no se aplique ninguna
}

searchBTn.onclick = function(){
    sidebar.classList.toggle("active");
}
function showPanel(){
  const panel= document.getElementById("panelPowerBI")
  panel.style.display= "block";
  const arcgis= document.getElementById("viewDiv")
  arcgis.style.display= "none";
}

function showVisor(){
  const panel= document.getElementById("panelPowerBI")
  panel.style.display= "none";
  const arcgis= document.getElementById("viewDiv")
  arcgis.style.display= "block";
}
/**

script ArcGIS

 */

require([
  "esri/WebScene",
  "esri/views/SceneView",
  "esri/layers/SceneLayer",
  "esri/widgets/LayerList",
  "esri/widgets/Expand",
  "esri/widgets/DirectLineMeasurement3D"
], function (WebScene, SceneView, SceneLayer, LayerList, Expand, DirectLineMeasurement3D) {
  var scene = new WebScene({
    portalItem: {
    id: "361554667f8e41a8b543a59aa7991aad"
    }
  });

  var view = new SceneView({
    container: "viewDiv",
    map: scene,
  });

  var layerList = new LayerList({
    view: view
  });

  var expandLayerList = new Expand({
    view: view,
    content: layerList,
    expandIconClass: "esri-icon-layers"
  });

  let measurementWidget = new DirectLineMeasurement3D({
    view: view
  });

  var expandMeasurementWidge = new Expand({
    view: view,
    content: measurementWidget,
    expandIconClass: "esri-icon-measure"
  });

  view.ui.add(expandLayerList, "top-right");
  view.ui.add(expandMeasurementWidge, "top-right");


  var layer = new SceneLayer({
    portalItem: {
    id: "0ad9fc47191a4bf18a9a205d19253153"
    }
  });

  scene.add(layer);
  // Para deshabilitar el pop-up
  layer.popupEnabled = true;

  view.whenLayerView(layer).then(function (layerView) {
    view.on("click", function (event) {
      view.hitTest(event).then(function (hit) {
        if (hit.results.length > 0) {
          var objectId = hit.results[0].graphic.attributes.OBJECTID_1;
          var div = document.getElementById("objectIdDiv");
          div.innerHTML = objectId;
        }
      });
      view.hitTest(event).then(function(response) {
        if (response.results.length > 0) {
          var graphic = response.results[0].graphic;
          var layerName = graphic.layer.title;

          // Mostrar el nombre de la capa en un elemento HTML
          var layerNameContainer = document.getElementById("layerNameContainer");
          layerNameContainer.textContent = layerName;
    
          // Mostrar el nombre de la capa en la consola
          // console.log(layerName);
        }
      });
      layerView.watch("updating", function(value) {
        if (!value) {
          // La capa se ha cargado correctamente en la vista
        }
      });
    });
  });
  window.searchObject = function() {
    var searchValue = document.getElementById("searchInput").value;
  
    // Crea una consulta para buscar el objeto en la escena
    var query = layer.createQuery();
    query.where = "OBJECTID = '" + searchValue + "'"; // Reemplaza "nombre_del_campo" con el nombre del campo en tu capa
    query.returnGeometry = true;
  
    // Ejecuta la consulta y muestra los resultados
    layer.queryFeatures(query).then(function(results) {
      var searchResultContainer = document.getElementById("searchResultContainer");
  
      if (results.features.length > 0) {
        var feature = results.features[0];
        var objectId = feature.attributes.OBJECTID; // Reemplaza "OBJECTID" con el nombre del campo de identificación único en tu capa
  
        // Muestra el resultado de la búsqueda en el contenedor HTML
        searchResultContainer.textContent = "Objeto encontrado - ID: " + objectId;
      } else {
        searchResultContainer.textContent = "Objeto no encontrado";
      }
    });
  }
 
});
/**

script Autodesk

 */
/**
 * 
 *         <script>
            var viewer = new Autodesk.Viewing.GuiViewer3D({ 
              divId: 'viewer'
            });
          </script>
var url = 'https://example.com/model.rvt';

Autodesk.Viewing.Initializer(options, function() {
  viewer.start();
  Autodesk.Viewing.Document.load(url, function(doc) {
    var viewables = doc.getRoot().getDefaultGeometry();
    viewer.loadDocumentNode(doc, viewables, {
      placementTransform: new THREE.Matrix4().makeTranslation(0, 0, 0) // Especifica la posición inicial de la vista
    });
  }, function(error) {
    console.error(error);
  }, { 
    'x-ads-force': 'true',
    'Accept-Encoding': 'gzip, deflate'
  });
});
*/

