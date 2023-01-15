export let counterValueRoom = 0;
const roomDecrementLitenerBtn = document.querySelector('.minus-room');
const roomIncrementLitenerBtn = document.querySelector('.plus-room');
const valueRoomEl = document.querySelector('#valueRoom');

roomDecrementLitenerBtn.addEventListener('click', onBtnClickDecrementRoom);

roomIncrementLitenerBtn.addEventListener('click', onBtnClickIncrementRoom);

function onBtnClickDecrementRoom() {
    counterValueRoom -=1;
    valueRoomEl.textContent = counterValueRoom ;

};

function onBtnClickIncrementRoom() {
    counterValueRoom +=1;
    valueRoomEl.textContent = counterValueRoom;
};