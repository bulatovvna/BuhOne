// slider start

const sliderRounds = document.querySelectorAll('.slider_round .round')
const sliderQuadrat = document.querySelector('.slider_quadrat')
const prevBtn = document.querySelector('.prev')
const nextBtn = document.querySelector('.next')
const sliderContent = document.querySelector('.buch_services_content')

let currentSlide = 0

const slides = [
    {
      title: 'Бухгалтерские услуги в вашем городе',
      presentationButtonText: 'Наша презентация'
    },
    {
      title: 'Лучшие услуги в городе',
      presentationButtonText: 'Кликни здесь'
    },
    {
      title: 'Дорогие услуги в городе',
      presentationButtonText: 'Подробнее'
    },
    {
      title: 'Бюджетные услуги в городе',
      presentationButtonText: 'Смотреть'
    }
]

function showSlide(index){
    sliderRounds.forEach(round => round.classList.remove('active'))

    sliderRounds[index].classList.add('active')

    sliderContent.querySelector('h1').innerText = slides[index].title
    sliderContent.querySelector('.our_presentation').innerText = slides[index].presentationButtonText
}

sliderRounds.forEach((round, index) => {
    round.addEventListener('click', () => {
        currentSlide = index
        showSlide(currentSlide)
    })
})

prevBtn.addEventListener('click', (event) => {
    if(event.target.innerText = '<'){
        currentSlide = (currentSlide - 1 + sliderRounds.length) % sliderRounds.length
    }
    showSlide(currentSlide)
})

nextBtn.addEventListener('click', (event) => {
    if(event.target.innerText = '>') {
        currentSlide = (currentSlide + 1) % sliderRounds.length
    }
    showSlide(currentSlide)
})

showSlide(currentSlide)

// slider end

