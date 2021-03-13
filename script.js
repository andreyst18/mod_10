let lastOperand = 0;
let operation = null;
let clickQuantity = 0;

//Перем. для вывода истории
let operationToStory = '';
let numToStory = 0;

const inputWindow = document.getElementById('inputWindow');


//Очистка табло

document.getElementById('btn_clr').addEventListener('click', function () {
    lastOperand = 0;
    operation = null;
    inputWindow.value = 0;
    clickQuantity = 0;
})


//Блок цифр

document.getElementById('btn_0').addEventListener('click', function () {
    if (inputWindow.value[0] != '0') {
        inputWindow.value += 0;
    }
    if (inputWindow.value[0] == '0' && inputWindow.value[1] === '.') {
        inputWindow.value += 0;
    }
})

document.getElementById('btn_1').addEventListener('click', function () {
    deleteFirstZero();
    inputWindow.value += '1';
})

document.getElementById('btn_2').addEventListener('click', function () {
    deleteFirstZero();
    inputWindow.value += '2';
})

document.getElementById('btn_3').addEventListener('click', function () {
    deleteFirstZero();
    inputWindow.value += '3';
})

document.getElementById('btn_4').addEventListener('click', function () {
    deleteFirstZero();
    inputWindow.value += '4';
})

document.getElementById('btn_5').addEventListener('click', function () {
    deleteFirstZero();
    inputWindow.value += '5';
})

document.getElementById('btn_6').addEventListener('click', function () {
    deleteFirstZero();
    inputWindow.value += '6';
})

document.getElementById('btn_7').addEventListener('click', function () {
    deleteFirstZero();
    inputWindow.value += '7';
})

document.getElementById('btn_8').addEventListener('click', function () {
    deleteFirstZero();
    inputWindow.value += '8';
})

document.getElementById('btn_9').addEventListener('click', function () {
    deleteFirstZero();
    inputWindow.value += '9';
})


//Блок операций

document.getElementById('btn_sum').addEventListener('click', function () {
    if (inputWindow.value.includes('.')) {
        lastOperand = parseFloat(inputWindow.value);
    } else {
        lastOperand = parseInt(inputWindow.value);
    }
    operation = 'sum';
    inputWindow.value = '';
})

document.getElementById('btn_dif').addEventListener('click', function () {
    if (inputWindow.value.includes('.')) {
        lastOperand = parseFloat(inputWindow.value);
    } else {
        lastOperand = parseInt(inputWindow.value);
    }
    operation = 'dif';
    inputWindow.value = '';
})

document.getElementById('btn_mult').addEventListener('click', function () {
    if (inputWindow.value.includes('.')) {
        lastOperand = parseFloat(inputWindow.value);
    } else {
        lastOperand = parseInt(inputWindow.value);
    }
    operation = 'mult';
    inputWindow.value = '';
})

document.getElementById('btn_div').addEventListener('click', function () {
    if (inputWindow.value.includes('.')) {
        lastOperand = parseFloat(inputWindow.value);
    } else {
        lastOperand = parseInt(inputWindow.value);
    }
    operation = 'div';
    inputWindow.value = '';
})

document.getElementById('btn_sqrt').addEventListener('click', function () {
    if (inputWindow.value.includes('.')) {
        lastOperand = parseFloat(inputWindow.value);
    } else {
        lastOperand = parseInt(inputWindow.value);
    }
    let result = Math.sqrt(lastOperand);

    numToStory += 1;
    operationToStory = `${numToStory}) квадратный корень из ${lastOperand} = ${result}`;
    document.getElementById('story_block').value += `${operationToStory}\n`;

    operation = null;
    lastOperand = 0;
    inputWindow.value = result;
    clickQuantity = 0;
})

document.getElementById('btn_point').addEventListener('click', function () {
    if (inputWindow.value.length === 1) {
        inputWindow.value += '.';
    }
    clickQuantity += 1;
})

document.getElementById('btn_negative').addEventListener('click', function () {
    inputWindow.value *= -1;
})


//Блок вычисления результата

document.getElementById('btn_calc').addEventListener('click', function () {
    let result = 0;
    if (operation === 'sum') {
        if (inputWindow.value.includes('.')) {
            result = lastOperand + parseFloat(inputWindow.value);  
        } else {
            result = lastOperand + parseInt(inputWindow.value);
        }
    }
    if (operation === 'dif') {
        if (inputWindow.value.includes('.')) {
            result = lastOperand - parseFloat(inputWindow.value);  
        } else {
            result = lastOperand - parseInt(inputWindow.value);
        }
    }
    if (operation === 'mult') {
        if (inputWindow.value.includes('.')) {
            result = lastOperand * parseFloat(inputWindow.value);  
        } else {
            result = lastOperand * parseInt(inputWindow.value);
        }
    }
    if (operation === 'div') {
        if (inputWindow.value.includes('.')) {
            result = lastOperand / parseFloat(inputWindow.value);  
        } else {
            result = lastOperand / parseInt(inputWindow.value);
        }
    }

    numToStory += 1;
    switch (operation) {
        case 'sum': operationToStory = `${numToStory}) ${lastOperand} + ${inputWindow.value} = ${result}`;
            break;
        case 'dif': operationToStory = `${numToStory}) ${lastOperand} - ${inputWindow.value} = ${result}`;
            break;
        case 'mult': operationToStory = `${numToStory}) ${lastOperand} * ${inputWindow.value} = ${result}`;
            break;
        case 'div': operationToStory = `${numToStory}) ${lastOperand} / ${inputWindow.value} = ${result}`;
            break;
    }
    document.getElementById('story_block').value += `${operationToStory}\n`;

    operation = null;
    lastOperand = 0;
    inputWindow.value = result;
    clickQuantity = 0;
})

//----------------------------------------------------------------------------

function deleteFirstZero() {
    clickQuantity += 1;
    if (clickQuantity == 1) {
        inputWindow.value = '';
    }
}












