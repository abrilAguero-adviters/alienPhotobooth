/** 
e = event,
canvas = fabric canvas,
edgedetection = pixels to snap default 20
*/
export const EdgeSnapping = (e, canvas, edgedetection = 20) => {

    var obj = e.target, activeObject;
    obj.setCoords();

    canvas.forEachObject(function (targ) {

        activeObject = canvas.getActiveObject();
        if (targ == activeObject || targ.name == "grid" ||( activeObject.angle && (activeObject.angle != 360 && activeObject.angle != 0)) ||( targ.angle && targ.angle != 0)) return;
     
        if(
            (activeObject.oCoords.tl.y > targ.oCoords.tl.y && activeObject.oCoords.tl.y < targ.oCoords.tr.y) || 
            (activeObject.oCoords.bl.y < targ.oCoords.bl.y && activeObject.oCoords.bl.y > targ.oCoords.tl.y) ||
            (targ.oCoords.tl.y > activeObject.oCoords.tl.y && targ.oCoords.tl.y < activeObject.oCoords.bl.y) || 
            (targ.oCoords.bl.y < activeObject.oCoords.bl.y && targ.oCoords.bl.y > activeObject.oCoords.tl.y) 
        ){
            if (Math.abs(activeObject.oCoords.tr.x - targ.oCoords.tl.x) < edgedetection) {
                activeObject.left = targ.left - activeObject.width  * activeObject.scaleX;
            }
            
            if (Math.abs(activeObject.oCoords.tl.x - targ.oCoords.tr.x) < edgedetection) {
                activeObject.left = targ.left + targ.width * targ.scaleX;
            }
         }
        
         if(
            (activeObject.oCoords.tl.x > targ.oCoords.tr.x && activeObject.oCoords.tl.x < targ.oCoords.tr.x) || 
            (activeObject.oCoords.tr.x < targ.oCoords.tr.x && activeObject.oCoords.tr.x > targ.oCoords.tl.x) ||  
            (targ.oCoords.tl.x > activeObject.oCoords.tr.x && targ.oCoords.tl.x < activeObject.oCoords.tr.x) || 
            (targ.oCoords.tr.x < activeObject.oCoords.tr.x && targ.oCoords.tr.x > activeObject.oCoords.tl.x)
        ){

            if (Math.abs(activeObject.oCoords.br.y - targ.oCoords.tr.y) < edgedetection) {
                activeObject.top = targ.top - activeObject.height * activeObject.scaleY;
            }
            if (Math.abs(targ.oCoords.br.y - activeObject.oCoords.tr.y) < edgedetection) {
                activeObject.top = targ.top + targ.height * targ.scaleY;
            }
        }
    });
}