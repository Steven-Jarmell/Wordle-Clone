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

    let clock:Date = new Date();
    clock.setHours(hoursTillMidnight);
    clock.setMinutes(minutesTillMidnight);
    clock.setSeconds(secondsTillMidnight);

    let time = dateFormat(clock, "hh:MM:ss");

    return (
        <h1>{time}</h1>
    )
}

export default Countdown;
