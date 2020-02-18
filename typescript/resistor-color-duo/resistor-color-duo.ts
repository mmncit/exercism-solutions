let colorCodes: string[];
colorCodes = ["black", "brown", "red", "orange", "yellow", "green", "blue", "violet", "grey", "white"];

export class ResistorColor {
  private colors: string[];
  
  constructor(colors: string[]) {
    this.colors = colors;
    if(this.colors.length < 2){
      throw new Error("At least two colors need to be present");
    }
  }

  value = (): number => {
      return Number (String(colorCodes.indexOf(this.colors[0])) + String(colorCodes.indexOf(this.colors[1])));
  }
}
