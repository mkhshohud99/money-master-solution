function getElementvalueById (inputId){
    const inputFeild = document.getElementById(inputId);
    const inputFeildString = inputFeild.value;
    const inputFeildValue = parseFloat(inputFeildString);
    return inputFeildValue ;
}
function getElementByIdInnerText(elementName){
    const displayValue = document.getElementById(elementName);
    return displayValue;
}

function getElementTextById (elementId){
    const element = document.getElementById(elementId);
    const elemnetString = element.innerText;
    const value = parseFloat(elemnetString);
    return value ;
}
function totalExpence(){
    const foodValue = getElementvalueById('food-fild');
    const rentValue = getElementvalueById('rent-fild');
    const clothValue = getElementvalueById('clothes-fild');
    const totalExpenceString = foodValue+rentValue+clothValue;
    const totalCostNumber = parseFloat(totalExpenceString);
    return totalCostNumber;
    
}
document.getElementById('Calculate-btn').addEventListener('click', function(){
    const income = getElementvalueById('income-value');
    const totalCost = totalExpence();
    const totalBalanceValue = income-totalCost;
    const totalExpenceValue = getElementByIdInnerText('total-expence');
    totalExpenceValue.innerText = totalCost;
    const totalBalence= getElementByIdInnerText('sub-total');
    totalBalence.innerText = totalBalanceValue;

    
    
    });
 

    
    document.getElementById('save-btn').addEventListener('click', function(){
        const income = getElementvalueById('income-value');
        const savePersent = getElementvalueById('save-persent');
        const totalSavingsString = ((savePersent/100 )* income).toFixed(2);
        const totalSavings = parseFloat(totalSavingsString);
        const savings = getElementByIdInnerText('save-display');
        savings.innerText = totalSavings;
        const totalCost = totalExpence();
        const remainingBalenceSum = income - (totalSavings + totalCost);
        const remainingBalence = getElementByIdInnerText('remaining');
        remainingBalence.innerText = remainingBalenceSum;
      
        
        

    })