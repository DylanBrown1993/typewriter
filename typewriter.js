const sentence = "hello there from lighthouse labs \n";

for (const [index, char] of sentence.split("").entries()) {
  setTimeout(() => {
    process.stdout.write(char);
  }, index * 50); 
}