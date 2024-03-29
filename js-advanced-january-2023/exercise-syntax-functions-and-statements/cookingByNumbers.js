function cookingByNumbers(...input) {

    let number = input.shift();

    const operations = {
        'chop': x => x / 2,
        'dice': x => Math.sqrt(x),
        'spice': x => x += 1,
        'bake': x => x *= 3,
        'fillet': x => x -= x * 0.2
    };

    for (const command of input) {
        number = operations[command](number)
        console.log(number);
    }
}

cookingByNumbers('32', 'chop', 'chop', 'chop', 'chop', 'chop');
cookingByNumbers('9', 'dice', 'spice', 'chop', 'bake', 'fillet');