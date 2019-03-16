var renderer, scene, camera;
var cubes = [];
var rot = 0;
var randomSpeedX = [];




function init() {
  scene = new THREE.Scene();

  var W = window.innerWidth,
  H = window.innerHeight;

  camera = new THREE.PerspectiveCamera(45, W / H, .1, 1000);
  camera.position.set(0, 55, 85);
  camera.lookAt(scene.position);

  var spotLight = new THREE.SpotLight(0xFFFFFF);
  spotLight.position.set(0, 1000, 0);
  scene.add(spotLight);
  //spotLight.castShadow = true;
  var ambLight = new THREE.AmbientLight(0xFFFFFF);
  ambLight.position.set(0,1000,0);
  ambLight.add(spotLight);
  scene.add(ambLight);


  renderer = new THREE.WebGLRenderer({antialias:true});
  renderer.setClearColor(0x17293a);
  renderer.setSize(W, H);
  //renderer.shadowMapEnabled = true;

  controls = new THREE.OrbitControls(camera, renderer.domElement);

  //Create a two dimensional grid of objects, and position them accordingly
  for (var x = -10; x <= 10; x += 5) { // Start from -35 and sequentially add one every 5 pixels
    for (var y = -10; y <= 10; y += 5) {
      var boxGeometry = new THREE.BoxGeometry(3, 3, 3);
      //The color of the material is assigned a random color
      var boxMaterial = new THREE.MeshLambertMaterial({color: 0x000000});
      var mesh = new THREE.Mesh(boxGeometry, boxMaterial);
      //mesh.castShadow = true;
      /*
      if (x == -5 && y == -5 ){
         boxMaterial = new THREE.MeshLambertMaterial({color: 0xFFFF33});
       }else if ( x == 5 && y == 5 ){
        boxMaterial = new THREE.MeshLambertMaterial({color: 0xFFFF33});
      }else{
        boxMaterial = new THREE.MeshLambertMaterial({color: 0xFFFFFF});
      }
      */

      mesh.position.x = x;
      mesh.position.z = y;
      mesh.scale.x = 50;


      mesh.rotation.x =  Math.random() * 2 * Math.PI;
      mesh.rotation.y =  Math.random() * 2 * Math.PI;
      mesh.rotation.z =  Math.random() * 2 * Math.PI;





// var randomValueX = (Math.random()*0.1)-0.05;
// randomSpeedX.push(randomValueX);


      scene.add(mesh);
      cubes.push(mesh);
    }
  }

  document.body.appendChild(renderer.domElement);
}

//var scaleCube = -1;

function drawFrame(){
  requestAnimationFrame(drawFrame);
//  scaleCube += 0.02;
  //if (scaleCube > 3) scaleCube =-1;
  //cubes[1].scale.z = scaleCube;
  cubes[1] .rotation.x += 0.1;
  cubes[3].rotation.x += 0.1;
  cubes[5] .rotation.x += 0.1;
  cubes[7] .rotation.x += 0.1;
  cubes[9] .rotation.x += 0.1;
  cubes[10] .rotation.x += 0.1;
  cubes[14] .rotation.x += 0.1;
  cubes[16] .rotation.x += 0.1;
  cubes[18] .rotation.x += 0.1;
  cubes[22] .rotation.x += 0.1;
cubes[1] .material  = new THREE.MeshLambertMaterial({color: 0xE1414F});
cubes[3] .material  = new THREE.MeshLambertMaterial({color: 0xE1414F});
cubes[5] .material  = new THREE.MeshLambertMaterial({color: 0xE1414F});
cubes[7] .material  = new THREE.MeshLambertMaterial({color: 0xE1414F});
cubes[9] .material  = new THREE.MeshLambertMaterial({color: 0xE1414F});
cubes[10] .material  = new THREE.MeshLambertMaterial({color: 0xE1414F});
  cubes[14] .material  = new THREE.MeshLambertMaterial({color: 0xE1414F});
  cubes[16] .material  = new THREE.MeshLambertMaterial({color: 0xE1414F});
  cubes[18] .material  = new THREE.MeshLambertMaterial({color: 0xE1414F});
  cubes[22] .material  = new THREE.MeshLambertMaterial({color: 0xE1414F});






//rot += 0.04;

  //forEach takes all the array entries and passes the c as the obj·ect, and i as the index
  //cubes.forEach(function(c, i) {
    //c.rotation.z = rot; //Rotate the object that is referenced in c

  //});

  renderer.render(scene, camera);
}

init();
drawFrame();
