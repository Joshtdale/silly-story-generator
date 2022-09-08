// console.log('script working')

const customName = document.getElementById('customname');
const customAdverb = document.getElementById('customAdverb')
const customAdjective = document.getElementById('customAdjective')
const customPluralNoun = document.getElementById('customPluralNoun')
const customPluralNoun2 = document.getElementById('customPluralNoun2')
const customEmotion = document.getElementById('customEmotion')
const customVerb = document.getElementById('customVerb')
const customAdjective2 = document.getElementById('customAdjective2')


const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

    function randomValueFromArray(array){
        const random = Math.floor(Math.random()*array.length);
        return array[random];
    }

const storyText = "There is a house on my :insertx: that is :adverb: haunted. It's the old :inserty: place that's been :adjective: for hundreds of years. I can tell the house is :adjective: because there are :pluralNoun: and :adjective: :pluralNoun2: outside, and it smells like old :food:. I heard that a kid named Bob went inside and never came back out. My friends and I are :emotion: to :verb: past the house because it's so :adjective2:";
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

        if(customName.value !== '') {
            const name = customName.value;
            newStory = newStory.replace('Bob', name);
        }

        if(customAdverb.value !== '') {
            const adverb = customAdverb.value;
            newStory = newStory.replace(':adverb:', adverb);
        }

        //example of replaceAll replacing more than one substring
        if(customAdjective.value !== '') {
            const adjective = customAdjective.value;
            newStory = newStory.replaceAll(':adjective:', adjective);
        }

        if(customPluralNoun.value !== '') {
            const pluralNoun = customPluralNoun.value;
            newStory = newStory.replace(':pluralNoun:', pluralNoun);
        }

        if(customPluralNoun2.value !== '') {
            const pluralNoun2 = customPluralNoun2.value;
            newStory = newStory.replace(':pluralNoun2:', pluralNoun2);
        }

        if(customFood.value !== '') {
            const food = customFood.value;
            newStory = newStory.replace(':food:', food);
        }

        if(customEmotion.value !== '') {
            const emotion = customEmotion.value;
            newStory = newStory.replace(':emotion:', emotion);
        }

        if(customVerb.value !== '') {
            const verb = customVerb.value;
            newStory = newStory.replace(':verb:', verb);
        }

        if(customAdjective2.value !== '') {
            const adjective2 = customAdjective2.value;
            newStory = newStory.replace(':adjective2:', adjective2);
        }

        if(document.getElementById("uk").checked) {
        const weight = Math.round(300 * 0.0714286) + ' stone';
        const temperature =  Math.round((94 - 32) * 5/9) + ' centigrade';
        var newStory = newStory.replace('94 fahrenheit', temperature);
        var newStory = newStory.replace('300 pounds', weight);
        };

        story.textContent = newStory;
        story.style.visibility = 'visible';
    };

