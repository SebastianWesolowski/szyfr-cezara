const ALPHABET = [...'abcdefghijklmnopqrstuvwxyz'];

function normalize(string): string {
  const map = {
    a: 'á|à|ã|â|ą',
    c: 'ç|ć',
    e: 'é|è|ê|ę',
    i: 'í|ì|î',
    l: 'ł',
    n: 'ñ|ń',
    o: 'ó|ò|ô|õ',
    s: 'ś',
    u: 'ú|ù|û|ü',
    z: 'ź|ż',
    A: 'À|Á',
    C: 'Ç|Ć',
    E: 'É|È|Ê|Ę',
    I: 'Í|Ì|Î',
    L: 'Ł',
    N: 'Ñ|Ń',
    O: 'Ó|Ò|Ô|Õ',
    S: 'Ś',
    U: 'Ú|Ù|Û|Ü',
    Z: 'Ź|Ż'
  };

  for (const pattern of Object.keys(map)) {
    string = string.replace(new RegExp(map[pattern], 'g'), pattern);
  }

  return string;
}

function checkTypeChar(char: string): IDetailChar {
  const isNumeric = (n: any): boolean => !isNaN(parseFloat(n)) && isFinite(n);
  // TODO:Dodać interface
  const detailChar: IDetailChar = {
    isNumber: false,
    isBig: false,
    isSpecial: false,
    char
  };

  if (ALPHABET.indexOf(char.toLowerCase()) === -1) {
    detailChar.isSpecial = true;

    if (typeof char === 'number' || isNumeric(char)) {
      detailChar.isNumber = true;
      detailChar.isSpecial = false;
    }
  }

  if (char === char.toUpperCase() && detailChar.isNumber === false) {
    detailChar.isBig = true;
    detailChar.char = char.toLowerCase();
  }

  return detailChar;
}

function cipher(normalizeSentence: string): string[] {
  const encryptSentence: string[] = normalizeSentence.split('').map(char => {
    const getNewIndex = i => (i + 13) % ALPHABET.length;
    const detailChar = checkTypeChar(char);

    if (detailChar.isNumber || detailChar.isSpecial) {
      return char;
    }

    const newIndex = getNewIndex(ALPHABET.indexOf(detailChar.char));

    if (detailChar.isBig) {
      return ALPHABET[newIndex].toUpperCase();
    } else {
      return ALPHABET[newIndex];
    }
  });
  return encryptSentence;
}

export function cesarCipher(sentence: string): string {
  const normalizeSentence = normalize(sentence);

  const encrypt = cipher(normalizeSentence);
  return encrypt.join('');
}

export interface IDetailChar {
  isNumber: boolean;
  isBig: boolean;
  isSpecial: boolean;
  char: string;
}
