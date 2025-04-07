export function importBar(texturePath) {
    document.addEventListener("DOMContentLoaded", function () {
        const htmlContent = `
            <div class="bar">
                <img src="${texturePath}" alt="">
                <div class="separador"></div>
                <div class="social">
                    <a href="">
                        <img src="https://i.postimg.cc/0y8CrCMh/discord.png" alt="">
                        <h4>Discord</h4>
                    </a>
                    <a href="">
                        <img src="https://i.postimg.cc/d328V7qq/youtube.png" alt="">
                        <h4>Youtube</h4>
                    </a>
                    <a href="">
                        <img src="https://i.postimg.cc/nrb4xKfR/tiktok.png" alt="">
                        <h4>Tiktok</h4>
                    </a>
                    <a href="">
                        <img src="https://i.postimg.cc/BnMBF12b/help.png" alt="">
                        <h4>Support</h4>
                    </a>
                    <a href="">
                        <img src="https://i.postimg.cc/QMzg4G4r/dark.png" alt="">
                        <h4>Dark</h4>
                    </a>
                    <a class="extra-button" href="https://launch.minecraft.net/profile/Angeldfire2" target="_blank">
                        <img src="https://i.postimg.cc/HWX02Nbf/perfil.png" alt="">
                        <h2>Angeldfire2</h2>
                    </a>
                </div>
            </div>
            <div class="bar_background"></div>
            <main class="social-main">
                <div class="social-phone">
                    <ul style="list-style-type: none;">
                        <li>
                            <a href="">
                                <img src="https://i.postimg.cc/0y8CrCMh/discord.png" alt="">
                                <h4>Discord</h4>
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <img src="https://i.postimg.cc/d328V7qq/youtube.png" alt="">
                                <h4>Youtube</h4>
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <img src="https://i.postimg.cc/nrb4xKfR/tiktok.png" alt="">
                                <h4>Tiktok</h4>
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <img src="https://i.postimg.cc/BnMBF12b/help.png" alt="">
                                <h4>Support</h4>
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <img src="https://i.postimg.cc/QMzg4G4r/dark.png" alt="">
                                <h4>Dark</h4>
                            </a>
                        </li>
                        <li>
                            <a class="extra-button" href="https://launch.minecraft.net/profile/Angeldfire2" target="_blank">
                                <img src="https://i.postimg.cc/HWX02Nbf/perfil.png" alt="">
                                <h2>Angeldfire2</h2>
                            </a>
                        </li>
                    </ul>
                </div>
            </main>
        `;
        document.body.insertAdjacentHTML("afterbegin", htmlContent);
    });
}


const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);
const loader = new THREE.CubeTextureLoader();
const texture = loader.load([
    'https://i.postimg.cc/43zQnhLY/panorama-2.png',
    'https://i.postimg.cc/hjs81Rqg/panorama-0.png',
    'https://i.postimg.cc/43zQnhLY/panorama-2.png',
    'https://i.postimg.cc/25pxzxwp/panorama-3.png',
    'https://i.postimg.cc/76wMzYdm/panorama-1.png',
    'https://i.postimg.cc/25pxzxwp/panorama-3.png'
]);

scene.background = texture;

function animate() {
    requestAnimationFrame(animate);
    camera.rotation.y += 0.0005;
    renderer.render(scene, camera);
}
animate();
window.addEventListener('resize', () => {
    renderer.setSize(window.innerWidth, window.innerHeight + 100);
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
});