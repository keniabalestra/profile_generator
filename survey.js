const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
rl.question('What\'s your name? Nicknames are also acceptable :)', (name) => {
  rl.question('What\'s an activity you like doing?', (activity) =>{
    rl.question('What do you listen to while doing that?', (song) =>{
      rl.question('Which meal is your favourite (eg: dinner, brunch, etc.)', (meal) => {
        rl.question('What\'s your favourite thing to eat for that meal?', (food) => {
          rl.question('Which sport is your absolute favourite?', (sport) => {
            rl.question('What is your superpower? In a few words, tell us what you are amazing at!', (superpower) =>{
   console.log()
              console.log(`Hi! My name is ${name}!\nI love to spend time doing ${activity}. Usually, I'm listening ${song} when I'm having my ${meal}. Please, don't judge me beacuse I like to eat ${food}. I'm also a big fan of ${sport} and my superpower is ${superpower}.\nShh! Please, don't tell anyone!`);

              rl.close();
            });
          });
        });
      });
    });
  });
});