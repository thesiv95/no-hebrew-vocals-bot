// UI consts

// Note that telegram requires escaping ! symbol like this: \\!

exports.welcomeText = `
נא לשלוח טקסט עם תנועות
Please, send the text with vowels
Пожалуйста, отправьте текст с огласовками
`;

exports.limitReachedErrorMessage = function(limit){
    return `
    נו לא יותר של נא לא יותר מ\\-${limit} תווים\\!
    Please, no more than ${limit} symbols\\!
    Пожалуйста, не более ${limit} знаков\\!
    `
};

exports.generalErrorMessage = `
שגיאה\\! 
Error\\! 
Ошибка\\!
`;