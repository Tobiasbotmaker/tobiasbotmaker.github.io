var gameData = {
    money: 0,
    moneyPerClick: 1,
    cursors: 0,
    cursorvalue: 1,
    cursorprice: 20,
    grandmas: 0,
    grandmavalue: 1,
    grandmaprice: 100,
}

function moneyPerSecond() {
    hejsa = grandmas + cursors
    document.getElementById("moneyPerSeconds").innerHTML = hejsa + " $ / s"
}


function clickMig() {
    gameData.money += gameData.moneyPerClick
    document.getElementById("hej").innerHTML = gameData.money + " $"
}


function buyCursor() {
    if(gameData.money >= gameData.cursorprice) {
        gameData.money -= gameData.cursorprice
        gameData.cursorprice *= 1.2
        gameData.cursorprice = Math.round(gameData.cursorprice)
        gameData.cursors++
        document.getElementById("cursorprices").innerHTML = "Buy cursor: " + gameData.cursorprice + "$ (" + gameData.cursors + ")"
    }
}


function buyGrandma() {
    if(gameData.money >= gameData.grandmaprice) {
        gameData.money -= gameData.grandmaprice
        gameData.grandmaprice *= 1.2
        gameData.grandmaprice = Math.round(gameData.grandmaprice)
        gameData.grandmas++
        document.getElementById("grandmaprices").innerHTML = "Buy grandma: " + gameData.grandmaprice + "$ (" + gameData.grandmas + ")"
    }
}


setInterval(function(){
    gameData.money += gameData.grandmavalue * gameData.grandmas
}, 1000)

setInterval(function(){
    document.getElementById("hej").innerHTML = gameData.money + " $"
    document.getElementById("moneyPerSeconds").innerHTML = (gameData.grandmas * gameData.grandmavalue) + (gameData.cursorvalue * gameData.cursors / 10) + " $ / s"
    document.getElementById("cursorprices").innerHTML = "Buy cursor: " + gameData.cursorprice + "$ (" + gameData.cursors + ")"
    document.getElementById("grandmaprices").innerHTML = "Buy grandmas: " + gameData.grandmaprice + "$ (" + gameData.grandmas + ")"
}, 1000)



setInterval(function(){ 
    gameData.money += gameData.cursorvalue * gameData.cursors
    document.getElementById("hej").innerHTML = gameData.money + " $"
}, 10000);


setInterval(function(){
    gameData.money
    document.getElementById("ok").innerHTML = gameData.money + " $"
}, 2000);


var saveGameLoop = window.setInterval(function() {
    localStorage.setItem("save", JSON.stringify(gameData))
  }, 1000)

  var savegame = JSON.parse(localStorage.getItem("save"))
if (savegame !== null) {
  gameData = savegame
}



function resetGame() {
    var r = confirm("Are you sure?") ;{
        if(r == true) {
            gameData.money = 0
            gameData.moneyPerClick = 1
            gameData.cursors = 0
            gameData.cursorvalue = 1
            gameData.cursorprice = 20
            gameData.grandmas = 0
            gameData.grandmavalue = 1
            gameData.grandmaprice = 100
        }
    }
}