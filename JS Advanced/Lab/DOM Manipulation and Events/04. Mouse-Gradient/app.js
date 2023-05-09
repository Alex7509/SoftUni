function attachGradientEvents() {
    let gradient = document.getElementById('gradient');
    let result = document.getElementById('result')

    gradient.addEventListener('mousemove', function (event) {
        let percent = Math.floor(event.offsetX / gradient.clientWidth * 100);
        result.textContent = `${percent}%`;
    })
}