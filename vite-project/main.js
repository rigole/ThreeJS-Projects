import './style.css'
import javascriptLogo from './javascript.svg'
import { setupCounter } from './counter.js'

import * as THREE from 'https://unpkg.com/three@0.146.0/build/three.module.js';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, innerWidth / innerHeight, 0.1, 1000)

const renderer = new THREE.WebGLRenderer()/*
console.log(scene)
console.log(camera)
console.log(renderer)

*/
renderer.setSize(innerWidth, innerHeight)
renderer.setPixelRatio(devicePixelRatio)
document.body.appendChild(renderer.domElement)

const boxGeometry = new THREE.BoxGeometry(1, 1, 1)

const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 })
/*
console.log(boxGeometry)
console.log(material)
*/
const mesh = new THREE.Mesh(boxGeometry, material)


//console.log(mesh)

scene.add(mesh)




camera.position.z = 5
const planeGeometry = new THREE.PlaneGeometry(5, 5, 10, 10)

const planeMaterial = new THREE.MeshBasicMaterial({ 
    color: 0xff0000,
    side: THREE.DoubleSide 
})

const planeMesh =  new THREE.Mesh(planeGeometry, planeMaterial)

scene.add(planeMesh)

console.log(planeGeometry);
function animate (){
    requestAnimationFrame(animate)
    renderer.render(scene, camera)
    mesh.rotation.x += 0.01
    mesh.rotation.y += 0.01
    planeMesh.rotation.x += 0.01
}

animate()


//setupCounter(document.querySelector('#counter'))