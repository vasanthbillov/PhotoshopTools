(function() {  
    try {  
        // Get all visible layers in the file.  
        var visibleLayers = getVisibleLayers(app.activeDocument);  
  
        // If there are visible layers in the file, then proceed.  
        if (visibleLayers.length > 0) {  
            // Make a String from an Array object and replace , with _ globally  
            var fileName = visibleLayers.join().replace(/,/g, "_");  
  
            // Establish file path to save file.  
            var saveFile = app.activeDocument.path + "/" + fileName + ".png";  
  
            // Pass file path to function to save PNG image  
            savePNG(File(saveFile));  
  
        } else {  
            return alert("Yo dude, none of your layers are visible!");  
        }  
  
        function getVisibleLayers(doc, layers) {  
            layers = layers || [];  
            for (var i = 0, il = doc.layers.length; i < il; i++) {  
                if (doc.layers[i].typename == "LayerSet") {  
                    getVisibleLayers(doc.layers[i], layers)  
                } else {  
                    if (doc.layers[i].visible) {  
                        layers.push(doc.layers[i].name)  
                    }  
                }  
            }  
            return layers  
        }  
  
        function savePNG(saveFile) {  
            activeDocument.saveAs(saveFile, new PNGSaveOptions(), true, Extension.LOWERCASE);  
        };  
    } catch (e) {  
        alert(e.toString() + "\nScript File: " + File.decode(e.fileName).replace(/^.*[\|\/]/, '') +  
            "\nFunction: " + arguments.callee.name +  
            "\nError on Line: " + e.line.toString())  
    }  
})();  