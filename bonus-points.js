function bonusPoints(points) {
  if (points >= 0 && points <= 3)
    points += 5;
  else if (points >= 4 && points <= 6)
    points += 15;
  else if (points >= 7 && points <= 9)
    points += 20;
  console.log(points);
}
bonusPoints(4); // 19

//alternate solution that will pass the homeworkchecker Module 1 ex6.6:

function main(n){
  var bonus = 0;
 if (n<=100){
     bonus = 5;
    }else if (n>100 && n<=1000){
    bonus = (n*.2);
    }else if (n>1000){
     bonus = (n*.1);
    }else {
     console.log(undefined)
    }
 if (n%2==0){
     bonus= bonus+1;
 } else if (n%5==0){
     bonus=bonus+2;
 }
 console.log(bonus);
 console.log(n+bonus);
}
main(20);
main(175);
