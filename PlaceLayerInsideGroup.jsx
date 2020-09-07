
#target photoshop

app.bringToFront();

(function main()
{   
    var doc = app.activeDocument;
    createLayer(doc);
  
    
})();

function createLayer(doc1)
{
    newLayer = doc1.artLayers.add();
    newGroup = doc1.layerSets.add();
    newGroup.name = "newGroup";
var dummieLayer = newGroup.artLayers.add();
dummieLayer.name = "dummy";
    
    newLayer.move(dummieLayer, ElementPlacement.PLACEBEFORE);
dummieLayer.remove();
 }



/*
   //Place groud inside another group 
var srcGroup = app.activeDocument.layerSets.add();
srcGroup.name = "source";
var targetGroup = app.activeDocument.layerSets.add();
targetGroup.name = "target";

//adding the dummy INSIDE the target LayerSet
var dummieGroup = targetGroup.layerSets.add();
dummieGroup.name = "dummy";

srcGroup.move(dummieGroup, ElementPlacement.PLACEBEFORE);
dummieGroup.remove();
 */

