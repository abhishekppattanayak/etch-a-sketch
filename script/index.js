document.querySelector('footer').textContent = `Copyright © ${new Date().getFullYear()} abhishek`;

const gridBuilder = () => {
    let val = parseInt(document.querySelector('select').value, 10);
    const container = document.querySelector('.container');
    let canvasWidth = parseInt(window.getComputedStyle(container).width);
    container.innerHTML = '';
    console.log(val + ' ' + canvasWidth);
    console.log( canvasWidth / val);
    for(let i=0; i<(val*val); ++i){
        let div = document.createElement('div');
        div.style.width = `${canvasWidth/val}px`;
        div.style.aspectRatio = 1;
        div.classList.add('bg-white');
        div.addEventListener('click', () => {
            div.style.backgroundColor = 'black';
        })
        container.appendChild(div);
    }
}
gridBuilder();
document.querySelector('select').addEventListener('change',gridBuilder);