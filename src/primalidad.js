const trialDivision = (number) => {
    if (Number.isInteger(number)) {
        if (number <= 1) {
            return false;
        }
        for (var i = 2; i < number; i++) {
            if (number % i === 0) {
                return false;
            }
        }
        return true;
    } else {
        return false;
    }
}

module.exports = trialDivision;
