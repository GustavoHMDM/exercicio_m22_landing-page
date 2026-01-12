AOS.init();

const eventDate = new Date('May 18, 2026 18:00:00');
const timeStampEvent = eventDate.getTime();

const countTheHours = setInterval(function() {
    const now = new Date();
    const timeStampCurrent = now.getTime();

    const timeUntilEvent = timeStampEvent - timeStampCurrent;

    const dayInMs = 1000 * 60 * 60 * 24;
    const hoursInMs = 1000 * 60 * 60;
    const minutesInMs = 1000 * 60;
    const secondsInMs = 1000;

    const daysUntilTheEvent = Math.floor(timeUntilEvent / dayInMs);
    const hoursUntilTheEvent = Math.floor((timeUntilEvent % dayInMs) / hoursInMs);
    const miunutesUntilTheEvent = Math.floor((timeUntilEvent % hoursInMs) / minutesInMs);
    const secondsUntilTheEvent = Math.floor((timeUntilEvent % minutesInMs) / secondsInMs);

    document.getElementById('timer').innerHTML = `${daysUntilTheEvent}d ${hoursUntilTheEvent} h ${miunutesUntilTheEvent}m ${secondsUntilTheEvent}s`;

    if (timeUntilEvent < 0) {
        clearInterval(countTheHours);
        document.getElementById('timer').innerHTML = 'Evento expirado';
    }
}, 1000)