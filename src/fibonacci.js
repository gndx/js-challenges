const fibonacci = (n) => {
    var fibo = [1, 1];

    if (!(n < 0)) {

        for (var i = 2; i <= n; i++) {
            fibo[i] = fibo[i - 1] + fibo[i - 2];
        }

        fibo.pop();
        return fibo;
    }
}

module.exports = fibonacci;
