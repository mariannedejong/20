//hey kiddo
const checkAge = function (age) {
    if (age >= 18){
        return true;
    } else {return false;}
}

const reactToAge = function (age){
    result1 = checkAge(age);
    if (result1 == true){
        return "Hello there!"
    } else return "Hey kiddo!";
}

result2 = reactToAge(19);
console.log(result2);

///VAT exercise 1
const calculateVAT = function (VATPercentage, priceExcludingVAT){
       let VATamount = VATPercentage * priceExcludingVAT;
       return VATamount; 
}   

const calculatePriceIncludingVAT = function (priceExcludingVAT){
        let VATamount = calculateVAT(0.21, 15);
        let priceIncludingVAT = VATamount + priceExcludingVAT;
        return priceIncludingVAT
    
}
result3 = calculatePriceIncludingVAT(15);
console.log(result3);


//VAT exercise 2
const calculateVATAmount = function (priceIncludingVAT, VATPercentage){
    let VATAmount = priceIncludingVAT/(VATPercentage+100)*VATPercentage;
    return VATAmount;
}

const calculateBasePriceAndVAT = function(priceIncludingVAT, VATPercentage){
    let basePrice = priceIncludingVAT/(VATPercentage+100)*100;
    let VATAmount = calculateVATAmount (priceIncludingVAT, VATPercentage);
    basePriceAndVAT = [basePrice, VATAmount]
    return basePriceAndVAT;
}
result4 = calculateBasePriceAndVAT(121, 21)
console.log(result4);


