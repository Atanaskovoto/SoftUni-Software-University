function rotateArray(input) {
    let array = input.slice();
    let rotations = array.pop();

    for (let i = 0; i < rotations; i++) {
        array.unshift(array.pop());
    }

    console.log(array.join(' '));
}
rotateArray(['1', '2', '3', '4', '2']);