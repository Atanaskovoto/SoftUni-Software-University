function processOddPositions(input) {
    let result = [];

    for (let i = 0; i < input.length; i++) {
        if (i % 2 !== 0) {
            result.unshift(input[i]);
        }
    }

    result = result.map(x => x * 2);
    
    return result;
}

processOddPositions([10, 15, 20, 25]);
processOddPositions([3, 0, 10, 4, 7, 3]);