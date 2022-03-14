const cep = document.querySelector('input')

cep.oninput = function () {
    if (cep.value.length > 6) {
        fetch(`https://viacep.com.br/ws/${cep.value}/json`)
            .then(res => res.json())
            .then(res => {
                const resArr = Object.entries(res)
                loader(resArr)
            })
    }
}

const loader = (resArr) => {
    const div = document.querySelector('div')
    for (let i = 0; i < resArr.length; i++) {
        if (i != 6 && i != 7 && i != 9) {
            const p = document.createElement('p')
            div.appendChild(p)
            p.innerText = resArr[i][0] + ' : ' + resArr[i][1]
        }
    }
}