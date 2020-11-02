
const numToguess =  randomInt();


function randomInt() {
    let correctnumber  = Math.floor(Math.random() * 101)
    return correctnumber 
}


function getUserGuess() 
{
    const stringValue = document.getElementById('user-input').value
    return parseInt(stringValue, 10)
}


document.addEventListener('keyup', function (event) 
{    
    if (event.key === 'Enter') 
    {
        const guess = getUserGuess()
        CheckNumber(guess)
    }
})


function CheckNumber(num)
{

        if (num < numToguess)
        {
            alert ("That was wrong, its to low")
            document.getElementById('user-input').value = ''
        }
        else if (num > numToguess)
        {
            alert ("That was wrong, its to high")
            document.getElementById('user-input').value = ''
        }
        else
        {
            alert ("That was right")
        }
}