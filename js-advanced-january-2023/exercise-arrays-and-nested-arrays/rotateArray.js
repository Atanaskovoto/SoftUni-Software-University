function rotateArray(input, rotations) {
    for (let index = 0; index < rotations; index++) {
        input.unshift(input.pop());
    }

    console.log(input.join(' '));
}

rotateArray(['1', '2', '3', '4'], 2);
rotateArray(['Banana', 'Orange', 'Coconut', 'Apple'], 15);