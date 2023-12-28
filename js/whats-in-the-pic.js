'use strict'

var gCurrQuestIdx = 0
// var gNextId = 0

var gQuests = [
    { id: 1, opts: ['Buick', 'Skoda'], correctOptIdx: 0 },
    { id: 2, opts: ['Instagram', 'Twitter'], correctOptIdx: 1 },
    { id: 3, opts: ['Nike', 'Zara'], correctOptIdx: 0 }
]


function onInitGame() {
    // gQuests = createQuests()
    
    document.querySelector('.game').style.display = 'block'
    document.querySelector('.victory').style.display = 'none'

    gCurrQuestIdx = 0
    renderQuest()

}



function renderQuest() {

    const currQuest = gQuests[gCurrQuestIdx]
    console.log('currQuest', currQuest);

    // const elImg = currQuest.id Img\1.jpg
    document.querySelector('img').src = `html/img/${currQuest.id}.jpg` 


    const answerOpts = currQuest.opts.length
    var strHtml = ''

    for (var i = 0; i < answerOpts; i++) {
        var optsTxt = currQuest.opts[i]

        strHtml += `<button onclick="checkAnswer(${i})">
        ${optsTxt}
        </button>`
    }

    var elAnswers = document.querySelector('.options')
    elAnswers.innerHTML = strHtml

}


function checkAnswer(optIdx) {
    console.log('optIdx', optIdx);
    var currQuest = gQuests[gCurrQuestIdx]

    if (optIdx === currQuest.correctOptIdx) {
        if (gCurrQuestIdx === gQuests.length - 1) {

            alert('Horray, you did it!')

            document.querySelector('.victory').style.display = 'block'
            document.querySelector('.game').style.display = 'none'

            gCurrQuestIdx = 0
            renderQuest(gQuests)

        } else {
            gCurrQuestIdx++
            renderQuest(gQuests)
        }
    }
}

function nextQuest() {

}

function restartGame() {
    gCurrQuest = 0
    renderQuest()
}

function endGame() {
    const elQuest = document.querySelector('.quest')
    const elVictory = document.querySelector('.victory-hidden')

    elQuest.classList.toggle('hidden')
    elVictory.classList.toggle('hidden')

}

// function createQuest() {
//     return {
//         id: gNextId++,
//         opts: [option01, option2],
//         currectOptIdx: option01
//     }
// }