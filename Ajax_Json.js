// Show JSon....AJAX
const btn = document.querySelector('.btn');

btn.addEventListener('click', () => {
    showJson()
})


function showJson() {
    const xhr = new XMLHttpRequest();
    const Path = './JsonApi/Ajax.json'
    console.log(xhr);


    xhr.open('GET', Path);

    xhr.onreadystatechange = () => {
        if (xhr.status === 200 && xhr.readyState === 4) {
            const parseTxt = JSON.parse(xhr.responseText);
            const createElem = document.createElement('div');
            const resultTxt = parseTxt.map((texts) => {
                return `<p>${texts.name}</p>`
            }).join('');
            createElem.style.fontSize = '2em';
            createElem.style.color = 'white'
            createElem.innerHTML = resultTxt;
            document.body.appendChild(createElem)

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

