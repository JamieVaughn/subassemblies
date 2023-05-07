<script lang="ts">
  import { onMount } from 'svelte';
  import * as THREE from 'three'
  import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'

  let container: HTMLDivElement
  let controls: any

  // Initialize the scene, camera, and renderer
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 1000)
  const renderer = new THREE.WebGLRenderer()

  const geometry = new THREE.PlaneGeometry(150, 150)
  const material = new THREE.MeshBasicMaterial({
     color: 0x410ab1, 
    //  side: THREE.DoubleSide,
    wireframe: true
  })
  const plane = new THREE.Mesh(geometry, material)

  onMount(() => {
    //Orbit controls
    controls = new OrbitControls(camera, container);
    controls.enablePan = true
    controls.enableRotate = true
    controls.autoRotate = true
    container.appendChild(renderer.domElement);
  });
  const size = 150;
  const divisions = 10;

  const gridHelper = new THREE.GridHelper( size, divisions );
  scene.add( gridHelper );
  scene.add(plane)

  camera.position.z = 325
  camera.position.x = 50
  plane.rotation.x = 1.55
  plane.position.y = 1.5
  
  renderer.setSize(window.innerWidth, window.innerHeight / 2)

  function animate() {
    requestAnimationFrame(animate);
    // plane.rotation.y += 0.005;
    renderer.render(scene, camera);
  }
  animate();
</script>

<div bind:this={container}></div>