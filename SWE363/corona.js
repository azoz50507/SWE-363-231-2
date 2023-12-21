import * as THREE from 'https://threejs.org/build/three.module.js';

// Create scene
const scene = new THREE.Scene();

// Create camera
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 5;

// Create renderer
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.getElementById('visualization-container').appendChild(renderer.domElement);

// Dummy data (replace with actual API data)
let covidData = {
    globalConfirmed: 1000000,
    globalRecovered: 500000,
    globalDeaths: 50000,
};

// Create 3D objects based on API data
const createObjects = () => {
    // Clear previous objects
    scene.children = [];

    // Example: Create a cube for confirmed cases
    const cubeGeometry = new THREE.BoxGeometry();
    const cubeMaterial = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    const confirmedCube = new THREE.Mesh(cubeGeometry, cubeMaterial);
    confirmedCube.position.x = -2;
    confirmedCube.scale.y = covidData.globalConfirmed / 100000;
    scene.add(confirmedCube);

    // Example: Create a sphere for recovered cases
    const sphereGeometry = new THREE.SphereGeometry();
    const sphereMaterial = new THREE.MeshBasicMaterial({ color: 0x0000ff });
    const recoveredSphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
    recoveredSphere.position.x = 2;
    recoveredSphere.scale.y = covidData.globalRecovered / 100000;
    scene.add(recoveredSphere);

    // Example: Create a cone for deaths
    const coneGeometry = new THREE.ConeGeometry();
    const coneMaterial = new THREE.MeshBasicMaterial({ color: 0xff0000 });
    const deathsCone = new THREE.Mesh(coneGeometry, coneMaterial);
    deathsCone.scale.y = covidData.globalDeaths / 100000;
    scene.add(deathsCone);
};

// Render function
const animate = () => {
    requestAnimationFrame(animate);

    // Fetch data from API (replace with actual API fetch)
    // Example: Fetch COVID-19 data from a hypothetical API
    fetch('https://example.com/api/covid19')
        .then(response => response.json())
        .then(data => {
            covidData = data;
            createObjects(); // Update visualization based on new data
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });

    // Rotate objects
    scene.children.forEach(object => {
        object.rotation.x += 0.01;
        object.rotation.y += 0.01;
    });

    // Render scene
    renderer.render(scene, camera);
};

// Initial setup
createObjects();
animate();
