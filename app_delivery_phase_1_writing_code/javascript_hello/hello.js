const readUserInput = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

readUserInput.question('Will you subscribe to the devhulk YouTube channel? \n', answer => {

    if (answer == 'Yes') {
      console.log('\n Thank you!');

    } else if (answer == 'No') {
      console.log('\n :(');

    }
      readUserInput.close();
});

