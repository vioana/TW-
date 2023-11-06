//Vasiloiu Ioana-Maria 1097E
const InvalidType = new Error('InvalidType');

const rle = (text, compress = true) => {
  //TODO: implementați funcția
  // TODO: implement the function

  if(typeof text !== 'string' && !(text instanceof String))
    throw InvalidType;

  if (compress === true)
    return RLECompression(text);
  else
    return RLEDecompression(text);

}

function RLECompression(text) {
  compressText = '';
  count = 1;

  for (let i = 0; i < text.length; i++) {
    if (text[i] === text[i + 1]) {
      count++;
    }
    else {
      compressText += text[i] + count;
      count = 1;
    }
  }
  return compressText;
}

function RLEDecompression(text) {
  decompressText = '';

    for (var i = 1; i < text.length; i = i + 2) {
    letter = text[i - 1];
    for (var j = 0; j < parseInt(text[i]); j++)
      decompressText += letter;
  }
  return decompressText;
}

module.exports = rle

