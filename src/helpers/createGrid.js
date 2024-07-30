import { fabric } from 'fabric';

const removeGrid= (grid, canvas)=>{
    let objects = canvas.getObjects().filter(e => e.name === 'grid');
    objects.map(elem=>canvas.remove(elem));
    grid = false;
    canvas.__eventListeners["object:moving"] = [];
  };

export const createGrid = (canvas, grid, {color, snap, size})=>{
removeGrid(grid,canvas);
let gridSize = size;
let gridoption = {
    stroke: color,
    strokeWidth: 1
};
let gridLines = [];
// create grid
for (let i = 0; i < (canvas.getHeight() / gridSize); i++) {
    gridLines.push(new fabric.Line([ 0, i * gridSize, canvas.getWidth(), i * gridSize], gridoption));
}
for (let i = 0; i < (canvas.getWidth() / gridSize); i++) {
    gridLines.push(new fabric.Line([ i * gridSize, 0, i * gridSize, canvas.getHeight()], gridoption));
}

// snap to grid
if (snap) {
    canvas.on('object:moving', function(options) { 
    options.target.set({
        left: Math.round(options.target.left / gridSize) * gridSize,
        top: Math.round(options.target.top / gridSize) * gridSize
    });
    });
    
}
    return new fabric.Group(gridLines, {
        selectable: false,
        evented: false,
        name:"grid"
    })

}