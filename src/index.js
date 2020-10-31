const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const refs = {
    startBtn: document.querySelector('button[data-action-start]'),
    stopBtn: document.querySelector('button[data-action-stop]'),
};

const colorSwitch = {   
    intervalid: null,
    isActive: false,
    
    start() {
        if (this.isActive) {
            return;
        }
        this.isActive = true;
      this.intervalid = setInterval(() => {
            const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};
            const randomColor = colors[randomIntegerFromInterval(0, colors.length - 1)];

document.body.style.backgroundColor = randomColor;
         }, 1000);
    },
    stop() {
        clearInterval(this.intervalid);
        this.isActive = false;
    },
};

refs.startBtn.addEventListener('click', () => {
colorSwitch.start();    
})

refs.stopBtn.addEventListener('click', () => {
colorSwitch.stop();    
})