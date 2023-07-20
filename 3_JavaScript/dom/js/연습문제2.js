function dDay() {
    const date = new Date();
    const lastDay = new Date("2024-01-01 00:00:00");
    const diffDay = lastDay - date;

    const resultDay = Math.floor(diffDay / (1000 * 60 * 60 * 24));
    const resultHour = Math.floor((diffDay / (1000 * 60 * 60)) % 24);
    const resultMin = Math.floor((diffDay / (1000 * 60)) % 60);
    const resultSec = Math.floor((diffDay / (1000)) % 60);

    clock.innerText = `${resultDay}일 ${resultHour}시간 ${resultMin}분 ${resultSec}초`;
}