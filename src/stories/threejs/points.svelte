<script lang="ts">
	import { onMount } from 'svelte';
	import * as THREE from 'three';
	import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

	let container: HTMLDivElement;
	let controls: any;
	const scene = new THREE.Scene();
	const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 1000);
	const renderer = new THREE.WebGLRenderer();
	const geometry = new THREE.BufferGeometry();

	// define the positions of the vertices as a Float32Array
  const seed = [
    0, 0, 1,
    0, 1, 0,
    1, 0, 0,
    0, 1, 1,
    1, 0, 1,
    1, 1, 0,
    1, 1, 1,
    -1, -1, 1,
    -1, -1, 0,
    -1, 0, 1,
    0, -1, 1,
    -1, 1, 1,
    -1, 1, 0,
    -1, 0, 1,
    0, 1, -1,
    1, -1, 1,
    1, -1, 0,
    1, 0, -1,
  ]
  let arr = [1, 2,  3, 4, 5, 6,  7, 8, 9, 10].map((x) => ([...seed.map(s => s * x * 10), ...seed.map(s => s * x * -10)])).flat()
  const positions = new Float32Array(arr)
	// const positions = new Float32Array([
  //   0, 0, 0, 
  //   10, 0, 0, 
  //   0, 10, 0, 
  //   0, 0, 10,
  //   10, 10, 0,
  //   10, 0, 10,
  //   0, 10, 10,
  //   10, 10, 10
  // ])

	// set the positions attribute of the geometry to the Float32Array
	geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

	// create a material for the points
	const material = new THREE.PointsMaterial({
		color: 0xffffff,
		size: 5
	});

	// create a points object with the buffer geometry and material
	const points = new THREE.Points(geometry, material);

	// add the points object to the scene
	scene.add(points);

	// create a points object with the geometry and material
	onMount(() => {
		//Orbit controls
		controls = new OrbitControls(camera, container);
		controls.enablePan = true;
		controls.enableRotate = true;
		controls.autoRotate = true;
		container.appendChild(renderer.domElement);
		renderer.setSize(window.innerWidth, window.innerHeight);
	});

  camera.position.z = -550


  // Animate the globe
  function animate() {
    requestAnimationFrame(animate);
    // sphere.rotation.y += 0.005;
    renderer.render(scene, camera);
  }
  animate();
</script>

<div bind:this={container} />
