var gameData = {
    money: 0,
    moneyPerClick: 1,
    cursors: 0,
    cursorvalue: 1,
    cursorprice: 15,
    grandmas: 0,
    grandmavalue: 1,
    grandmaprice: 100,
    farms: 0,
    farmvalue: 8,
    farmprice: 1000,
}

var gameData2 = {
    miner: 0,
    minerværdi: 50,
    minerpris: 12000,
}

function clickMig() {
    gameData.money += gameData.moneyPerClick
    document.getElementById("hej").innerHTML = gameData.money + " $"
}


function buyCursor() {
    if(gameData.money >= gameData.cursorprice) {
        gameData.money -= gameData.cursorprice
        gameData.cursorprice *= 1.15
        gameData.cursorprice = Math.round(gameData.cursorprice)
        gameData.cursors++
        document.getElementById("cursorprices").innerHTML = "Buy cursor: " + gameData.cursorprice + "$ (" + gameData.cursors + ")"
    }
}


function buyGrandma() {
    if(gameData.money >= gameData.grandmaprice) {
        gameData.money -= gameData.grandmaprice
        gameData.grandmaprice *= 1.15
        gameData.grandmaprice = Math.round(gameData.grandmaprice)
        gameData.grandmas++
        document.getElementById("grandmaprices").innerHTML = "Buy grandma: " + gameData.grandmaprice + "$ (" + gameData.grandmas + ")"
    }
}

function buyFarm() {
    if(gameData.money >= gameData.farmprice) {
        gameData.money -= gameData.farmprice
        gameData.farmprice *= 1.15
        gameData.farmprice = Math.round(gameData.farmprice)
        gameData.farms++
        document.getElementById("farmprices").innerHTML = "Buy farm: " + gameData.farmprice + "$ (" + gameData.farms + ")"
    }
}

function buyMiner() {
    if(gameData.money >= gameData2.minerpris) {
        gameData.money -= gameData2.minerpris
        gameData2.minerpris *= 1.15
        gameData2.minerpris = Math.round(gameData2.minerpris)
        gameData2.miner++
        document.getElementById("minerprices").innerHTML = "Buy miner: " + gameData2.minerpris + "$ (" + gameData2.miner + ")"
    }
}


setInterval(function(){
    gameData.money += gameData.grandmavalue * gameData.grandmas
    gameData.money += gameData.farmvalue * gameData.farms
    gameData.money += gameData2.miner * gameData2.minerværdi
}, 1000)

setInterval(function(){
    document.getElementById("hej").innerHTML = gameData.money + " $"
    document.getElementById("moneyPerSeconds").innerHTML = (gameData2.miner * gameData2.minerværdi) + (gameData.farms * gameData.farmvalue) + (gameData.grandmas * gameData.grandmavalue) + (gameData.cursorvalue * gameData.cursors / 10) + " $ / s"
    document.getElementById("cursorprices").innerHTML = "Buy cursor: " + gameData.cursorprice + "$ (" + gameData.cursors + ")"
    document.getElementById("grandmaprices").innerHTML = "Buy grandma: " + gameData.grandmaprice + "$ (" + gameData.grandmas + ")"
    document.getElementById("farmprices").innerHTML = "Buy farm: " + gameData.farmprice + "$ (" + gameData.farms + ")"
    document.getElementById("minerprices").innerHTML = "Buy miner: " + gameData2.minerpris + "$ (" + gameData2.miner + ")"
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
    localStorage.setItem("save", JSON.stringify(gameData, gameData2))
  }, 1000)

  var savegame = JSON.parse(localStorage.getItem("save"))
if (savegame !== null) {
  gameData, gameData2 = savegame
}



function resetGame() {
    var r = confirm("Are you sure?") ;{
        if(r == true) {
            gameData.money = 0
            gameData.moneyPerClick = 1
            gameData.cursors = 0
            gameData.cursorvalue = 1
            gameData.cursorprice = 15
            gameData.grandmas = 0
            gameData.grandmavalue = 1
            gameData.grandmaprice = 100
            gameData.farms = 0
            gameData.farmvalue = 8
            gameData.farmprice = 1000
            gameData2.miner = 0
            gameData2.minerværdi = 50
            gameData2.minerpris = 12000
        }
    }
}