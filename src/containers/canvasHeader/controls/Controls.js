import React from 'react';
import './controls.css';
import Grid from './grid/Grid';
import Settings from './settings/Settings';
import Transform from './transform/Transform';

export const Controls = ({hamburguerHandler})  => {

  return (
    <>
      <div className='controlsHead'>
        Settings
        <button onClick={hamburguerHandler} >x</button>
      </div>
      <div className='tabControls'>
          <div className='tabControlsItem tabControlsItemLine'>
            <div className='tabControlsTitle'>Controls</div>
            <Transform />
          </div>
              
          <div className='tabControlsItem tabControlsItemLine'>
            <div className='tabControlsTitle'>Grid</div>
            <Grid />
          </div>

          <div className='tabControlsItem'>
            <div className='tabControlsTitle'>Snapping</div>
            <Settings />
          </div>
      </div>
    </>
  )
}
