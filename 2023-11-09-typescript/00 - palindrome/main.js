function isPalindrome () {
    const str = 'abrrrrrcdcba';
    const flag = checkPalindrome(str);
    console.log(flag)

    const str2 = 'abccba';
    const flag2 = checkPalindrome(str2);
    console.log(flag2)

}

function checkPalindrome (str) {
// abcdba
// 012345
// str.slice(1, 5)
// bcdb
// cd

// co-pilot
    if (str.length <= 1) return true;
    if (str[0] !== str[str.length - 1]) return false;
    return checkPalindrome(str.substr(1, str.length - 2));
}


/*

sdfs d fsdf

abc x cba
abc cba

*/

