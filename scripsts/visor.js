/**

script para la app de ArcGIS

 */
require([
  "esri/WebScene",
  "esri/views/SceneView",
  "esri/layers/SceneLayer",
  "esri/widgets/LayerList",
  "esri/widgets/Expand"
], function (WebScene, SceneView, SceneLayer, LayerList, Expand) {
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

  view.ui.add(expandLayerList, "top-right");

  var layer = new SceneLayer({
    portalItem: {
    id: "0ad9fc47191a4bf18a9a205d19253153"
    }
  });

  scene.add(layer);
  // Para deshabilitar el pop-up
  layer.popupEnabled = false;
});