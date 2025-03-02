
let sumElement = document.getElementById("summetion");
let sum2 = parseInt(sumElement.innerText) || 0;

let subElement = document.getElementById("sub");
let sub2 = parseInt(subElement.innerText) || 0;


let buttons = document.getElementsByClassName("alertButton");

let historyContainer = document.getElementById('historyContainer');

function addHistory(taskName) {
   
    const historyBox = document.createElement('div');
    historyBox.classList.add('historyBox', 'bg-gray-200', 'rounded-[5px]', 'p-3', 'mb-3', 'shadow-md'); 

    const currentTime = new Date().toLocaleString([], {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true
    });
   
    historyBox.innerHTML = `
        <p>You have completed the task <strong>${taskName}</strong> at <strong>${currentTime}</strong></p>
    `;

    historyContainer.appendChild(historyBox);
}

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function () {
        alert("Board updated Successfully");

       
        this.disabled = true;
        this.style.backgroundColor = "#d1d5db";
        this.style.color = "black";

      
        sum2 = sum2 + 1;
        sumElement.innerText = sum2;

        sub2 = sub2 - 1;
        subElement.innerText = sub2;

      
        let taskName = this.closest('section').querySelector('h2').innerText;
      
        addHistory(taskName);
      
        if (sub2 === 0) {
            alert("Congrats!!! You have completed all current tasks.");
        }
    });
}

const clearHistoryButton = document.getElementById("clearHistory");
if (clearHistoryButton) {
    clearHistoryButton.addEventListener("click", function () {
        const historyBoxes = document.querySelectorAll('.historyBox');
        historyBoxes.forEach(box => box.remove());
    });
}

