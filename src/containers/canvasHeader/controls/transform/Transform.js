import {React, useEffect, useState, useContext} from 'react'
import CustomRangeInput from './../../../../components/customRangeInput/CustomRangeInput'
import CustomTextboxInput from './../../../../components/customTextboxInput/CustomTextboxInput'
import { CanvasContext } from '../../../../helpers/context/Context'

export default function Transform() {

    const {canvas} = useContext(CanvasContext)  

    const [Transforms, setTransforms] = useState({
        angle: 0,
        left: 0,
        top: 0,
        scale: 0,
        skewX: 0,
        skewY: 0
    })

    useEffect(() => {
        if(canvas){
            canvas.on({
                'object:moving': updateControls,
                'object:scaling': updateControls,
                'object:resizing': updateControls,
                'object:rotating': updateControls,
                'object:skewing': updateControls,
                'mouse:down': updateControls,
              });
        }
    }, [canvas])

    const updateControls = () => {
        const target = canvas.getActiveObject()
        if(!target)
            return;
            
        setTransforms(
            {angle: target.angle.toFixed(2),
            left: target.left.toFixed(2),
            top: target.top.toFixed(2),
            scale: target.scaleY.toFixed(2),
            skewX: target.skewX.toFixed(2),
            skewY: target.skewY.toFixed(2)
            }
        )
      }

      const ScaleHandler = (e) => {
        const target = canvas.getActiveObject()
        if(!target)
            return;

        target.set('scaleX', parseFloat(e.target.value)).setCoords();
        target.set('scaleY', parseFloat(e.target.value)).setCoords();

        canvas.requestRenderAll();
        setTransforms({... Transforms, "scale": e.target.value})
      }

      const TransformHandler = (e, type) => {
        const target = canvas.getActiveObject()
        if(!target)
            return;
        
        let data =  e.target.value || 0;

        if(type == "angle")
            target._setOriginToCenter();

        target.set(type, parseInt(data, 10)).setCoords();

        if(type == "angle")
            target._resetOrigin();

        canvas.requestRenderAll();
     
        setTransforms({... Transforms, [type]: data})
      }



  return (
    <>
        <CustomRangeInput text={"Left"}  onChange={(e)=>{TransformHandler(e, "left")}}  min={0} max={1200} value={Transforms.left} />
        <CustomRangeInput text={"Top"} onChange={(e)=>{TransformHandler(e, "top")}} min={0} max={400} value={Transforms.top} />
        <CustomRangeInput text={"Angle"} onChange={(e)=>{TransformHandler(e, "angle")}} min={0} max={360} value={Transforms.angle}/>        
        <CustomRangeInput text={"Scale"} onChange={ScaleHandler} min={0.1} max={3} step={0.1} value={Transforms.scale}/>
        <CustomRangeInput text={"SkewX"} onChange={(e)=>{TransformHandler(e, "skewX")}} min={0} max={80} value={Transforms.skewX}/>
        <CustomRangeInput text={"SkewY"} onChange={(e)=>{TransformHandler(e, "skewY")}} min={0} max={80} value={Transforms.skewY}/>
    </>
  )
}
