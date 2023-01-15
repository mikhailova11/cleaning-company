
let result ='';

const selectServisesEl = document.querySelector('.calculate_select');
const summaServicesEl = document.querySelector('#result')

const valueBathEl = document.querySelector('#valueBath');
const valueRoomEl = document.querySelector('#valueRoom');

const formEl = document.querySelector('#calculate')
formEl.addEventListener('click', onChangeForm)

function onChangeForm(e){
    let target = e.target;

    const quantityBath = valueBathEl.textContent;
    const quantityRoom = valueRoomEl.textContent;

        if(target.tagName === "BUTTON"){
  
        const res = (result*quantityBath)+(result*quantityRoom);
                    summaServicesEl.textContent = `${res} `;
                return
    } else if (target.tagName === "SELECT") { 
        summaServicesEl.textContent = 0;
        valueBathEl.textContent = 0; 
        valueRoomEl.textContent = 0;
    } else {
        return 
    }

}

selectServisesEl.addEventListener('change', onChangeSelect)

function onChangeSelect() {

    const value = selectServisesEl.value;

    switch (value) {
        case "1":
            result = 500;
            break;
        case "2":
            result = 1000;
            break;
        case "3":
            result = 500;
            break;
        case "4":
            result = 800;
            break;
    
        default:
            alert( "Выберите значение" );
    }
 

}








