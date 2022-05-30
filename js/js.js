function search_characters() {  //maakt een ajax call naar characters.php en zet resultaat in html
    $.ajax({
        url: "characters.php",
        method: "GET",
        cache: false,
        data: {search_query: $('#search_query_characters').val()}, //informatie die je meestuurt naar characters.php (search_query is de naam en #search_query_characters').val() is de waarde uit .val (value))
        success: function (response) {
            $("#search_results").empty() //zoekresultaat wordt verwijderd voor nieuw zoek resultaat
            console.log(response);   //laat zien in de console.log wat er gebeurd en wat je terugkrijgt van characters.php
            response.forEach(search_result => {        //instead of writing function, you can use the =>        //loop door resultaat
                console.log(search_result["name"]);
                let name = search_result["name"];         // let makes a variable in js
                let species = search_result["species"];   //voor elk zoekresultaat maakt hij een apart search_result, die zet je in variable
                let house = search_result ["house"];
                let gender = search_result ["gender"];
                let ancestry = search_result ["ancestry"];
                let patronus = search_result ["patronus"];
                let wand = "";
                if (search_result["wand"]["core"]) {
                    wand = `wood: ${search_result["wand"]["wood"]}, core: ${search_result["wand"]["core"]}, length: ${search_result["wand"]["length"]}"`;
                }
                $("#search_results").append(`
                        <div class="card" style="width: 18rem;">
                          <div class="card-body">
                            <h5 class="card-title">${name}</h5>
                            <p class="card-text">
                                Species: ${species}<br />
                                House: ${house}<br />
                                Gender: ${gender}<br />
                                Ancestry: ${ancestry}<br />
                                Wand: ${wand}<br />
                                Patronus: ${patronus}<br />
                                </p>
                            </div>
                        </div>
                    `);
            });
        }
    })
}

function search_spells() {
    $.ajax({
        url: "spells.php",
        method: "GET",
        cache: false,
        data: {search_query: $('#search_query_spells').val()},
        success: function (response) {
            $("#search_results").empty()
            console.log(response);
            response.forEach(search_result => {        //instead of writing function, you can use the =>
                console.log(search_result["name"]);
                let name = search_result["name"];         // let makes a variable in js
                let type = search_result["type"];
                let pronunciation = search_result ["pronunciation"];
                let description = search_result ["description"];
                let seen = search_result ["seen_mentioned"];
                $("#search_results").append(`
                        <div class="card" style="width: 18rem;">
                          <div class="card-body">
                            <h5 class="card-title">${name}</h5>
                            <p class="card-text">
                                Type: ${type}<br />
                                Pronunciation: ${pronunciation}<br />
                                Description: ${description}<br />
                                Seen/Mentioned: ${seen}<br />
                            </p>
                            </div>
                        </div>
                    `);
            });
        }
    })
}

$(document).ready(function () {
    $('#search_characters').on('click', function () {
        search_characters();
    });

    $('#search_query_characters').keypress(function (e) {
        let key = e.which;  //which is a property of Event objects. It is defined for key-related and mouse-related events in most browsers
        if(key == 13) { // 13 is the enter key code
            search_characters();
        }
    });

    $('#search_spells').on('click', function () {
        search_spells();
    })

    $('#search_query_spells').keypress(function (e) {
        let key = e.which;
        if(key == 13) { // 13 is the enter key code
            search_spells();
        }
    });
});