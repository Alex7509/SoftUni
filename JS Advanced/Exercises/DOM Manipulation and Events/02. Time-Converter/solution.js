function attachEventsListeners() {

    let buttons = document.querySelectorAll('input[type="button"]')

    let inpDays = document.getElementById('days');
    let inpHours = document.getElementById('hours');
    let inpMinutes = document.getElementById('minutes');
    let inpSeconds = document.getElementById('seconds');

    for (const button of buttons) {
        button.addEventListener('click', (e) => {

            let days = Number(inpDays.value);
            let hours = Number(inpHours.value);
            let minutes = Number(inpMinutes.value);
            let seconds = Number(inpSeconds.value);

            if (e.target.id === 'daysBtn') {
                hours = days * 24;
                minutes = hours * 60;
                seconds = minutes * 60;
            } else if (e.target.id === 'hoursBtn') {
                days = hours / 24;
                minutes = hours * 60;
                seconds = minutes * 60;
            } else if (e.target.id === 'minutesBtn') {
                hours = minutes / 60;
                days = hours / 24;
                seconds = minutes * 60;
            } else if (e.target.id === 'secondsBtn') {
                minutes = seconds / 60;
                hours = minutes / 60;
                days = hours / 24;
            }

            inpDays.value = days;
            inpHours.value = hours;
            inpMinutes.value = minutes;
            inpSeconds.value = seconds;
        })
    }
}