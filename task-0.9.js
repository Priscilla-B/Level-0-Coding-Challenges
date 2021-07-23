// printing out vowels in a string //

function vowels(string) {

    string = string.toLowerCase();
    const allVowels = ['a', 'e', 'i', 'o', 'u'];
    var vowelsInString = new Set(); // using a set so that only unique vowels are stored//
    var i = 0;

    while (i < string.length) {
        if (allVowels.includes(string[i])){
            vowelsInString.add(string[i]);
        };
        i++;
    };

    vowelsInString = Array.from(vowelsInString).join(', '); // convert to a comma separated array representation"
    console.log('Vowels: ', vowelsInString);
   
}

vowels('Enthusiastic');