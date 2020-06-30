let btnSpin = document.getElementById('button-spin');
let btnOpenInput = document.getElementById('btn-open-input');
let wheel = document.getElementById('wheel');
let spinner = document.querySelector('.spinner');
let inputGroup = document.querySelector('.input-group');
let root = document.documentElement;
btnOpenInput.addEventListener('click', () => {
  inputGroup.style.display = 'block';
});
wheel.addEventListener('click', () => {
  let min = 1000;
  let max = 9999;
  let deg = Math.floor(Math.random() * (min - max)) + max;
  console.log(deg);
  wheel.style.transform = `rotate(${deg}deg)`;
});

var color = ['#ca7', '#7ac', '#77c', '#aac', '#a7c', '#ac7', '#caa'];
var label = [
  'Uống 1 chén',
  'Không phải uống',
  'Ngồi cạnh bên trái uống 1',
  'Ngồi cạnh bên phải uống 1',
  '50/50',
  'Được miễn 1 chén',
  'Đứa đối diện uống 1 chén',
];
var slices = color.length;
var sliceDeg = 360 / slices;
var deg = 0;
var ctx = canvas.getContext('2d');
var width = canvas.width; // size
var center = width / 2; // center
canvas.style.width = '500px';
canvas.style.height = '500px';
function deg2rad(deg) {
  return (deg * Math.PI) / 180;
}

function drawSlice(deg, color) {
  ctx.beginPath();
  ctx.fillStyle = color;
  ctx.moveTo(center, center);
  ctx.arc(center, center, width / 2, deg2rad(deg), deg2rad(deg + sliceDeg));
  ctx.lineTo(center, center);
  ctx.fill();
}

function drawText(deg, text) {
  ctx.save();
  ctx.translate(center, center);
  ctx.rotate(deg2rad(deg));
  ctx.textAlign = 'center';
  ctx.fillStyle = '#fff';
  ctx.font = 'bold 24px sans-serif';
  ctx.fillText(text, 220, 10);
  ctx.restore();
}

for (var i = 0; i < slices; i++) {
  drawSlice(deg, color[i]);
  drawText(deg + sliceDeg / 2, label[i]);
  deg += sliceDeg;
}
