<script lang='ts'>
  import { onMount } from 'svelte'
  import { globeDots } from './globedots'
  import * as THREE from 'three'
  import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'

  let spinFactor = 0
  
  // adapted from (but using points and buffer geometry not sphere geometry): 
  // http://v3.timcchang.com/threejs-globe#setting-up
  let container: HTMLDivElement
  let controls: any
  // Initialize the scene, camera, and renderer
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 1000)
  const renderer = new THREE.WebGLRenderer()
  const geometry = new THREE.BufferGeometry();
  const material = new THREE.PointsMaterial({
		color: 0x1a4a11,
		size: 1.25
	});

  const globeRadius = 100;
  const globeWidth = 4098 / 2;
  const globeHeight = 1968 / 2;

  function convertFlatCoordsToSphereCoords(x: number, y: number, w: number, h: number) {
      let latitude = ((x - w) / w) * -180;
      let longitude = ((y - h) / h) * -90;
      latitude = (latitude * Math.PI) / 180;
      longitude = (longitude * Math.PI) / 180;
      const radius = Math.cos(longitude) * globeRadius;
  
      return [
        Math.cos(latitude) * radius,
        Math.sin(longitude) * globeRadius,
        Math.sin(latitude) * radius
      ]
    }
  const points = globeDots.points.map(({ x, y }) => {
    return convertFlatCoordsToSphereCoords(
      x,
      y,
      globeWidth,
      globeHeight
    )
  }).flat()

	const positions = new Float32Array(points);
  geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
  
  // Add the renderer to the container and set its size
  onMount(() => {
    //Orbit controls
    controls = new OrbitControls(camera, container);
    controls.enablePan = true
    controls.enableRotate = true
    controls.autoRotate = true
    container.appendChild(renderer.domElement);
    renderer.setSize(window.innerWidth, window.innerHeight)
  });

  // Add the sphere to the scene
  const sphere = new THREE.Points(geometry, material);
  scene.add(sphere)

  camera.position.z = -225
  camera.position.x = 15

  // Animate the globe
  function animate() {
    requestAnimationFrame(animate);
    sphere.rotation.y += spinFactor;
    renderer.render(scene, camera);
  }
  animate();
</script>

<div bind:this={container}></div>
<input type="range" min="0" max="0.1" step="0.0005" bind:value={spinFactor}>