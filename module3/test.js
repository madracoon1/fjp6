function* myGenerator() {
    let i = 1;
    while (true) {
        yield i;
        i++;
    }
}

console.log(myGenerator());
