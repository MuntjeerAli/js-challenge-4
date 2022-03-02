//const bill = 40;
//const tip = bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.2;
//console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`);


//challenge #5
//Data 1

//const totalDolphins = 44 + 23 + 71;
//const totalKoalas = 65 + 54 + 49;
//const calcAverage = totalScore => totalScore/3;
//const avgDolphins = calcAverage(totalDolphins);
//const avgKoalas = calcAverage(totalKoalas);

//function checkWinner(avgDolphins, avgKoalas){
//    calcAverage(avgDolphins)
//    if(avgDolphins > avgKoalas * 2){
//        console.log(`dolphins wins (${avgDolphins} vs. ${avgKoalas})`);
//    }
//    else if (avgKoalas > avgDolphins * 2){
//        console.log(`koalas wins (${avgDolphins} vs. ${avgKoalas})`);
//    }
//    else{
//        console.log(`no winner (${avgDolphins}vs. ${avgKoalas})`);
//    }
//};
//console.log(checkWinner (avgDolphins, avgKoalas));

// Data 2

const totalDolphins = 85 + 54 + 41;
const totalKoalas = 23 + 34 + 27;
const calcAverage = totalScore => totalScore/3;
const avgDolphins = calcAverage(totalDolphins);
const avgKoalas = calcAverage(totalKoalas);

function checkWinner(avgDolphins, avgKoalas){
    calcAverage(avgDolphins)
    if(avgDolphins > avgKoalas * 2){
        console.log(`Dolphins wins (${avgDolphins} vs. ${avgKoalas})`);
    }
    else if (avgKoalas > avgDolphins * 2){
        console.log(`Koalas wins (${avgDolphins} vs. ${avgKoalas})`);
    }
    else{
        console.log(`No winner (${avgDolphins}vs. ${avgKoalas})`);
    }
};
console.log(checkWinner (avgDolphins, avgKoalas));
