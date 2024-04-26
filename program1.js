var isValid = function(s) {
    const stack = [];
    const pairs = {
        '(': ')',
        '[': ']',
        '{': '}'
    };

    for (let i = 0; i < s.length; i++) {
        const char = s[i];
        if (pairs[char]) {
            stack.push(char);
        } else {
            // Check if the stack is empty before popping
            if (stack.length === 0) {
                return false;
            }
            const lastOpening = stack.pop();
            if (pairs[lastOpening] !== char) {
                return false;
            }
        }
    }

    // Check if there are remaining unclosed parentheses in the stack
    return stack.length === 0;
};

module.exports = { isValid };
