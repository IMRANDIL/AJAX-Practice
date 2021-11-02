// Ajax Practice......
const btn = document.querySelector('.btn');

btn.addEventListener('click', () => {
   
showText()

})



function showText(){
    const xhr = new XMLHttpRequest();

   
    
    xhr.open('GET', './Api/sample.txt');
    
    xhr.onreadystatechange = () => {
        if (xhr.status === 200 && xhr.readyState === 4) {
            const text = document.createElement('p');
            text.textContent = xhr.responseText;
            text.style.color='white';
            text.style.fontSize = '2em'
            document.body.appendChild(text)
        }
        else {
            console.log({
                status: xhr.status,
                txt: xhr.statusText
            });
        }
    }
    
    
    xhr.send();
}


