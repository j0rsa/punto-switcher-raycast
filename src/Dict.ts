// Internal function to generate static maps
export function genMap() {
  const enLayout = "`1234567890-=~!@#$%^&*()_+qwertyuiop[]\\QWERTYUIOP{}|asdfghjkl;'ASDFGHJKL:\"zxcvbnm,./ZXCVBNM<>?";
  const ruLayout = ']1234567890-=[!"№%:,.;()_+йцукенгшщзхъёЙЦУКЕНГШЩЗХЪЁфывапролджэФЫВАПРОЛДЖЭячсмитьбю/ЯЧСМИТЬБЮ?';
  let ruEnMap = "";
  let enRuMap = "";
  for (let i = 0; i < enLayout.length; i++) {
    const r = ruLayout[i].replace("\\", "\\\\").replace('"', '\\"');
    const e = enLayout[i].replace("\\", "\\\\").replace('"', '\\"');
    if (e != r) {
      ruEnMap += '["' + r + '","' + e + '"],\n';
      enRuMap += '["' + e + '","' + r + '"],\n';
    }
  }
  console.log("RU -> EN map", ruEnMap);
  console.log("EN -> RU map", enRuMap);
}

export const ru_en = new Map([
  ["]", "`"],
  ["[", "~"],
  ['"', "@"],
  ["№", "#"],
  ["%", "$"],
  [":", "%"],
  [",", "^"],
  [".", "&"],
  [";", "*"],
  ["й", "q"],
  ["ц", "w"],
  ["у", "e"],
  ["к", "r"],
  ["е", "t"],
  ["н", "y"],
  ["г", "u"],
  ["ш", "i"],
  ["щ", "o"],
  ["з", "p"],
  ["х", "["],
  ["ъ", "]"],
  ["ё", "\\"],
  ["Й", "Q"],
  ["Ц", "W"],
  ["У", "E"],
  ["К", "R"],
  ["Е", "T"],
  ["Н", "Y"],
  ["Г", "U"],
  ["Ш", "I"],
  ["Щ", "O"],
  ["З", "P"],
  ["Х", "{"],
  ["Ъ", "}"],
  ["Ё", "|"],
  ["ф", "a"],
  ["ы", "s"],
  ["в", "d"],
  ["а", "f"],
  ["п", "g"],
  ["р", "h"],
  ["о", "j"],
  ["л", "k"],
  ["д", "l"],
  ["ж", ";"],
  ["э", "'"],
  ["Ф", "A"],
  ["Ы", "S"],
  ["В", "D"],
  ["А", "F"],
  ["П", "G"],
  ["Р", "H"],
  ["О", "J"],
  ["Л", "K"],
  ["Д", "L"],
  ["Ж", ":"],
  ["Э", '"'],
  ["я", "z"],
  ["ч", "x"],
  ["с", "c"],
  ["м", "v"],
  ["и", "b"],
  ["т", "n"],
  ["ь", "m"],
  ["б", ","],
  ["ю", "."],
  ["Я", "Z"],
  ["Ч", "X"],
  ["С", "C"],
  ["М", "V"],
  ["И", "B"],
  ["Т", "N"],
  ["Ь", "M"],
  ["Б", "<"],
  ["Ю", ">"],
]);

export const en_ru = new Map([
  ["`", "]"],
  ["~", "["],
  ["@", '"'],
  ["#", "№"],
  ["$", "%"],
  ["%", ":"],
  ["^", ","],
  ["&", "."],
  ["*", ";"],
  ["q", "й"],
  ["w", "ц"],
  ["e", "у"],
  ["r", "к"],
  ["t", "е"],
  ["y", "н"],
  ["u", "г"],
  ["i", "ш"],
  ["o", "щ"],
  ["p", "з"],
  ["[", "х"],
  ["]", "ъ"],
  ["\\", "ё"],
  ["Q", "Й"],
  ["W", "Ц"],
  ["E", "У"],
  ["R", "К"],
  ["T", "Е"],
  ["Y", "Н"],
  ["U", "Г"],
  ["I", "Ш"],
  ["O", "Щ"],
  ["P", "З"],
  ["{", "Х"],
  ["}", "Ъ"],
  ["|", "Ё"],
  ["a", "ф"],
  ["s", "ы"],
  ["d", "в"],
  ["f", "а"],
  ["g", "п"],
  ["h", "р"],
  ["j", "о"],
  ["k", "л"],
  ["l", "д"],
  [";", "ж"],
  ["'", "э"],
  ["A", "Ф"],
  ["S", "Ы"],
  ["D", "В"],
  ["F", "А"],
  ["G", "П"],
  ["H", "Р"],
  ["J", "О"],
  ["K", "Л"],
  ["L", "Д"],
  [":", "Ж"],
  ['"', "Э"],
  ["z", "я"],
  ["x", "ч"],
  ["c", "с"],
  ["v", "м"],
  ["b", "и"],
  ["n", "т"],
  ["m", "ь"],
  [",", "б"],
  [".", "ю"],
  ["Z", "Я"],
  ["X", "Ч"],
  ["C", "С"],
  ["V", "М"],
  ["B", "И"],
  ["N", "Т"],
  ["M", "Ь"],
  ["<", "Б"],
  [">", "Ю"],
]);
