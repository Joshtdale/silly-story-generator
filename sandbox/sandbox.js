// console.log('script working')

const customName = document.getElementById('customname');
const customAdverb = document.getElementById('customAdverb');
const customAdjective = document.getElementById('customAdjective');
const customPluralNoun = document.getElementById('customPluralNoun');
const customPluralNoun2 = document.getElementById('customPluralNoun2');
const customEmotion = document.getElementById('customEmotion');
const customVerb = document.getElementById('customVerb');
const customAdjective2 = document.getElementById('customAdjective2');
const scary = document.getElementById('scary');


const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

    function randomValueFromArray(array){
        const random = Math.floor(Math.random()*array.length);
        return array[random];
    }

const storyText = "There is a house on my :insertx: that is extremely haunted. It's the old :inserty: place that's been empty for hundreds of years. I can tell the house is haunted because there are corpses and knives outside, and it smells like old eggs. I heard that a kid named Bob went inside and never came back out. My friends and I are scared to walk past the house because it's so spooky";
const insertX = ['street', 'block'];
const insertY = ['Frankenstein', 'Dracula', 'Awesome Inc'];
const insertZ = ['spontaneously combusted', 'melted into a puddle on the sidewalk', 'turned into a slug and crawled away'];

randomize.addEventListener('click', result);

    function result() {
        var newStory = storyText
        var xItem = randomValueFromArray(insertX)
        var yItem = randomValueFromArray(insertY)
        var zItem = randomValueFromArray(insertZ)

        var newStory = newStory.replace(':insertx:', xItem);
        var newStory = newStory.replace(':inserty:', yItem);
        var newStory = newStory.replace(':insertz:', zItem);
        // var newStory = newStory.replace(':insertx:', xItem);

        if(document.getElementById("scary").checked) {
            const scary = scary.value;
            newStory = newStory.replace(newStory, 'BOO')
            };

        if(customName.value !== '') {
            const name = customName.value;
            newStory = newStory.replace('Bob', name);
        }


        //changed placeholders to actual text
        if(customAdverb.value !== '') {
            const adverb = customAdverb.value;
            newStory = newStory.replace('extremely', adverb);
        }

        //example of replaceAll replacing more than one substring
        if(customAdjective.value !== '') {
            const adjective = customAdjective.value;
            newStory = newStory.replaceAll('empty', adjective);
        }

        if(customPluralNoun.value !== '') {
            const pluralNoun = customPluralNoun.value;
            newStory = newStory.replace('haunted', pluralNoun);
        }

        if(customPluralNoun.value !== '') {
            const pluralNoun = customPluralNoun.value;
            newStory = newStory.replace('corpses', pluralNoun);
        }

        if(customPluralNoun2.value !== '') {
            const pluralNoun2 = customPluralNoun2.value;
            newStory = newStory.replace('knives', pluralNoun2);
        }

        if(customFood.value !== '') {
            const food = customFood.value;
            newStory = newStory.replace('eggs', food);
        }

        if(customEmotion.value !== '') {
            const emotion = customEmotion.value;
            newStory = newStory.replace('scared', emotion);
        }

        if(customVerb.value !== '') {
            const verb = customVerb.value;
            newStory = newStory.replace('walk', verb);
        }

        if(customAdjective2.value !== '') {
            const adjective2 = customAdjective2.value;
            newStory = newStory.replace('spooky', adjective2);
        }

        

        story.textContent = newStory;
        story.style.visibility = 'visible';
    };

