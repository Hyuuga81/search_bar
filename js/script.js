const filterInput = document.querySelector('#username');
const profileCase = document.querySelector('.profiles .container');

// Multidimensional array called hunters holds name and photo of 4 hunters
const hunters = [
    ['Sung Jinwoo', './img/sungjinwoo1.jpg'],
    ['Shadow Monarch', './img/sungjinwoo2.jpg'],
    ['Yoo Jinho', './img/yoojinho3.jpg'],
    ['Joo Soohyun', './img/yoosoohyun2.jpg']
];

// for each hunter in array carry out the following commands
for (let i = 0; i < hunters.length; i++) {
    // add a paragraph with the hunters name to the dom
    let hunterName = document.createElement("p");
    hunterName.append(hunters[i][0]);

    // add a photo of the hunter to the dom
    let hunterImage = document.createElement("img");
    hunterImage.src = hunters[i][1];
    hunterImage.alt = 'hunter profile';

    // add styles to the profile information
    hunterImage.classList.add("visual");

    // hunterImage.append(hunters[i][1]);

    // add a div to the dom
    let profileBlock = document.createElement("div");

    // add a profile block to the dom
    profileBlock.classList.add('profile');

    // add the hunter image and name to the div. the styles have alerady been added
    profileBlock.append(hunterImage);
    profileBlock.append(hunterName);
    profileCase.append(profileBlock);
}

// when an input is entered into search bar, an event occurs
filterInput.addEventListener("input", function(e) {

    // the e is the event, and it points to what is in the search bar
    const searchText = e.target.value;

    // forces text in search bar to be lower case. so you can use capitals and get same result
    const lowerSearchText = searchText.toLowerCase();

    // selects all hunter profiles
    const profileBlocks = document.querySelectorAll('.profile');

    
    for (const profileBlock of profileBlocks) {
        // for each hunter name, text is forced to lower case so it matches search
            const profile = profileBlock.querySelector("p");
            const lowerProfileText = profile.innerText.toLowerCase();

            // if hunter name is same as search bar name, it stays displayed, and all other results are hidden
            if(lowerProfileText.includes(lowerSearchText)) {
                profileBlock.classList.remove('hide');
            } else {
                profileBlock.classList.add('hide');
            }
        }

});

// Just enters the copyright year in footer. automatically updates when year changes
const theYear = document.querySelector('.year');
const thisYear = new Date().getFullYear();
theYear.innerText = thisYear;