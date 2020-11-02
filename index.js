
function randomInt() {
    let correctnumber  = Math.floor(Math.random() * 10)
    return correctnumber 
}


function getUserGuess() {
    const stringValue = document.getElementById('user-input').value
    return parseInt(stringValue, 10)
}


document.addEventListener('keyup', function (event) {
    if (event.key === 'Enter') {
        const guess = getGuess()
        return guess
    }
})




    while (addEventListener != randomInt) 
    {

        if (addEventListener < randomInt)
        {
            alert ("That was wrong, its to low")
            document.getElementById('user-input').value = ''
        }
        else if (getUserGuess > randomInt)
        {
            alert ("That was wrong, its to high")
            document.getElementById('user-input').value = ''
        }
    }

alert ("That was right")