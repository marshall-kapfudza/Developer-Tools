class MasterCard {
  constructor(str) {
    this.str = str;
  }

  longest() {
    const words = this.str;
    const wordsArr = [];
    let word = '';
    for (let i = 0; i < words.length; i++) {
      word += words[i];
      if (words[i] === ' ') {
        wordsArr.push(word.trim());
        word = '';
      }
    }

    if (word.length > 0) {
      wordsArr.push(word);
    }
    const longst = wordsArr.reduce((a, b) => {
      return a.length > b.length ? a : b;
    });
    return `${longst.length} ${longst}`;
  }
  onClick() {
    const val = document.getElementById('message').value;
    const long = new MasterCard(val)
    document.getElementById('output').innerHTML = `<p><code>${long.str}</code></p><p><i>The longest word is:</i> <code>${long.longest()}</code></p>`;
  }
}

const long = new MasterCard('The cow jumped over the moon.'); // 6 jumped
const longs = new MasterCard('Java Tools Developer Exercise MasterCard'); // 6 jumped
console.log(long.longest());
console.log(longs.longest());