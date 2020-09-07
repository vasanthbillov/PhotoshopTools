#target photoshop

app.bringToFront();

(function main()
{   
        app.preferences.rulerUnits = Units.PIXELS;
        var doc = app.activeDocument;
        doc.crop (new Array(10,20,40,50),0,300,300);
       // var shapeRef = [ [10,10],[30,100],[100,100],[100,10]];
       // doc.selection.select(shapeRef);
       

})();

function ImageResize(doc)
{
    doc.resizeImage (200, 200, 72, ResampleMethod.AUTOMATIC);
}
function CropImage()
{
      var doc = app.activeDocument;
       // doc.crop (new Array(10,20,40,50),20,100,100);
      // create variables
        var bounds, left, top, right, bottom;

        if(doc.height > doc.width) {
        // document is taller, need to crop to square based on width
        left = 0;
        top = (doc.height-doc.width)/2;
        right = doc.width;
        bottom = top + doc.width;
        } else {
        // document is wider, need to crop to square based on height
        left = (doc.width-doc.height)/2;
        top = 0;
        right = left + doc.height;
        bottom = doc.height;
}

        // set bounds for cropping
        bounds = [left, top, right, bottom];
        doc.crop(bounds);
}
