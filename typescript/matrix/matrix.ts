
function createMatrix (s: string){   
    return {
        rows(n: number){
            return s.split("\n")[n].split(" ").map(Number);
        },
        columns(n: number){
            let nCol = this.rows(0).length;
            let arr = s.split(/[\s, ]+/).map(Number);
            let res = [];
            for(let i = n; i < arr.length; i+=nCol){
                res.push(arr[i]);
            }
            return res;
        }
    }
}

export default createMatrix
