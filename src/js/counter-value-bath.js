
let counterValueBath = 0;
const bathDecrementLitenerBtn = document.querySelector('.minus-bath');
const bathIncrementLitenerBtn = document.querySelector('.plus-bath');
const valueBathEl = document.querySelector('#valueBath');

bathDecrementLitenerBtn.addEventListener('click', onBtnClickDecrementBath);

bathIncrementLitenerBtn.addEventListener('click', onBtnClickIncrementBath);

function onBtnClickDecrementBath() {
    counterValueBath -=1;
    valueBathEl.textContent = counterValueBath ;
};

function onBtnClickIncrementBath() {
    counterValueBath +=1;
    valueBathEl.textContent = counterValueBath;
};

