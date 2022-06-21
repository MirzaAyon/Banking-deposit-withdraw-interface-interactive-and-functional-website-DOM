//script er code gulake clean krbo
//deposit
let depositValue = document.getElementById('deposit-value');
let depositOutput = document.getElementById('deposit-output');
//withdraw
let balanceOutput = document.getElementById('balance-output');
let withdrawValue = document.getElementById('withdraw-value');
//total balance
let withdrawOutput = document.getElementById('withdraw-output');
//balance output 2 bar chilo 1 bar kore dilam
//ekhn jog er onk gula repeatation ache tai jog er jonno ekta function likhbo
function addMoney(currentAmount, newAmount) {
    // const result = currentAmount+newAmount;
    // return result;  beshi boro code hole evabe likhbo ta nahole readablity maintain hobe na 
    return Number(currentAmount) + Number(newAmount);
}
function getMoney(currentAmount, newAmount) {

    return Number(currentAmount) - Number(newAmount);
}
// minus er jonno ekta function banalam 



function deposit() {
    //ebar balance add korlam

    // console.log(balanceOutput.innerText);

    const totalBalance = addMoney(depositOutput.innerText, depositValue.value);
    //function take call korlam
    depositOutput.innerText = totalBalance;
    balanceOutput.innerText = totalBalance;



    depositValue.value = '';
}


/////////////////////////////////////////////////


//////////////////ebar withdraw er kaj//////////////

function withdraw() {
    // console.log('withdraw'); //inspact kore withdraw te click kore dekhbo console e run korse kina
    const totalWithdraw = addMoney(withdrawOutput.innerText, withdrawValue.value);
    withdrawOutput.innerText = totalWithdraw;



    const totalBalance = getMoney(balanceOutput.innerText, withdrawValue.value);
    balanceOutput.innerText = totalBalance;

    withdrawValue.value = '';

}
//but evabe korle deposit korar por withdraw kore abr deposit korle balance er hishab milena