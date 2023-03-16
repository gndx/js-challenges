const fibonacci = (n) => {
    var fibo = [1, 1];

    if (!(number < 0)) {

        for (var i = 2; i <= number; i++) {
            fibo[i] = fibo[i - 1] + fibo[i - 2];
        }

        fibo.pop();
        return fibo;
    }
}

module.exports = fibonacci;
