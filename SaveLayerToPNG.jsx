//credit:vasanth kumar
#target photoshop

app.bringToFront();

(function main()
{   
    
        var doc = app.activeDocument;
       // alert(doc.layers.length );//4
        if (doc.layers.length == 1 && layer.isBackgroundLayer) 
        {
            alert("The Background layer can't be hidden when it's the only layer in a   document.", "Can't Hide Background", false);
        }
        // toggle visibility of active layer
        else{
                for(var i = 0 ; i < doc.layers.length;i++)
                {
                        doc.layers[i].visible = false;
                }
                for(var i = 0 ; i < doc.layers.length;i++)
                {
                        //doc.layers[i].visible = true;//(i % 2 == 0);
                        if(i==0)
                        {
                                //doc.activeLayer = doc.layers[i];
                                doc.layers[i].visible = true;
                                sfwPNG24(doc,i);
                        }
                        if( doc.layers[i].visible == true)
                        {
                                doc.layers[i].visible = false;
                                var j= i+1;
                                if( j < doc.layers.length)
                                {
                                        //doc.activeLayer = doc.layers[j];
                                        doc.layers[j].visible = true;
                                        sfwPNG24(doc);
                                }
                                else
                                {
                                        alert("Over");
                                }
                        }
                }
                for(var i = 0 ; i < doc.layers.length;i++)
                {
                        doc.layers[i].visible = true;
                }
        }
       
})();

function SaveJpeg(doc)
{
    var visibleLayers = getVisibleLayers(app.activeDocument);  
    var fileName = visibleLayers.join().replace(/,/g, "_");  
    var jpgFile = new File(doc.path + '/' +fileName+ '.jpg');
    jpegSaveOptions = new JPEGSaveOptions();
    jpegSaveOptions.embedColorProfile = true;
    jpegSaveOptions.formatOptions = FormatOptions.STANDARDBASELINE;
    jpegSaveOptions.matte = MatteType.NONE;
    jpegSaveOptions.quality=1;
    doc.saveAs (jpgFile, jpegSaveOptions, true, Extension.LOWERCASE);
}
function sfwPNG24(doc)
{
    var visibleLayers = getVisibleLayers(app.activeDocument);  
    var fileName = visibleLayers.join().replace(/,/g, "_");  
    var pngFile = new File(doc.path + '/' +fileName+ '.png');
    var pngOpts = new PNGSaveOptions;
    pngOpts.compression = 9;
    pngOpts.interlaced = false;
    activeDocument.saveAs(pngFile, pngOpts, true, Extension.LOWERCASE);

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