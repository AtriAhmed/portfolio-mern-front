// public/threeScript.js
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { LineMaterial } from 'three/examples/jsm/lines/LineMaterial';
import { Wireframe } from 'three/examples/jsm/lines/Wireframe';
import { WireframeGeometry2 } from 'three/examples/jsm/lines/WireframeGeometry2';

let initialized = false;

export function initThree(container) {
    // Avoid initializing twice
    if (initialized) return;

    let wireframe, renderer, scene, camera, controls;
    let matLine;

    // Initialize Renderer
    renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setPixelRatio(window.devicePixelRatio);
    const { width, height } = container.getBoundingClientRect();
    renderer.setSize(width, height);
    renderer.setClearColor(0x000000, 0.0);

    // Remove existing canvas if it exists
    if (container.firstChild) {
        container.removeChild(container.firstChild);
    }

    container.appendChild(renderer.domElement);

    // Initialize Scene
    scene = new THREE.Scene();

    // Initialize Camera
    camera = new THREE.PerspectiveCamera(40, window.innerWidth / window.innerHeight, 1, 1000);
    camera.position.set(-50, 0, 50);

    // Initialize Controls
    controls = new OrbitControls(camera, renderer.domElement);
    controls.minDistance = 10;
    controls.maxDistance = 500;

    // Initialize Wireframe
    let geo = new THREE.IcosahedronGeometry(20, 1);
    const geometry = new WireframeGeometry2(geo);
    matLine = new LineMaterial({ color: "rgb(234,179,8)", linewidth: 5, dashed: false });
    wireframe = new Wireframe(geometry, matLine);
    wireframe.computeLineDistances();
    wireframe.scale.set(1, 1, 1);
    scene.add(wireframe);

    // Handle Window Resize
    window.addEventListener('resize', () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth / 2, window.innerHeight / 2);
    });




    // Animation Loop
    function animate() {
        requestAnimationFrame(animate);
        // Rotate the wireframe object
        wireframe.rotation.x += 0.01;
        wireframe.rotation.y += 0.01;
        renderer.render(scene, camera);
    }
    animate();

    initialized = true;
}

export function cleanupThree(container) {
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
}
