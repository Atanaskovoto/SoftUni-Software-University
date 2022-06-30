function sumSeconds(input) {

    let time1 = Number(input[0]);
    let time2 = Number(input[1]);
    let time3 = Number(input[2]);

    let totaltime = time1 + time2 + time3;
    let minutes = Math.floor(totaltime / 60);
    let seconds = totaltime % 60;

    if (seconds < 10) {
        console.log(`${minutes}:0${seconds}`);
    } else {
        console.log(`${minutes}:${seconds}`);
    }

}

sumSeconds(["50", "50", "49"])


