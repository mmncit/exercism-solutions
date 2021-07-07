const dictionary: { [key: string]: string } = {
    G: 'C',
    C: 'G',
    T: 'A',
    A: 'U'
}

class Transcriptor {

    toRna(nucleotides: string) {
        let complements: string = "";
        for(let nucleotide of nucleotides){
            if (dictionary[nucleotide] == undefined) throw new Error('Invalid input DNA.');
            else complements += dictionary[nucleotide];
        }
        return complements;
    }
}

export default Transcriptor