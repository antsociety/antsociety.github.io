const buttons = document.querySelectorAll('button')

Array.from(buttons).map(function(item) {
    item.addEventListener('click', function(e) {
    if(e.target.innerText === 'EN') {
        renderHero(texts, hero)
        renderFooter(texts, footer)
        anime()
    } else {
        renderHero(textos, hero)
        renderFooter(textos, footer)
        anime()
    }
    })
})

const texts = {
    heroTitle1: 'Custom',
    heroTitle2: 'web development',
    heroTitle3: 'solutions!',
    heroText: 'We are a collective  focused in transforming ideas into products that add value to your user through memorable experiences.',
    footerText: 'We take care of your projects, in an organic way from the conception, delivering fast and avoiding resources waste.',
    footerHello: 'Lets build something awesome?'
}

const textos = {
    heroTitle1: 'Soluções em',
    heroTitle2: 'desenvolvimento web',
    heroTitle3: 'sob medida!',
    heroText: 'Somos um coletivo focado em transformar idéias, em produtos que agreguem valor ao usuário, por meio de experiências memoráveis.',
    footerText: 'Cuidamos do seu projeto de forma orgânica desde a concepção, realizando entregas ágeis e evitando desperdício de recursos.',
    footerHello: 'Vamos construir algo incrível?'
}

function createHero(texts) {
    return (`
    <h1 class="hero__title">
        <p>${texts.heroTitle1}</p>
        <p>${texts.heroTitle2}</p>
        <p>${texts.heroTitle3}</p>
    </h1>
    <section class="hero__section">
        <img class="hero__image" src="/hero.svg" alt="Hero">
        <p class="hero__text">${texts.heroText}</p>
    </section>
    `)
}

function createFooter(texts) {
    return (`
    <div class="footer__text">
        <p>${texts.footerText}</p>
        <div class="cube"></div>
    </div>
    <div class="footer__hello">
        <p class="footer__contact">${texts.footerHello}</p>
        <a class="footer__link" href="mailto:hello@antsociety.dev">hello@antsociety.dev</a>
    </div>
    `)
}

function renderHero(texts, element) {
    const markup = createHero(texts)
    element.innerHTML = markup
}

function renderFooter(texts, element) {
    const markup2 = createFooter(texts)
    element.innerHTML = markup2
}

const hero = document.querySelector('.hero')
const footer = document.querySelector('footer')

renderHero(textos, hero)
renderFooter(textos, footer)

const anime = () => {

    const stage = document.querySelector('.cube')
    let scene, camera, renderer, cube

    const animateCube = () => {
        cube.rotation.x += 0.1
        cube.rotation.y += 0.1
    }

    const render = () => {
        requestAnimationFrame(render)
        animateCube()

        renderer.render(scene, camera)
    }

    const createLight = () => {
        const spotLight = new THREE.SpotLight({color: 'silver'})
        spotLight.position.set(10, 20, 20)
        spotLight.castShadow = true
        scene.add(spotLight)
    }

    const createACube = () => {
        const geometry = new THREE.BoxBufferGeometry(1, 1, 1)
        const material = new THREE.MeshLambertMaterial({color: 'gray'})
        cube = new THREE.Mesh(geometry, material)

        cube.castShadow = true

        scene.add(cube)
    }

    scene = new THREE.Scene()
    camera = new THREE.PerspectiveCamera()

    renderer = new THREE.WebGLRenderer({ alpha: true })
    renderer.setSize(70, 70)
    stage.appendChild(renderer.domElement)

    camera.position.z = 3

    createACube()
    createLight()

    render()
}

anime()