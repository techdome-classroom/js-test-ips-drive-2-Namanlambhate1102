function longestSubstring(s) {
    let mxlen = 0;
    let left = 0;
    const charMap = new Map();  

    for (let right = 0; right < s.length; right++) {
        const currChar = s[right];

         
        if (charMap.has(currChar) && charMap.get(currChar) >= left) {
            left = charMap.get(currChar) + 1;
        }

         charMap.set(currChar, right);

         mxlen = Math.max(mxlen, right - left + 1);
    }

    return mxlen;
}


module.exports = { longestSubstring };
