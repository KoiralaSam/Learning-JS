function rollDice(){

    const numOfDice = document.getElementById("numOfDice").value;
    const diceResult = document.getElementById("diceResult");
    const diceImages = document.getElementById("diceImages");
    const values = [];
    const images = [];

    for(let i = 0; i<numOfDice; i++){
        const ranVal = Math.floor(Math.random() * 6 + 1);
        values.push(ranVal);
        images.push(`<img src = "Documents/${ranVal}.png">`);
    }

    diceResult.textContent = `dice: ${values.join(", ")}`;
    diceImages.innerHTML  = images.join('');
 }