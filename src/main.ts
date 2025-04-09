import calculateCanvasSize from './calculateCanvasSize';
import calculateCanvasDiagonal from './calculateCanvasDiagonal';
import estimatePaintingTime from './estimatePaintingTime';
import paintRequiredForMultipleCoats from './paintRequiredForMultipleCoats';
import convertAreaToSquareFeet from './convertAreaToSquareFeet';

// Example usage:
const area = 100;
const coveragePerLiter = 10;
const coats = 2;
const paintingSpeed = 10;

// Calculate and log results
const canvasSize = calculateCanvasSize('10', '100');
console.log('Canvas Size:', canvasSize);

const canvasDiagonal = calculateCanvasDiagonal('3', '4');
console.log('Canvas Diagonal:', canvasDiagonal);

const paintingTime = estimatePaintingTime(area, paintingSpeed);
console.log('Painting Time:', paintingTime);

const paintRequired = paintRequiredForMultipleCoats(area, coveragePerLiter, coats);
console.log('Paint Required for Multiple Coats:', paintRequired);

const areaInFeet = convertAreaToSquareFeet(area);
console.log('Area in Square Feet:', areaInFeet);
