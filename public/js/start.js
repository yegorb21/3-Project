$(document).ready(function () {

    var data = [
        {
            "id": 1,
            "name": "SpongeBob",
            "image": "https://vignette.wikia.nocookie.net/spongebobgalaxy/images/0/07/SpongeBob_SquarePants.png/revision/latest?cb=20171228024014",
            "occupation": "Fry Cook",
            "location": "A Pineapple Under the Sea"
        },
        {
            "id": 2,
            "name": "Mr. Krabs",
            "image": "https://vignette3.wikia.nocookie.net/vsbattles/images/8/80/Mr._Krabs.png/revision/latest?cb=20150919162131",
            "occupation": "Restaurant Owner",
            "location": "A Giant Anchor"
        },
        {
            "id": 3,
            "name": "Squidward",
            "image": "https://vignette2.wikia.nocookie.net/fictionalcharacters/images/a/ac/Squidward.png/revision/latest?cb=20131121012626",
            "occupation": "Cashier",
            "location": "An Easter Island Head"
        },
        {
            "id": 4,
            "name": "Captain Planet",
            "image": "http://vignette2.wikia.nocookie.net/dragon-rap-battles/images/b/b6/Captain_Planet.png/revision/latest?cb=20160911200836",
            "occupation": "Superhero",
            "location": "Earth"
        },
        {
            "id": 5,
            "name": "Courage",
            "image": "https://vignette4.wikia.nocookie.net/vsbattles/images/3/39/Courage-0.png/revision/latest?cb=20160719055423",
            "occupation": "A Cowardly Dog",
            "location": "Nowhere, Kansas"
        },
        {
            "id": 6,
            "name": "Doug Funnie",
            "image": "https://vignette1.wikia.nocookie.net/doug/images/3/3b/Doug001.gif/revision/latest?cb=20110807170511",
            "occupation": "Student",
            "location": "Bluffington"
        },
        {
            "id": 7,
            "name": "Bugs Bunny",
            "image": "https://vignette2.wikia.nocookie.net/deathbattlefanon/images/2/2b/Bugs_Bunny.png/revision/latest?cb=20151206010607",
            "occupation": "Looney Toon",
            "location": "A Rabbit Burrow"
        },
        {
            "id": 8,
            "name": "Tommy Pickles",
            "image": "https://vignette4.wikia.nocookie.net/uncyclopedia/images/e/e4/Tommy_Pickles.png/revision/latest?cb=20110530102641",
            "occupation": "Adventurer",
            "location": "California"
        }
    ]

    var htmlText = ""

    //   console.log(data)
    //   console.log(data[2])

    var wrapperHtml = '<div class="wrapper"></div>'
    $('body').append(wrapperHtml);

    var numTownsFolk = 6
    var numMafia = 2

    var allPeopleArr = [1, 2, 3, 4, 5, 6, 7, 8]
    var shuffledAllPeople = shuffle(allPeopleArr)
    console.log(shuffledAllPeople)

    var mafiaPeople = []
    var townsPeople = []


    mafiaPeople.push(shuffledAllPeople[0], shuffledAllPeople[1])
    townsPeople.push(shuffledAllPeople[2], shuffledAllPeople[3], shuffledAllPeople[4], shuffledAllPeople[5], shuffledAllPeople[6], shuffledAllPeople[7])

    var mafiaDict = {};

    mafiaDict["1"]

    console.log(mafiaPeople)


    for (var i = 0; i < data.length; i++) {
        var currItem = data[i]
        var isMafia = false

        if (mafiaPeople.indexOf(currItem.id) > -1) {
            isMafia = true
        }

        console.log(currItem.name + "'s mafia status: " + isMafia)

        var htmlText = ""

        // htmlText += '<div class="wrapper">'
        htmlText += '<div class="card">'
        htmlText += '<div class="img-container">'
        htmlText += '<img alt=' + currItem.name + ' src=' + currItem.image + '/>'
        htmlText += '</div>'
        htmlText += '<div class="content">'
        htmlText += '<ul>'
        htmlText += '<li>'
        htmlText += '<strong>Name:</strong> ' + currItem.name
        htmlText += '</li>'
        htmlText += '<li>'
        htmlText += '<strong>Occupation:</strong> ' + currItem.occupation
        htmlText += '</li>'
        htmlText += '<li>'
        htmlText += '<strong>Location:</strong> ' + currItem.location
        htmlText += '</li>'
        htmlText += '</ul>'
        htmlText += '</div>'
        htmlText += '<span class="remove" data-id="' + currItem.id + '" data-mafia="' + isMafia + '">'
        htmlText += '𝘅'
        htmlText += '</span>'
        htmlText += '</div>'
        // htmlText += '</div>'


        // var wrapper = $('<div className=')

        $('.wrapper').append(htmlText);

    }

    $(document).on("click", ".remove", function () {

        // you have a 2/3rds chance of successfully voting someone off. because i said so
        var voteDeciderNumber = randomIntFromInterval(1, 3)
        console.log(voteDeciderNumber)

        if (voteDeciderNumber == 3) {
            // if(!alert('Alert For your User!')){window.location.reload();}
            alert("The other townsfolk disagreed with your suspicion, the vote was unsuccessful")
        } else {
            alert("Rejoice! The townsfolk agreed with your suspicion, the vote was successful")
            $(this).parentsUntil(".wrapper").remove()

            var votedOffMafiaStatus = $(this).attr("data-mafia")
            var idToRemove = parseInt($(this).attr("data-id"))
            console.log("did you vote off a mafia:" + votedOffMafiaStatus)
            console.log("id of person being voted off: " + idToRemove)

            if (votedOffMafiaStatus == "true") {
                var removeIndex = mafiaPeople.indexOf(idToRemove)
                console.log("mafia remove index is: " + removeIndex)

                mafiaPeople.splice(removeIndex, 1)

                numMafia -= 1
            } else {
                var removeIndex = townsPeople.indexOf(idToRemove)

                console.log("town remove index is: " + removeIndex)

                townsPeople.splice(removeIndex, 1)

                numTownsFolk -= 1
            }

            console.log("towns people: " + townsPeople)
            console.log("mafia people: " + mafiaPeople)


            if (numMafia == 0) {
                alert("CONGRATS!! You have successfully eliminated all mafia members, and have won the game! Please refresh the page to play again.")
            }
        }



        alert("It is now nighttime...")

        var shuffledTownsPeople = shuffle(townsPeople)

        console.log("nighttime shuffled towns array: " + shuffledTownsPeople)

        var personKilled = parseInt(shuffledTownsPeople[0])

        console.log("person killed at night: " + personKilled)

        var nightKilledIndex = townsPeople.indexOf(personKilled)

        // console.log("night killed index: " + nightKilledIndex)

        var nameOfTownsKilled = data.find(x => x.id === personKilled).name

        console.log("name of towns killed: " + nameOfTownsKilled)

        alert("The townspeople awaken to a gruesome sight, " + nameOfTownsKilled + " has been killed in the night. Surely a work of the treacherous mafia.")

        $('span[data-id="'+ personKilled + '"]').parentsUntil(".wrapper").remove();

        townsPeople.splice(nightKilledIndex, 1)
        numTownsFolk -= 1

        if (numMafia >= numTownsFolk){
            alert("Oh no, the unthinkable has happened. The mafia runs rampant in the streets, they have reached numerical equality with the townsfolk and have won the game.")
        }

        //start night
    })

    function randomIntFromInterval(min, max) { // min and max included 
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    function shuffle(array) {
        var currentIndex = array.length, temporaryValue, randomIndex;

        // While there remain elements to shuffle...
        while (0 !== currentIndex) {

            // Pick a remaining element...
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;

            // And swap it with the current element.
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }

        return array;
    }


    //   $('body').append(htmlText);
});
