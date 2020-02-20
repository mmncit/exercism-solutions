const isEmpty = (s: string) => s == ""
const isLengthSmall = (s: string) => s.length < 26  // length of the sentence should be >= 26 to include all english letters

const validatePangram = (s: string) => {
    let indexOfLetters = new Array(26); 
    indexOfLetters.fill(false);
    let indexOfCurrentLetter: number = 0;
    for(let i = 0; i < s.length; i++){
        let ascii = s.charCodeAt(i);
        if (65 <= ascii && ascii <= 90){
            indexOfCurrentLetter = ascii - 65;
        }
        else if (97 <= ascii && ascii <= 122){
            indexOfCurrentLetter = ascii - 97;
        }
        indexOfLetters[indexOfCurrentLetter] = true; 
    }
    for(let i = 0; i < indexOfLetters.length; i++){
        if(indexOfLetters[i] == false){
            return false;
        }
    }
    return true;
}

export function createPangram(s: string) {
    return {
        isPangram() {
            return ((isEmpty(s) || isLengthSmall(s)) ? false : validatePangram(s));
        },
    }
}

