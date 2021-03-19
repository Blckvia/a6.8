const fulfill = e => {
    const progress = document.getElementById('progress');
    progress.style.width = (parseInt(progress.style.width) + parseInt(e.target.dataset.value)) + '%'
}

let buttons = document.getElementsByTagName('button');
Array.from(buttons).map(button => button.addEventListener("click", fulfill))