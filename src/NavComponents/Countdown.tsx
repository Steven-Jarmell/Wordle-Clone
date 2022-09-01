import dateFormat from "dateformat";

const Countdown = () => {
    let midnight = new Date();
    midnight.setHours(24);
    midnight.setMinutes(0);
    midnight.setSeconds(0);
    midnight.setMilliseconds(0);

    let hoursTillMidnight = (midnight.getTime() - new Date().getTime()) / 1000 / 60 / 60;
    let minutesTillMidnight = (hoursTillMidnight - Math.floor(hoursTillMidnight)) * 60;
    let secondsTillMidnight = (minutesTillMidnight - Math.floor(minutesTillMidnight)) * 60;

    let hours = `${(hoursTillMidnight < 10) ? '0' : ''}${Math.floor(hoursTillMidnight)}`;
    let minutes = `${(minutesTillMidnight < 10) ? '0' : ''}${Math.floor(minutesTillMidnight)}`;
    let seconds = `${(secondsTillMidnight < 10) ? '0' : ''}${Math.floor(secondsTillMidnight)}`;

    let time = `${hours}:${minutes}:${seconds}`;

    return (
        <h1>{time}</h1>
    )
}

export default Countdown;
