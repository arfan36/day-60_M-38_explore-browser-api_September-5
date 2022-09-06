// alert('ki khobor dosto')
const showAlert = () => {
    const num = Math.random() * 10;
    console.log(num);
    if (num < 5) {
        alert('ki khobor dosto');
    }
};

const askSomthing = () => {
    const dicision = confirm(('are you coming Picnic'));
    console.log(dicision);
    if (dicision === true) {
        alert('dosto 500 tk bkash kor');
    }
    else {
        console.log('DGM!!! Dure Giye Mor');
    }
};

const getUserInfo = () => {
    const name = prompt('Tell us your name');
    console.log(name);
    if (!!name) {
        console.log('Welcome here', name);
    }
    else {
        console.log('why?');
    }
};
