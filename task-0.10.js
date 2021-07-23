// printing common characters in two strings //

function commonCharacters(string1, string2) {

    string1 = string1.toLowerCase();
    string2 = string2.toLowerCase();
    var commonLetters = new Set(); // using a set so that only unique vowels are stored//
    
    var i = 0;
    while (i < string1.length) {
        if (string2.includes(string1[i])){
            commonLetters.add(string1[i]);
        };
        i++;
    };

    commonLetters = Array.from(commonLetters).join(', '); // convert to a comma separated array representation"
    console.log('Common letters: ', commonLetters);
   
}

commonCharacters('Enthusiastic', 'Excited');


