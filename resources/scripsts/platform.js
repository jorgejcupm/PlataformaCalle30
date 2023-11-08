/**

script para el menú lateral

 */

let btn=document.querySelector("#btn");
let sidebar=document.querySelector(".sidebar");
let searchBTn=document.querySelector(".bx-search");

btn.onclick = function(){
    sidebar.classList.toggle("active");
}
searchBTn.onclick = function(){
    sidebar.classList.toggle("active");
}

/**

script ArcGIS

 */

require(["esri/config", "esri/WebScene", "esri/views/SceneView", "esri/widgets/Legend"], function(esriConfig, WebScene, SceneView, Legend) {
      
    esriConfig.apiKey = "AAPK250f9aaee9e549aa8503b17f6ba68dae5DyoqJ0N6sqZVrnrcv4u5lBbVR2jkUxlwordA3GD4yrQlXZ4Czh_DF2RtrVZHetU";

      var webscene = new WebScene({
          portalItem: {
          id: "361554667f8e41a8b543a59aa7991aad"
          }
      });
      var view = new SceneView({
          container: "viewDiv",
          map: webscene
      });
      scene.add(layer);

      view.whenLayerView(layer).then(function (layerView) {
        view.on("click", function (event) {
          view.hitTest(event).then(function (hit) {
            if (hit.results.length > 0) {
              var objectId = hit.results[0].graphic.attributes.OBJECTID;
              var div = document.getElementById("objectIdDiv");
              div.innerHTML = "ID único: " + objectId;
            }
          });
        });
      });      
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