// https://github.com/sajjadsadiqofficial/JS-Assignment

// Problem 01: Convert Kilometer To Meter
function kilometerToMeter(kilometer){
    var meter = kilometer * 1000; // 1 kilometer = 1000 Meter.
    return meter;
}

// Problem 02: Budget Calculator
function budgetCalculator(ghori, phone, laptop){
    var ghoriPrice = ghori * 50;
    var phonePrice = phone * 100;
    var laptopPrice = laptop * 500;
    var totalPrice = ghoriPrice + phonePrice + laptopPrice ;
    return totalPrice;
}

// Problem 03: Hotel Cost
function hotelCost(days){
    var dayCount = 0;
    if(days<=10){
        dayCount = days * 100;
    }
    else if(days<=20){
        var fristTenDays = 10 * 100;
        var remaining = days - 10;
        var secondTenDays = remaining * 80; //10 days Over hundred Percent ,Twenty Percent Discount.
        dayCount = fristTenDays + secondTenDays;
    }
    else{
        var fristTenDays = 10 * 100;
        var secondTenDays = 10 * 80;
        var remaining = days - 20;
        var ThreeUnlimitedDays = remaining * 50; //20 days Over hundred Percent ,fifty Percent Discount.
        dayCount = fristTenDays + secondTenDays + ThreeUnlimitedDays;
    }
    return dayCount;
}

// Proble 04: Mega Friend - Large Name Output.
function megaFriend(names){
    let WordSpeech = " ";
    for(var i = 0; i<names.length; i++){
        if(names[i].length> WordSpeech.length){
            WordSpeech = names [i];
        }
    }
    return WordSpeech;
}
