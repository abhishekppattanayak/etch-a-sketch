document.querySelector('footer').textContent = `Copyright © ${new Date().getFullYear()} abhishek`;

let mouseDown = false;
let erase = "dont";
const container = document.querySelector('.container');

const gridBuilder = () => {
    let val = parseInt(document.querySelector('select').value, 10);
    let canvasWidth = parseInt(window.getComputedStyle(container).width);

    container.innerHTML = '';

    for(let i=0; i<(val*val); ++i){
        let div = document.createElement('div');

        div.style.width = `${canvasWidth/val}px`;
        div.style.aspectRatio = 1;
        div.style.border = '1px black solid';
        div.classList.add('bg-white');

        div.addEventListener('mousedown', ()=> mouseDown = true);

        div.addEventListener('mouseup', ()=> mouseDown=false);

        div.addEventListener('click', (event) => {
            div.style.backgroundColor=erase=="erase"?'white':'black';
        });

        div.addEventListener('mousemove', (event) => {
            if(mouseDown){
                div.style.backgroundColor=erase=="erase"?'white':'black';
            }
        });

        container.addEventListener('contextmenu', (event) => event.preventDefault());
        container.appendChild(div);
    }
}
container.addEventListener('mouseleave', () => mouseDown=false);
document.addEventListener('dragstart', (event)=> event.preventDefault());
gridBuilder();
document.querySelector('select').addEventListener('change',gridBuilder);

const eraser = () => {
    erase = erase=="erase"?"dont":"erase";
    document.querySelector('#eraser').classList.toggle('enabled');
}