export const latinToCyrillic = (str) => {
  if (!str) return "";
  const mapping = {
    'sh': 'ш', 'ch': 'ч', 'yu': 'ю', 'ya': 'я', 'yo': 'ё', 'ts': 'ц',
    'c': 'ц', 'a': 'а', 'b': 'б', 'v': 'в', 'g': 'г', 'd': 'д', 'e': 'е', 'j': 'ж',
    'z': 'з', 'i': 'и', 'y': 'й', 'k': 'к', 'l': 'л', 'm': 'м', 'n': 'н',
    'o': 'о', 'p': 'п', 'r': 'р', 's': 'с', 't': 'т', 'u': 'у', 'f': 'ф',
    'x': 'х', 'q': 'қ', "g'": 'ғ', "o'": 'ў', 'h': 'ҳ', ' ': ' '
  };
  let res = str.toLowerCase();
  ['sh', 'ch', 'yu', 'ya', 'yo', 'ts'].forEach(char => {
    res = res.split(char).join(mapping[char]);
  });
  Object.keys(mapping).forEach(char => {
    if (char.length === 1) res = res.split(char).join(mapping[char]);
  });
  return res;
};

export const cyrillicToLatin = (str) => {
  if (!str) return "";
  const mapping = {
    'ш': 'sh', 'ч': 'ch', 'ю': 'yu', 'я': 'ya', 'ё': 'yo', 'ц': 'ts',
    'а': 'a', 'б': 'b', 'в': 'v', 'г': 'g', 'д': 'd', 'е': 'e', 'ж': 'j',
    'з': 'z', 'и': 'i', 'й': 'y', 'к': 'k', 'л': 'l', 'м': 'm', 'н': 'n',
    'о': 'o', 'п': 'p', 'р': 'r', 'с': 's', 'т': 't', 'у': 'u', 'ф': 'f',
    'х': 'x', 'қ': 'q', 'ғ': "g'", 'ў': "o'", 'ҳ': 'h'
  };
  return str.toLowerCase().split('').map(char => mapping[char] || char).join('');
};

export const formatNum = (num) => new Intl.NumberFormat('fr-FR').format(Math.round(num));   