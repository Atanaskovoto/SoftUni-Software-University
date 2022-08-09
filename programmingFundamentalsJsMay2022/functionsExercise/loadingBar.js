function loadingBar(number) {
    let isLoading = true;
    let loadingArray = ['%', '%', '%', '%', '%', '%', '%', '%', '%', '%'];
    if (number === 100) {
        isLoading = false;
    }
    for (let l = 0; l < 10 - number / 10; l++) {
        loadingArray.shift();
        loadingArray.push('.');
    }
    // if (isLoading) {
    //     console.log(`${number}% [${loadingArray.join('')}]`);
    //     console.log('Still loading...');
    // } else {
    //     console.log('100% Complete!');
    // }
    let result = isLoading ? `${number}% [${loadingArray.join('')}]\nStill loading...` :
        '100% Complete!';
    console.log(result);
}
loadingBar(30);