
// Create an empty scene --------------------------
var scene = new THREE.Scene();

// Create a basic perspective camera --------------
camera = new THREE.PerspectiveCamera(35, window.innerWidth / window.innerHeight, 300, 10000 );

// Create a renderer with Antialiasing ------------
var renderer = new THREE.WebGLRenderer({antialias:true});

// Configure renderer clear color
renderer.setClearColor("#FF70AC");

// Configure renderer size
renderer.setSize( window.innerWidth, window.innerHeight );

// Append Renderer to DOM
document.body.appendChild( renderer.domElement );

// Configure lights -------------------------------
var light1 = new THREE.AmbientLight(0xffffff, 0.5);
scene.add(light1);

var light2 = new THREE.PointLight(0xffffff, 0.5);
scene.add(light2);

/*
// Create some toruses Mesh with normal material ---------
var geometry = new THREE.TorusGeometry( 50, 6, 16, 100 );
var geometry1 = new THREE.TorusGeometry( 100, 6, 16, 100 );
var geometry2 = new THREE.TorusGeometry( 200, 9, 16, 100 );



var geometry5 = new THREE.BoxBufferGeometry( 50, 50, 50 );
var geometry6 = new THREE.BoxBufferGeometry( 150, 150, 150 );
var geometry7 = new THREE.TorusGeometry( 150, 3, 16, 100 );


var material = new THREE.MeshNormalMaterial( {  } );
var material1 = new THREE.MeshNormalMaterial( {wireframe:true } );
*/
//body
var geometry = new THREE.BoxGeometry(100, 100, 100);
//spot
var  geometry1 = new THREE.BoxGeometry(20,20, 20);
var  geometry2 = new THREE.BoxGeometry(10,10, 10);
//nose
  var geometry3 = new THREE.BoxGeometry(10,5, 10);
  //tail
var geometry4  = new THREE.BoxGeometry(10,10, 30);
geometry4.applyMatrix( new THREE.Matrix4().makeTranslation( 0, 0, -20 ) );
//face
var geometry5  = new THREE.BoxGeometry(100,100, 100);
//ring
var geometry6 = new THREE.TorusGeometry(200, 3, 4, 4);
var geometry7 = new THREE.TorusGeometry(50, 3, 4, 4);

//wire
var geometry8 = new THREE.Geometry();
geometry8.vertices.push(
  new THREE.Vector3( 0, 0, 0 ),
  new THREE.Vector3( 0, 2000, 0 )
);
//material1 whiteMat
var material1 = new THREE.MeshLambertMaterial ({
  color: 0xffffff,
  lightMap: null,
lightMapIntensity: 1,
emissive: 0x000000,
emissiveMap: null,
emissiveIntensity: 1,
specularMap: null
  //shading:THREE.FlatShading
});
//material2 blackMat
var material2 = new THREE.MeshLambertMaterial ({
  color: 0x000000,
  lightMap: null,
lightMapIntensity: 1,
emissive: 0x000000,
emissiveMap: null,
emissiveIntensity: 1,
specularMap: null
//  shading:THREE.FlatShading
});
//material3 darkpinkMat
var material3 = new THREE.MeshLambertMaterial ({
  color: 0xEA5E65,
  lightMap: null,
lightMapIntensity: 1,
emissive: 0x000000,
emissiveMap: null,
emissiveIntensity: 1,
specularMap: null
  //shading:THREE.FlatShading
});
//materail4 pinkMat
var material4 = new THREE.MeshLambertMaterial ({
  color: 0xFFABB4,
  lightMap: null,
lightMapIntensity: 1,
emissive: 0x000000,
emissiveMap: null,
emissiveIntensity: 1,
specularMap: null
  //shading:THREE.FlatShading
});

var mesh1 = new THREE.Mesh(geometry, material4);

// SPOTS

var mesh2 = new THREE.Mesh(geometry1, material1);
mesh2.position.y = 41;
mesh2.position.x = 41;
mesh2.position.z = 25;

var mesh3 = new THREE.Mesh(geometry1, material1);
mesh3.scale.set(2,2,2);
mesh3.position.y = 31;
mesh3.position.x = -31;
mesh3.position.z = -31;

var mesh4 = new THREE.Mesh(geometry1, material1);
mesh4.scale.set(2.5,2.5,2.5);
mesh4.position.y = -26;
mesh4.position.x = 26;
mesh4.position.z = 26;

var mesh5 = new THREE.Mesh(geometry1, material1);
mesh5.position.y = -41;
mesh5.position.x = 41;
mesh5.position.z = -41;

// TAIL

var mesh6 = new THREE.Mesh( geometry4, material4);
mesh6.position.y = 45;
mesh6.position.z = -60;

// FACE

var mesh7 = new THREE.Mesh(geometry5, material4);
mesh7.position.z = 100;

// NOSTRILS

var mesh8 = new THREE.Mesh(geometry1,material2);
mesh8.scale.set(.3,.3,.3);
var mesh9 = this.mesh8.clone();
mesh8.position.z = this.mesh9.position.z =160;
mesh8.position.y = this.mesh9.position.y =10;
mesh8.position.x = -13;
mesh9.position.x = 13;

var mesh10 = new THREE.Mesh(geometry1, material3);
 mesh10.scale.set(4,5,4);
 mesh10.position.x = 0.5;
 mesh10.position.y = 10;
 mesh10.position.z = 141;

// EYES

var mesh11 = new THREE.Mesh(geometry1, material1);
 mesh11.scale.set(1,2.5,2.5);
mesh11.position.x = 41;
mesh11.position.y = 26;
mesh11.position.z = 100;

var mesh12 = this.mesh11.clone();
mesh12.position.x = -41;

// IRIS

var mesh13 = new THREE.Mesh(geometry1, material2);
mesh13.scale.set(.5,.5,.5);
mesh13.position.x = 50;
mesh13.position.y = 26;
mesh13.position.z = 110;

var mesh14 = this.mesh13.clone();
mesh13.position.x = -50;

// EARS

var mesh15 = new THREE.Mesh(geometry1, material3);
mesh15.position.x = 60;
mesh15.position.y = 40;
mesh15.position.z = 60;

var mesh16 = new THREE.Mesh(geometry2, material3);
mesh16.position.x = 80;
mesh16.position.y = 40;
mesh16.position.z = 60;

var mesh17 = this.mesh15.clone();
mesh17.position.x = -60;

var mesh18 = this.mesh16.clone();
 mesh18.position.x = -80;

// MOUTH
var mesh19 = new THREE.Mesh(geometry1, material2);
mesh19.scale.set(1,1,1);
mesh19.position.y = -40;
mesh19.position.z = 141;

// LIPS
var mesh20 = new THREE.Mesh(geometry1, material2);
mesh20.scale.set(2,.5,1);
mesh20.position.y = -55;
mesh20.position.z = 140;

// LEGS

var mesh21 = new THREE.Mesh(geometry1, material3);
 mesh21.position.x = -40;
 mesh21.position.y = -60;
 mesh21.position.z = -40;

var  mesh22 = this. mesh21.clone();
 mesh22.position.x = 40;

var  mesh23 = this. mesh21.clone();
 mesh23.position.z = 40;

var  mesh24 = this. mesh23.clone();
 mesh24.position.x = 40;
/*
//configure the position of the mesh
var mesh1 = new THREE.Mesh( geometry, material );
mesh1.position.z = -1000;
mesh1.position.y = -50;

var mesh2 = new THREE.Mesh( geometry1, material1 );
mesh2.position.z = -1000;
mesh2.position.x = -100;
mesh2.position.y = -50;

var mesh3 = new THREE.Mesh( geometry2, material );
mesh3.position.z = -1000;
mesh3.position.x = -140;
mesh3.position.y = -50;

var mesh4 = new THREE.Mesh( geometry1, material1 );
mesh4.position.z = -1000;
mesh4.position.x = 100;
mesh4.position.y = -50;

var mesh5 = new THREE.Mesh( geometry2, material );
mesh5.position.z = -1000;
mesh5.position.x = 140;
mesh5.position.y = -50;

var mesh6 = new THREE.Mesh( geometry5, material1 );
mesh6.position.z = -1000;
mesh6.position.x = 0;
mesh6.position.y = -50;

var mesh7 = new THREE.Mesh( geometry6, material1 );
mesh7.position.z = -1000;
mesh7.position.x = 0;
mesh7.position.y = -50;

var mesh8 = new THREE.Mesh( geometry1, material );
mesh8.position.z = -1000;
mesh8.position.x = 0;
mesh8.position.y = 50;

var mesh9 = new THREE.Mesh( geometry7, material );
mesh9.position.z = -1000;
mesh9.position.x = 0;
mesh9.position.y = 50;

var mesh10 = new THREE.Mesh( geometry7, material );
mesh10.position.z = -1000;
mesh10.position.x = -100;
mesh10.position.y = -50;

var mesh11 = new THREE.Mesh( geometry7, material );
mesh11.position.z = -1000;
mesh11.position.x = 100;
mesh11.position.y = -50;

var mesh12 = new THREE.Mesh( geometry2, material );
mesh12.position.z = -1000;
mesh12.position.x = 0;
mesh12.position.y = 100;
// ------------------------------------------------

*/

scene.add(this. mesh1);
  scene.add(this.mesh2);
scene.add(this.mesh3);
scene.add(this.mesh4);
scene.add(this.mesh5);
  scene.add(this.mesh6);
  scene.add(this.mesh7);
  scene.add(this.mesh8);
  scene.add(this.mesh9);
  scene.add(this.mesh10);

  scene.add(this.mesh11);
scene.add(this.mesh12);
scene.add(this.mesh13);
  scene.add(this.mesh14);
  scene.add(this.mesh15);
  scene.add(this.mesh16);
  scene.add(this.mesh17);
scene.add(this.mesh18);
  scene.add(this.mesh19);
  scene.add(this.mesh20);
  scene.add(this.mesh21);
scene.add(this.mesh22);

  scene.add(this.mesh23);
  scene.add(this.mesh24);



/*
// Add mesh to scene
scene.add( mesh1 );
scene.add( mesh2 );
scene.add( mesh3 );
scene.add( mesh4 );
scene.add( mesh5 );
scene.add( mesh6 );
scene.add( mesh7 );
scene.add( mesh8 );
scene.add( mesh9 );
scene.add( mesh10 );
scene.add( mesh11 );
scene.add( mesh12 );
*/
var rot = 0;

// Render Loop
var render = function () {
  requestAnimationFrame( render );

  rot += 0.01;

  mesh3.rotation.x = rot+1; //Continuously rotate the mesh
  mesh3.rotation.y = rot+1;

  // Render the scene
  renderer.render(scene, camera);
};

render();
 //Run the function render
