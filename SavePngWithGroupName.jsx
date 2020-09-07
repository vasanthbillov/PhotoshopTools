//credit:vasanth kumar
#target photoshop

app.bringToFront();

(function main()
{   
    
        var doc = app.activeDocument;
       // alert(doc.layers.length );//4
        if (doc.layerSets.length == 1 && layer.isBackgroundLayer) 
        {
            alert("The Background layer can't be hidden when it's the only layer in a   document.", "Can't Hide Background", false);
        }
        // toggle visibility of active layer
        else{
                for(var i = 0 ; i < doc.layerSets.length;i++)
                {
                        doc.layerSets[i].visible = false;
                }
                for(var i = 0 ; i < doc.layerSets.length;i++)
                {
                        //doc.layers[i].visible = true;//(i % 2 == 0);
                        if(i==0)
                        {
                                //doc.activeLayer = doc.layers[i];
                                doc.layerSets[i].visible = true;
                                sfwPNG24(doc,i);
                        }
                        if( doc.layerSets[i].visible == true)
                        {
                                doc.layerSets[i].visible = false;
                                var j= i+1;
                                if( j < doc.layerSets.length)
                                {
                                        //doc.activeLayer = doc.layers[j];
                                        doc.layerSets[j].visible = true;
                                        sfwPNG24(doc,j);
                                }
                                else
                                {
                                        alert("Over");
                                }
                        }
                }
                for(var i = 0 ; i < doc.layerSets.length;i++)
                {
                        doc.layerSets[i].visible = true;
                }
        }
       
})();


function SaveJpeg(doc)
{
    var fileName = doc.layerSets[i].name;
    var jpgFile = new File(doc.path + '/' +fileName+ '.jpg');
    jpegSaveOptions = new JPEGSaveOptions();
    jpegSaveOptions.embedColorProfile = true;
    jpegSaveOptions.formatOptions = FormatOptions.STANDARDBASELINE;
    jpegSaveOptions.matte = MatteType.NONE;
    jpegSaveOptions.quality=1;
    doc.saveAs (jpgFile, jpegSaveOptions, true, Extension.LOWERCASE);
}
function sfwPNG24(doc,i)
{
    var fileName = doc.layerSets[i].name;
    var pngFile = new File(doc.path + '/' +fileName+ '.png');
    var pngOpts = new PNGSaveOptions;
    pngOpts.compression = 9;
    pngOpts.interlaced = false;
    activeDocument.saveAs(pngFile, pngOpts, true, Extension.LOWERCASE);

}
