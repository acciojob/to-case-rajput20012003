function toCase(text) {
  if (text === "") {
    return "-";
  } else {
    const lowercase = text.toLowerCase();
    const uppercase = text.toUpperCase();
    return `${lowercase}-${uppercase}`;
  }
}

// Test cases
console.log(toCase('Mthatha')); // Output: 'mthatha-MTHATHA'
console.log(toCase('HelloWorld')); // Output: 'helloworld-HELLOWORLD'
console.log(toCase('OpenAI')); // Output: 'openai-OPENAI'
console.log(toCase('')); // Output: '-'
