let users = [
    {
        'email': 'user@users.com',
        'password': 'newuser1'
    },

]


const form = document.querySelector('form.login')

form.addEventListener('submit', (e) => {
    e.preventDefault();
    let userMatch = false;
    users.forEach((user) => {
        console.log(user.email);
        console.log(user.password);
        if (form.elements.email.value === user.email && form.elements.password.value === user.password) {
            form.submit();
            userMatch = true;
        }
        else {
          userMatch = false;
        }
    })
    if (!userMatch){
        const message = "Please try again.";
        sendMessage(message);
    }
})

const sendMessage = (message) => {
    const msg = document.querySelector(".msg")
    msg.textContent = message;
    msg.classList.add("msg-error")
    setTimeout(() => {
        msg.classList.remove('msg-error')
        msg.textContent = ''
    }, 4000)

}
