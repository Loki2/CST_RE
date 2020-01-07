// console.log("Hello, this me")


// calculate principle payment
//ການຄິດໄລເງີນຕົ້ນທື່ນທັງຫມົດຖຸຶກກູ້ຢື່ມໄປ
//ຈຳນວນປີ, ເງີນຕົ້ນຈທີ່ຕ້ອງຈ່າຍ, ດອກເບ້ຍ 15%, ຄ່າປັບໄຫມເປັນ 20%
const principle=1000000;
const day=365;
const year =1;
const term= year*day;
const principlepayment = principle/term;
const defaultInterest = principlepayment * 15/100; //ດອກເບຍຈ່າຍແບບປົກກະຕິ ບໍ່ມີຄ່າປັບໄຫມ
const penaltyInterest = principlepayment * 20/100; //ດອກເບຍຈ່າຍແບບກ່າຍກຳນົດມີຄ່າປັບໄຫມ


console.log("- Principle Laon: ", principle)
console.log("- Term: " + term);
console.log("- Principle Pay: " + principlepayment);
console.log("- Base Default Pay with 15%:" + defaultInterest);
console.log("- Base Default Penalty Pay with 20%: " + penaltyInterest);



// for(i=1;i<=term;i++){
//     console.log("Principle Pay:"+principlepayment);
//     break;   
// }
//calculate normal payment
//ກວດສອບການຈ່າຍປົກກະຕິ
//const normalinterest= principlepayment * 15/100;
// let normalpayment= defaultInterest/term;
// for(i=1;i<=term;i++){ 
//     console.log("- Normal Pay:"+normalpayment);
//     break;
// }

let penaltyPay = penaltyInterest/term;
let penalty = penaltyInterest;
for(i=1; i<=term;i++){
    if(penaltyPay < penalty){
        let count = penaltyInterest - defaultInterest;
        console.log(count);
    }else{
        let count = penaltyPay++;
        console.log(count);
    }
    break;
}


//calculate dreaft days

// const delaypay = principlepayment * 20/100;
//ກວດສອບເວລາກ່າຍກຳນົດ
const deadline = new Date('11/26/2019');
const datepay = new Date('11/30/2019');
    if(datepay>deadline){
        let diffTime = Math.abs(deadline - datepay);
        var delaypay = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
            if(delaypay === 0) {
                let count = principlepayment * 15/100;
                console.log(count);
            }else {
                let sumday = delaypay++;
                let count_total = principlepayment * sumday * 20/100;
                console.log("- Delay Day: " + sumday + "\n" + "- Count Total penalty Interest:" + count_total)
            }
        }else{
    let normalpayment = defaultInterest * 15/100;
    let count = normalpayment - penaltyInterest;
    console.log(count)
}


// calculate penalty payment
//ກວດສອນການຈາຍແບບປັບໄຫມ່
let pay = 5000;
console.log("- User Payment:" + pay);
if(delaypay === 0) {
    let count = pay - defaultInterest;
    let sum = count + principlepayment;
    console.log("- Pay with Normal INterest as 15% : " + sum);
}else{
    let count = pay - penalty * delaypay;
    console.log("- Pay with Penalty Interest as 20% : " + count)
}



































// const penInterest = delaypay * 20/100
// const penaltyinterest=12/100;
// let pen=((principle*penaltyinterest/term)* penInterest)+((normalpayment*penaltyinterest/term)*penInterest);
// for(i=1;i<=term;i++){
//     console.log("Penalpay:"+pen);
//     break;
// }
// //total payment
// // //ກວດສອບຫລັງການຈ່າຍ
// var sum = principlepayment+normalpayment+pen;
// console.log("Total:"+sum);
// // // case payment step by step
// let payment=10000;
// console.log("Pen: "+pen);
// console.log("Pay: "+payment);
// if(pen>0){
//     var penpay=payment-pen;
//     for(i=1;i<=term;i++){
//         console.log("Pen Pay: "+penpay);  
//         break;
//     }
//     if(penpay > 0 ){
//         var penn=pen+penpay;
//         console.log(penn);
//     }
//     pen=0;
//     payment = penpay;
// }
// console.log("NP: "+normalpayment);
// console.log("Pay: "+payment);
//  if(pen<=0){
//     var norpay=payment-normalpayment;
//     for(i=1;i<=term;i++){
//         console.log("Normal Pay: "+norpay);
//         break;
//     }
//     if(norpay>0){
//         var principay=norpay-principlepayment;
//         console.log("Prinsum:"+principay);
//     }
//     normalpayment = 0;
//     payment = norpay;
// } 

// if(normalpayment<=0){
//     var prinpay=payment-principlepayment;
//     for(i=1;i<=term;i++){
//         console.log("Principle Pay: "+prinpay);
//         break;
//     }
//     if(prinpay > 0 ){
//         var Total=principle-prinpay;
//         console.log(Total);
//     }
//     //principlepayment=0
//     payment=Total;
// }
// var draft=pen+normalpayment;
// console.log(draft);