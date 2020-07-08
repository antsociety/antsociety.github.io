const buttons = document.querySelectorAll('button')

Array.from(buttons).map(function(item) {
    item.addEventListener('click', function(e) {
    if(e.target.innerText === 'EN') {
        renderHero(texts, hero)
        renderFooter(texts, footer)
    } else {
        renderHero(textos, hero)
        renderFooter(textos, footer)
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
    footerText: 'Cuidamos do seu projeto de forma orgânica desde a concepção, realizando entregas agéis e evitando disperdício de recursos.',
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
    <p class="footer__text">${texts.footerText}</p>
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