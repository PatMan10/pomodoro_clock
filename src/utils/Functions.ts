import C from "./Constants";

class Functions {
  static zol(c: string) {
    console.log(c);
  }

  static capitalise(word: string): string {
    return word[0].toUpperCase() + word.substr(1, word.length).toLowerCase();
  }
}

export default Functions;
