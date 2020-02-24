function createBob() {
    return {
        hey(s: string) {
            s = s.trim();
            if (s === ""){
                return "Fine. Be that way!";
            }
            else if (s === s.toUpperCase() && s.match(/[a-z]/i) && s.charAt(s.length - 1) === "?") {
                return "Calm down, I know what I\'m doing!";
            }
            else if(s === s.toUpperCase() && s.match(/[a-z]/i)){
                return "Whoa, chill out!";
            }
            else if(s.charAt(s.length - 1) === "?"){
                return "Sure.";
            }
            else return "Whatever.";
        },
    }
}
export default createBob;