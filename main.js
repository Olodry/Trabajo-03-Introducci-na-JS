const scene = new THREE.Scene()
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 )
const renderer = new THREE.WebGLRenderer({ canvas: document.querySelector('#bg'),})
var totalObjects = 40000;
var movementSpeed = 10;

renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize( window.innerWidth, window.innerHeight )


camera.position.z = 20;


var geometry2 = new THREE.Geometry();

for (i = 0; i < totalObjects; i ++) 
{ 
  var vertex = new THREE.Vector3();
  vertex.x = Math.random()*40000-20000;
  vertex.y = Math.random()*7000-3500;
  vertex.z = Math.random()*7000-3500;
  geometry2.vertices.push( vertex );
}

var material2 = new THREE.ParticleBasicMaterial( { size: 5 });
var particles = new THREE.ParticleSystem( geometry2, material2 );
    
scene.add( particles ); 

const earthTexture = new THREE.TextureLoader().load('tierra.jpg');
const sunTexture = new THREE.TextureLoader().load('sol.jpg');
const mercuryTexture = new THREE.TextureLoader().load('mercurio.jpg');
const venusTexture = new THREE.TextureLoader().load('venus.jpg');
const marsTexture = new THREE.TextureLoader().load('marte.jpg');
const jupiterTexture = new THREE.TextureLoader().load('jupiter.jpg');
const saturnTexture = new THREE.TextureLoader().load('saturno.jpg');
const uranusTexture = new THREE.TextureLoader().load('urano.jpg');
const neptuneTexture = new THREE.TextureLoader().load('neptuno.jpg');
const moonTexture = new THREE.TextureLoader().load('luna.jpg');

var geometry3= new THREE.SphereGeometry( 7, 26, 15 )
var material3 = new THREE.MeshBasicMaterial( { map: sunTexture })
var sun = new THREE.Mesh ( geometry3, material3 )
scene.add( sun )

var geometry4= new THREE.SphereGeometry( 1, 26, 15 )
var material4 = new THREE.MeshBasicMaterial( { map: mercuryTexture })
var mercury = new THREE.Mesh ( geometry4, material4 )
scene.add( mercury )

var geometry5= new THREE.SphereGeometry( 1.5, 26, 15 )
var material5 = new THREE.MeshBasicMaterial( { map: venusTexture })
var venus = new THREE.Mesh ( geometry5, material5 )
scene.add( venus )

var geometry = new THREE.SphereGeometry( 2, 26, 15 )
var material = new THREE.MeshBasicMaterial( { map: earthTexture })
var earth = new THREE.Mesh ( geometry, material )
scene.add( earth )

var geometry6= new THREE.SphereGeometry( 1.9, 26, 15 )
var material6 = new THREE.MeshBasicMaterial( { map: marsTexture })
var mars = new THREE.Mesh ( geometry6, material6 )
scene.add( mars )

var geometry7= new THREE.SphereGeometry( 3, 26, 15 )
var material7 = new THREE.MeshBasicMaterial( { map: jupiterTexture })
var jupiter = new THREE.Mesh ( geometry7, material7 )
scene.add( jupiter )

var geometry8= new THREE.SphereGeometry( 2.5, 26, 15 )
var material8 = new THREE.MeshBasicMaterial( { map: saturnTexture })
var saturn = new THREE.Mesh ( geometry8, material8 )
scene.add( saturn )

var geometry9= new THREE.SphereGeometry( 2, 26, 15 )
var material9 = new THREE.MeshBasicMaterial( { map: uranusTexture })
var uranus = new THREE.Mesh ( geometry9, material9 )
scene.add( uranus )

var geometry10= new THREE.SphereGeometry( 2, 26, 15 )
var material10 = new THREE.MeshBasicMaterial( { map: neptuneTexture })
var neptune = new THREE.Mesh ( geometry10, material10 )
scene.add( neptune )


var ambientLight = new THREE.AmbientLight ( 0xffffff, 0.2)
scene.add( ambientLight )

var pointLight = new THREE.PointLight( 0xffffff, 1 );
pointLight.position.set( 25, 50, 25 );
scene.add( pointLight );

sun.position.setX(-30);
mercury.position.setX(-17);
venus.position.setX(-12);
earth.position.setX(-7);
mars.position.setX(-2);
jupiter.position.setX(4);
saturn.position.setX(11);
uranus.position.setX(18);
neptune.position.setX(25);


function moveCamera(){
  const t = document.body.getBoundingClientRect().top;
  camera.position.z = t * -0.01;
  camera.position.x = t * -0.0002;
  camera.position.y = t * -0.0002;
}


function animate() {
	requestAnimationFrame( animate )
  var time = Date.now() * 0.0005;
	
	earth.rotation.y += 0.002;
  sun.rotation.y += 0.001;
  mercury.rotation.y += 0.002;
  venus.rotation.y += 0.002;
  mars.rotation.y += 0.002;
  jupiter.rotation.y += 0.002;
  saturn.rotation.y += 0.002;
  uranus.rotation.y += 0.002;
  neptune.rotation.y += 0.002;
	renderer.render( scene, camera )
}
animate();