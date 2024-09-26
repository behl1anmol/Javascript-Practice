
function exampleA() {
  let firstName = "David";
  let lastName = 'Tucker';
  let title = `VP Engineering`;
  title = `CTO`;

  //concatenating strings
  let fullName = firstName + " " + lastName;
  fullName = `${firstName}  ${lastName}`;
  console.log(fullName);

//multiline strings
let bio = "line 1\n line 2";

bio = `About Anmol
hello world my name is Anmol.`;
console.log(`${bio}`);


//escaping characters
let quote = "David said, 'Javascript is great'";
quote = 'David said, \' JS is great\'';
quote = `escaping the \\ character `
console.log(`${quote}`);

let length = quote.length;
console.log(`Quote length:${length}`);

let secondCharacter = quote[1];
console.log(`SecondCharacter: ${secondCharacter}`);

//substring
let idx1 = fullName.indexOf("Dav");

let idx2 = fullName.indexOf("ker");

let idx3 = fullName.indexOf("xyz");

let doesInclude = fullName.includes("Dav");

console.log(`${idx1}\n${idx2}\n${idx3}\n${doesInclude}`);
  }
module.exports = {
  exampleA
};