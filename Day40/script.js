const API_KEY = '9rQh5_7uFv9OdLT-2';
const serviceID = 'default_service';
const templateID = 'template_8e8c3ep';
let generatedOtp = '';

emailjs.init(API_KEY);

function sendOtp() {
  const email = document.getElementById('email').value;
  generatedOtp = Math.floor(10000 + Math.random() * 9000);

  const templateParams = {
    email: email,
    passcode: generatedOtp,
  };

  emailjs.send(serviceID, templateID, templateParams).then(
    () => {
      alert('OTP sent to your email!');
      document.getElementById('sendOtpSection').style.display = 'none';
      document.getElementById('verifyOtpSection').style.display = 'block';
    },
    (err) => {
      console.error('Failed to send OTP:', err);
    }
  );
}

function verifyOtp() {
  const enteredOtp = document.getElementById('otp');
  if (enteredOtp.value == generatedOtp) {
    alert('OTP Verified Successfully!');=
  } else {
    alert(' Invalid OTP. Please try again.');
  }
}
