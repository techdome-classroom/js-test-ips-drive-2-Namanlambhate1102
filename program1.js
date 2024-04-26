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
          const lastOpening = stack.pop();
          if (pairs[lastOpening] !== char) {
              return false;
          }
      }
  }
  return stack.length === 0;
};

module.exports = { isValid };
