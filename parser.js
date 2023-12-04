const { limitReachedErrorMessage, generalErrorMessage } = require('./consts');

function parser(str, limit) {
    // async function is to match telegram's async behavior
    return new Promise((resolve) => {
            // in js, char with vowel has more than 1 length, keep it in mind and multiply it on 2.5 (max range)
            if (str.length > (limit * 2.5)) return resolve(limitReachedErrorMessage(limit));
        
            // symbols that should *not* be filtered out at the end
            const cleanChars = "אבגדהוזחטיכלמנסעפצקרםןץשת !?:-+.,“”.\t\n";
            str = str.split("");
        
            str = str.filter((char) => cleanChars.includes(char));
        
            // escaping some symbols (required by telegram)
            str = str.map((char) => {
                
                if (char === '.') {
                    return '\\.';
                } else if (char === '-') {
                    return '\\-';
                } else if (char === '!') {
                    return '\\!';
                } else {
                    return char;
                }
            });
        
        
            return resolve(str.join(""));
    });

  
}

module.exports = parser;
