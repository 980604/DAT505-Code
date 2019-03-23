
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


// Create some toruses Mesh with normal material ---------
var geometry = new THREE.TorusGeometry( 50, 6, 16, 100 );
var geometry1 = new THREE.TorusGeometry( 100, 6, 16, 100 );
var geometry2 = new THREE.TorusGeometry( 200, 9, 16, 100 );



var geometry5 = new THREE.BoxBufferGeometry( 50, 50, 50 );
var geometry6 = new THREE.BoxBufferGeometry( 150, 150, 150 );
var geometry7 = new THREE.TorusGeometry( 150, 3, 16, 100 );


var material = new THREE.MeshNormalMaterial( {  } );
var material1 = new THREE.MeshNormalMaterial( {wireframe:true } );



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

var rot = 0;

// Render Loop
var render = function () {
  requestAnimationFrame( render );

  rot += 0.01;


  mesh6.rotation.x = rot+1; //Continuously rotate the mesh
  mesh6.rotation.y = rot+1;

  mesh7.rotation.x = rot; //Continuously rotate the mesh
  mesh7.rotation.y = rot;

  // Render the scene
  renderer.render(scene, camera);
};

render();
 //Run the function render
