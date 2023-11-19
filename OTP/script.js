// const generateOtp = (otplength) => {
//     let otp = "";

//     for(let i=0;i<otplength;i++){
//         otp += Math.floor(Math.random()*10)
//     }
//     return Number(otp);
// };

// console.log("generateOtp 3-",generateOtp(3));
// console.log("generateOtp 4-",generateOtp(4));
// console.log("generateOtp 5-",generateOtp(5));
// console.log("generateOtp 6-",generateOtp(6));

function otpGenerate() {
    let otpShow = document.getElementById('otp');
    let digits = '0123456789';
    let otp =' ';
    for(let i=0;i<4;i++){
        otp += digits[Math.floor(Math.random()*10)];
    }

    otpShow.innerHTML = '<span></span>'
    setTimeout(() => {
        otpShow.innerHTML = otp;
    },1000);
}