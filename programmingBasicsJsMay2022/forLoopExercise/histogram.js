function histogram(input) {
    let countNumbers = Number(input[0]);
    let p1 = 0;
    let p2 = 0;
    let p3 = 0;
    let p4 = 0;
    let p5 = 0;

    for (let i = 1; i <= countNumbers; i++) {
        let number = Number(input[i]);

        if (number < 200) {
            p1++;
        } else if (number >=200 && number < 400) {
            p2++;
        } else if (number >= 400 && number < 600) {
            p3++;
        } else if (number >=600 && number < 800) {
            p4++;
        } else {
            p5++;
        }
    }
    console.log(`${(p1 / countNumbers * 100).toFixed(2)}%`)
    console.log(`${(p2 / countNumbers * 100).toFixed(2)}%`)
    console.log(`${(p3 / countNumbers * 100).toFixed(2)}%`)
    console.log(`${(p4 / countNumbers * 100).toFixed(2)}%`)
    console.log(`${(p5 / countNumbers * 100).toFixed(2)}%`)

}
histogram(["3",
"1",
"2",
"999"])
