import { fabric } from "fabric";
import Copiar from "../assets/img/control/Copiar.png"
import Eliminar from "../assets/img/control/Eliminar.png"

export const InitControls = () => {

    var deleteIcon = Eliminar

    var cloneIcon = Copiar

    var deleteImg = document.createElement('img');
    deleteImg.src = deleteIcon;

    var cloneImg = document.createElement('img');
    cloneImg.src = cloneIcon;

    fabric.Object.prototype.transparentCorners = false;
    fabric.Object.prototype.cornerColor = '#8C1AC4';
    fabric.Object.prototype.cornerStyle = 'circle';
    fabric.Object.prototype.borderColor = 'gray';

    function renderIcon(icon) {
        return function renderIcon(ctx, left, top, styleOverride, fabricObject) {
            var size = this.cornerSize;
            ctx.save();
            ctx.translate(left, top);
            ctx.rotate(fabric.util.degreesToRadians(fabricObject.angle));
            ctx.drawImage(icon, -size/2, -size/2, size, size);
            ctx.restore();
        }
    }

    function deleteObject(eventData, transform) {
        var target = transform.target;
		var canvas = target.canvas;

        if(target._objects){
            target._objects.forEach((item)=>{
                canvas.remove(item);
            })
            canvas.discardActiveObject();
        }else{
            canvas.remove(target);
        }

        canvas.remove(target);
        canvas.requestRenderAll();
    }

    function cloneObject(eventData, transform) {
    var target = transform.target;
    var canvas = target.canvas;
    if (target._objects) {
        function cloneGroup(item, l, t) {
            if (item._objects) {
                item._objects.forEach((obj)=>cloneGroup(obj, groupLeft,groupTop));
            }else{
                item.clone(function(cloned) {
                    cloned.left = (10 + l + Math.abs(item.left));
                    cloned.top = (10 + t );
                    canvas.add(cloned);
                });
            }
        }
        let groupLeft=target.left;
        let groupTop=target.top;
        
        target._objects.forEach((obj)=>cloneGroup(obj, groupLeft,groupTop));
    }else{
        target.clone(function(cloned) {
            cloned.left += (10 );
            cloned.top += (10 );
            canvas.add(cloned);
        });
    }
        canvas.renderAll();

    }

    fabric.Object.prototype.controls.deleteControl = new fabric.Control({
        x: 0.5,
        y: -0.5,
        offsetY: -16,
        offsetX: 16,
        cursorStyle: 'pointer',
        mouseUpHandler: deleteObject,
        render: renderIcon(deleteImg),
        cornerSize: 24
    });
    
    fabric.Object.prototype.controls.clone = new fabric.Control({
        x: -0.5,
        y: -0.5,
        offsetY: -16,
        offsetX: -16,
        cursorStyle: 'pointer',
        mouseUpHandler: cloneObject,
        render: renderIcon(cloneImg),
        cornerSize: 24
    });

}