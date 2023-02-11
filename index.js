const fname = document.getElementById('fname');
const email = document.getElementById('email');
const submit = document.getElementById('submit');

submit.addEventListener('submit',(e)=>{
    e.preventDefault();
    let ebody = `
    <h1>First Name: </h1>${fname.value}
    <br>
    <h1>email Name: </h1>${email.value}
    `;

    console.log("hello");

    Email.send({
        SecureToken : "jlsdjfkl", //add your token here
        To : 'mahadihassanshehab@gmail.com', 
        From : email,
        Subject : "This is the subject",
        Body : ebody
    }).then(
      message => alert(message)
    );
});