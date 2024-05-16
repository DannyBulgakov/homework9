//1

function changeColor(){
    let div= document.getElementById("block")
    let button1 = document.getElementById("changeColor")
    button1.disabled = true
    timeoutId = setTimeout(() => {
        div.style.backgroundColor ='blue'
        button1.disabled = false;
    }, 2000);
}

function cancelColor(){
    let button1 = document.getElementById("changeColor")
    clearTimeout(timeoutId)
    let div= document.getElementById("block")
    div.backgroundColor = 'white'
    button1.disabled = false
    
}

//2


let timeLeft;

function startWatch() {
    let stopwatch = document.getElementById("stopwatch");
    let time = stopwatch.textContent.split(":").map(Number);
    timeLeft = time[0] * 60 + time[1];
    rightTime();
}

function rightTime() {
    let stopwatch = document.getElementById("stopwatch");
    let minutes = Math.floor(timeLeft / 60);
    let seconds = timeLeft % 60;
    let watchMinutes = (minutes < 10) ? '0' + minutes : minutes;
    let watchSeconds = (seconds < 10) ? '0' + seconds : seconds;
    
    stopwatch.textContent = `${watchMinutes}:${watchSeconds}`;

    if (timeLeft === 0) {
        stopwatch.textContent = "Time is up";
        return;
    }

    timeLeft--
    setTimeout(rightTime, 1000);
}

//3

function customIndexOf(str,char){
    if(typeof str !== 'string'){
        console.log('given variable is not a string')
        return
    }
    for (let i = 0; i < str.length; i++) {
        if (str[i] === char) {
             console.log(`place of given char is ${i+1}`); 
             return
        }
        
    }
    console.log('char not found')
}

//4

function fetchinfo(){
    const url = 'https://jsonplaceholder.typicode.com/users'
    fetch(url)
    .then(res => res.json())
    .then(data =>{
        const userList = document.getElementById('userInfo')
        userList.innerHTML = ''
        console.log(data)

        data.forEach(user => {
            const listItem = document.createElement ('li')
            // listItem.textContent = user.name; user.address.city;
            listItem.textContent = `Name: ${user.name}, City: ${user.address.city}`;
            userList.appendChild(listItem);
            
        });
    })

    const userList = document.getElementById('userInfo')
   


}

fetchinfo()
