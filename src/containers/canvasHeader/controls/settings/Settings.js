import React, { useEffect, useContext } from "react";
import CustomCheckbox from "./../../../../components/customCheckbox/CustomCheckbox";
import { EdgeSnapping } from "./../../../../helpers/EdgeSnapping";
import { CanvasContext } from "../../../../helpers/context/Context";

var isEdgeSnapping = false;

export default function Settings() {

  const {canvas} = useContext(CanvasContext)  
  
  useEffect(() => {
    if (canvas) {
      canvas.on("object:moving", function (e) {
        if(isEdgeSnapping){
          EdgeSnapping(e, canvas);
        }
      });
    }
  }, [canvas]);

  const RotationSnappingHandler = (e) => {
    let angle;

    if (e.target.checked) {
      angle = 22.5;
    } else {
      angle = 1;
    }

    canvas.on("object:rotating", (obj) => (obj.target.snapAngle = angle));
  };

  const EdgeSnappingHandler = (e) => {
    isEdgeSnapping = e.target.checked;
  };

  return (
    <>
      <CustomCheckbox
        text="Rotation snapping"
        onChange={RotationSnappingHandler}
      />
      <CustomCheckbox text="Edge snapping" onChange={EdgeSnappingHandler} />
    </>
  );
}
