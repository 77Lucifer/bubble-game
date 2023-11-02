let timer = 60;
let hitrn = 0;
let score = 0;

function gitnewhit() {
    hitrn = Math.floor(Math.random()*10);
    document.querySelector("#hitval").textContent = hitrn;
}

function runtimer() {
    let timerint = setInterval(() => {
        if (timer > 0) {
            timer--;
            document.querySelector('#timerval').textContent = timer;
        }else{
            clearInterval(timerint);
            document.querySelector('#pbtm').innerHTML = `<h1>Game over fuck off </h1>`;

        }
    }, 1000);


}

function increaseScore() {
    score += 10;
    document.querySelector('#scoreval').textContent = score;
}

function makebubble() {
    let clutter = "";
    
        for (let index = 1; index <= 84; index++) {
            let rn = Math.floor(Math.random()*10)
            clutter += `<div class="bubble">${rn}</div>`
        
        }
        
        let pbtm = document.querySelector('#pbtm').innerHTML = clutter;
          
}

function changebubble() {
    document.querySelector('pbtm')
    addEventListener('click', function (dets) {
        let clicknum = (Number(dets.target.textContent));
        if (clicknum === hitrn) {
            increaseScore();
            makebubble();
            gitnewhit();
        }
    })
} 





gitnewhit();
runtimer();
// increaseScore();
makebubble();
changebubble();