var isValid = function(s) {
    const stack = [];
    const pairs = {
        '(': ')',
        '[': ']',
        '{': '}'
    };

  
    if (typeof s !== 'string' || s.length === 0) {
        throw new Error('Input is not a valid string or is empty.');
    }

    for (let i = 0; i < s.length; i++) {
        const char = s[i];
        if (pairs[char]) {
            stack.push(char);
        } else if (char === ')' || char === ']' || char === '}') {
         
            if (stack.length === 0) {
              
                return false;
            }
            const lastOpening = stack.pop();
            if (pairs[lastOpening] !== char) {
               
                return false;
            }
        } else {
         
            throw new Error('Invalid character: ' + char);
        }
    }


    return stack.length === 0;
};

module.exports = { isValid };
