var isValid = function(s) {
    const stack = [];
    const pairs = {
        '(': ')',
        '[': ']',
        '{': '}'
    };

    // Check if the input string is empty or not a string
    if (typeof s !== 'string' || s.length === 0) {
        throw new Error('Input is not a valid string or is empty.');
    }

    for (let i = 0; i < s.length; i++) {
        const char = s[i];
        if (pairs[char]) {
            stack.push(char);
        } else if (char === ')' || char === ']' || char === '}') {
            // Closing bracket encountered
            if (stack.length === 0) {
                // If stack is empty, there's no corresponding opening bracket
                return false;
            }
            const lastOpening = stack.pop();
            if (pairs[lastOpening] !== char) {
                // Mismatched closing bracket
                return false;
            }
        } else {
            // Invalid character encountered
            throw new Error('Invalid character: ' + char);
        }
    }

    // Check if there are remaining unclosed parentheses in the stack
    return stack.length === 0;
};

module.exports = { isValid };
