document.addEventListener("DOMContentLoaded", function(event) {

    document.getElementById("startBubbleSort").addEventListener("click", bubbleSort);
    // document.getElementById("startBubbleSort").addEventListener("click", unbindButton);

})

const sleep = (delay) => new Promise((resolve) => setTimeout(resolve, delay))

const bubbleSort = async () => {

    document.getElementById("startBubbleSort").style.display = "none";

    let randomArray = Array.from({length: 10}, () => Math.floor(Math.random() * 100));
    
    let swaps = true;
    passNum = 0;

    let visualArray = document.createElement("div");
    
    for (let i = 0; i < randomArray.length; i++) {

        let arrayIndex = document.createElement("span");
        arrayIndex.id = String(i);
        arrayIndex.innerText = " " + randomArray[i] + " ";
        visualArray.appendChild(arrayIndex);
    }

    document.getElementById("bubbleContent").innerHTML = "Random Array:<br>";
    document.getElementById("bubbleContent").appendChild(visualArray)

    while (swaps === true) {

        swaps = false;

        await sleep(750);

        for (let i = 0; i < randomArray.length - 1 - passNum; i ++) {

            visualArray.children[i].style.color = "blue";
            visualArray.children[i + 1].style.color = "blue";

            await sleep(750);

            if (randomArray[i] > randomArray[i + 1]) {

                visualArray.children[i].style.color = "red";
                visualArray.children[i + 1].style.color = "red";

                await sleep(750);

                let temp = randomArray[i]
                randomArray[i] = randomArray[i + 1]
                randomArray[i + 1] = temp

                visualArray.children[i].innerText = " " + randomArray[i] + " ";
                visualArray.children[i + 1].innerText = " " + randomArray[i + 1] + " ";

                await sleep(750);

                visualArray.children[i].style.color = "blue";
                visualArray.children[i + 1].style.color = "blue";

                swaps = true;
            }

            visualArray.children[i].style.removeProperty("color");
            visualArray.children[i + 1].style.removeProperty("color");
        }

        passNum++;
    }

    document.getElementById("startBubbleSort").style.display = "block";
    document.getElementById("startBubbleSort").innerText = "Play Again";
}

function unbindButton() {
    document.getElementById("startBubbleSort").removeEventListener("click", bubbleSort);
}