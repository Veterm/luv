document.addEventListener('DOMContentLoaded', function () {

    const deadline = new Date(2021, 12, 14);
    
    let timerId = null;

    function declensionNum(num, words) {
        return words[(num % 100 > 4 && num % 100 < 20) ? 2 : [2, 0, 1, 1, 1, 2][(num % 10 < 5) ? num % 10 : 5]];
    }

    function countdownTimer() {
        const diff = new Date() - deadline;
        if (diff <= 0) {
            clearInterval(timerId);
        }

        // const years = diff > 0 ? Math.floor(Math.floor(diff / 1000 / 60 / 60 / 24) / 365) : 0;
        // const month =
        //   diff > 0
        //     ? Math.floor(Math.round(diff / 1000 / 60 / 60 / 24) / 30)
        //     : 0;
        const days = diff > 0 ? Math.floor(diff / 1000 / 60 / 60 / 24) : 0;
        const hours = diff > 0 ? Math.floor(diff / 1000 / 60 / 60) % 24 : 0;
        const minutes = diff > 0 ? Math.floor(diff / 1000 / 60) % 60 : 0;
        const seconds = diff > 0 ? Math.floor(diff / 1000) % 60 : 0;

        // $years.textContent = years < 10 ? "0" + years : years;
        // $month.textContent = month < 10 ? "0" + month : month;
        $days.textContent = days < 10 ? "0" + days : days;
        $hours.textContent = hours < 10 ? "0" + hours : hours;
        $minutes.textContent = minutes < 10 ? "0" + minutes : minutes;
        $seconds.textContent = seconds < 10 ? "0" + seconds : seconds;
        $days.dataset.title = declensionNum(days, ["день", "дня", "дней"]);
        $hours.dataset.title = declensionNum(hours, ["час", "часа", "часов"]);
        $minutes.dataset.title = declensionNum(minutes, [
          "минута",
          "минуты",
          "минут",
        ]);
        $seconds.dataset.title = declensionNum(seconds, [
          "секунда",
          "секунды",
          "секунд",
        ]);
    }

    // const $years = document.querySelector(".timer__years");
    // const $month = document.querySelector(".timer__month");
    const $days = document.querySelector('.timer__days');
    const $hours = document.querySelector('.timer__hours');
    const $minutes = document.querySelector('.timer__minutes');
    const $seconds = document.querySelector('.timer__seconds');
    
    countdownTimer();

    timerId = setInterval(countdownTimer, 1000);


});
