var romanToInt = function(s) {
    const romanValues = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    };

    if (typeof s !== 'string' || s.length === 0) {
        throw new Error('Input is not a valid string or is empty.');
    }

    let total = 0;

    for (let i = 0; i < s.length - 1; i++) {
        const currentValue = romanValues[s[i]];
        const nextValue = romanValues[s[i + 1]];

        if (!currentValue || !nextValue) {
            throw new Error('Invalid Roman numeral: ' + s[i] + s[i + 1]);
        }

        if (currentValue < nextValue) {
            total -= currentValue;
        } else {
            total += currentValue;
        }
    }

    const lastValue = romanValues[s[s.length - 1]];
    if (!lastValue) {
        throw new Error('Invalid Roman numeral: ' + s[s.length - 1]);
    }

    total += lastValue;

    return total;
};
