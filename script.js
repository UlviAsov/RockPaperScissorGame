// Oyuna Başla
var startGame = document.querySelector('.startGame');
var title = document.querySelector('.title');
var btnContainer = document.querySelector('.btn-container');
startGame.onclick = function() {
    title.style.backgroundColor = 'transparent';
    startGame.style.visibility = 'hidden';
    setTimeout(function(){
        btnContainer.style.display = 'block';
    },1500)
}
// Seçim
var result = document.querySelector('.result');
var myChoices = document.querySelector('.myChoices');
var compyuterChoices = document.querySelector('.compyuterChoices');
var rock = document.querySelector('.rock');
var paper = document.querySelector('.paper');
var scissors = document.querySelector('.scissors');
var arr = ['rock.jfif','paper.png','scissors.jfif'];
var index = Math.floor(Math.random()*3);
var restart = document.querySelector('.restart')
var resultContent = document.querySelector('.result-content')
rock.onclick = function(){
    btnContainer.style.display = 'none';
    myChoices.style.backgroundImage = `url(./${arr[0]})`;
    compyuterChoices.style.backgroundImage = `url(./${arr[index]})`;
    myChoices.innerText = '';
    if(index == 0){
        result.style.visibility = 'visible';
        resultContent.innerText='Bərabərə!';
        resultContent.style.color = 'orange';
    }
    else if(index == 1){
        result.style.visibility = 'visible';
        resultContent.innerText = 'Uduzdun!';
        resultContent.style.color = 'red';
    }
    else{
        result.style.visibility = 'visible';
        resultContent.innerText('Təbriklər. Qalib Gəldin!!')
        resultContent.style.color = 'green';
    }

}
paper.onclick = function (){
    btnContainer.style.display = 'none';
    myChoices.style.backgroundImage =  `url(./${arr[1]})`;
    compyuterChoices.style.backgroundImage = `url(./${arr[index]})`;
    myChoices.innerText = '';
    if(index == 0){
        result.style.visibility = 'visible';
        resultContent.innerText='Təbriklər. Qalib Gəldin!!';
        resultContent.style.color = 'green';
    }
    else if(index == 1){
        result.style.visibility = 'visible';
        resultContent.innerText = 'Bərabərə!';
        resultContent.style.color = 'orange';
    }
    else{
        result.style.visibility = 'visible';
        resultContent.innerText = 'Uduzdun!';
        resultContent.style.color = 'red';
    }
}
scissors.onclick = function(){
    btnContainer.style.display = 'none';
    myChoices.style.backgroundImage =  `url(./${arr[2]})`;
    compyuterChoices.style.backgroundImage = `url(./${arr[index]})`;
    myChoices.innerText = '';
    if(index == 0){
        result.style.visibility = 'visible';
        resultContent.innerText = 'Uduzdun!';
        resultContent.style.color = 'red';
    }
    else if(index == 1){
        result.style.visibility = 'visible';
        resultContent.innerText='Təbriklər. Qalib Gəldin!';
        resultContent.style.color = 'green';
    }
    else{
        result.style.visibility = 'visible';
        resultContent.innerText = 'Bərabərə!';
        resultContent.style.color = 'orange';
    }
}
restart.onclick = function(){
    location.reload();
}

