import React, { useContext } from 'react'
import { fabric } from 'fabric';
import CustomCheckbox from './../../../../components/customCheckbox/CustomCheckbox';
import CustomRangeInput from './../../../../components/customRangeInput/CustomRangeInput';
import { createGrid } from './../../../../helpers/createGrid';
import { CanvasContext } from '../../../../helpers/context/Context';

export default function Grid() {

  const {canvas} = useContext(CanvasContext)  

    let grid = false;
    let gridOptions={
      color:"rgba(0, 0, 0, 0)",
      snap:false,
      size:50
    }
    const addGrid = ()=>{
      grid = createGrid(canvas,grid,gridOptions);
      grid.addWithUpdate();
      canvas.add(grid);
      canvas.sendToBack(grid).renderAll();
    }
    const ShowGridHandler= (e)=>{
      if (e.target.checked) {
        gridOptions.color="#ccc"
      }else{
        gridOptions.color="rgba(0, 0, 0, 0)"
      }
      addGrid();
    }
    const AlignmentHandler= (e)=>{
      if (e.target.checked) {
        gridOptions.snap=true;
      }else{
        gridOptions.snap=false;
      }
      addGrid();
    }
    const GridSizeHandler= (e)=>{
      if ((e.target.value>4)&&(e.target.value<101)) {
        gridOptions.size=e.target.value
        addGrid();
      }
    }

  return (
    <>
        <CustomCheckbox text="Snap on grid" onChange={AlignmentHandler}/>
        <div className='CheckboxWrapper'>
          Show grid: 
          <label className="switch">
              <input type="checkbox" id="gridCheckbox" onChange={ShowGridHandler}/>
              <span className="slider" />
          </label>
        </div>
        <CustomRangeInput text={"Density"} onChange={GridSizeHandler} min={5} max={100} showInputBox={false}/>
    </>
  )
}
