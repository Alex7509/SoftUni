function calculator() {

    let firstNum = 0;
    let secondNum = 0;
    let result = 0;

    return {
        init: (selector1, selector2, resultSelector) => {
            firstNum = document.querySelector(selector1);
            secondNum = document.querySelector(selector2);
            result = document.querySelector(resultSelector);
        },
        add: () => {
            result.value = Number(firstNum.value) + Number(secondNum.value);
        },
        subtract: () => {
            result.value = Number(firstNum.value) - Number(secondNum.value);
        }
    }
}





