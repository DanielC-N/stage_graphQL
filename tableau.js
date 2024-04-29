
const retJson = [
    {
        "title": "American Standard Version (1901)",
        "source": "eBible",
        "transId": "eng-asv",
        "idlastmodif": "2023-03-03",
        "types": [
            "bible"
        ],
        "language": "en"
    },
    {
        "title": "Berean Study Bible",
        "source": "DBL",
        "transId": "bba9f40183526463",
        "idlastmodif": "3",
        "types": [
            "bible"
        ],
        "language": "en"
    },
    {
        "title": "Bible in Basic English",
        "source": "eBible",
        "transId": "engBBE",
        "idlastmodif": "2020-04-17",
        "types": [
            "bible"
        ],
        "language": "en"
    },
    {
        "title": "Darby Translation",
        "source": "eBible",
        "transId": "engDBY",
        "idlastmodif": "2019-11-15",
        "types": [
            "bible"
        ],
        "language": "en"
    },
    {
        "title": "Easy-to-Read Version",
        "source": "eBible",
        "transId": "engerv",
        "idlastmodif": "2018-08-30",
        "types": [
            "bible"
        ],
        "language": "en"
    },
    {
        "title": "Free Bible Version",
        "source": "DBL",
        "transId": "65eec8e0b60e656b",
        "idlastmodif": "9",
        "types": [
            "bible"
        ],
        "language": "en"
    },
    {
        "title": "French GLT",
        "source": "DCS",
        "transId": "69772",
        "idlastmodif": "1",
        "types": [
            "bible"
        ],
        "language": "fr"
    },
    {
        "title": "King James Version [eng] without Strong's numbers, 1769 standardized text",
        "source": "DBL",
        "transId": "de4e12af7f28f599",
        "idlastmodif": "5",
        "types": [
            "bible"
        ],
        "language": "en"
    },
    {
        "title": "Louis Segond 1910",
        "source": "DCS",
        "transId": "70206",
        "idlastmodif": "2",
        "types": [
            "bible"
        ],
        "language": "fr"
    },
    {
        "title": "Reina Valera 1909",
        "source": "DBL",
        "transId": "592420522e16049f",
        "idlastmodif": "7",
        "types": [
            "bible"
        ],
        "language": "es"
    },
    {
        "title": "Sainte Bible néo-Crampon Libre",
        "source": "eBible",
        "transId": "francl",
        "idlastmodif": "2023-03-04",
        "types": [
            "bible"
        ],
        "language": "fr"
    },
    {
        "title": "Santa Biblia — Reina Valera 1909",
        "source": "eBible",
        "transId": "spaRV1909",
        "idlastmodif": "2013-12-13",
        "types": [
            "bible"
        ],
        "language": "es"
    },
    {
        "title": "Texto Puente Literal",
        "source": "DCS",
        "transId": "64560",
        "idlastmodif": "1",
        "types": [
            "bible"
        ],
        "language": "es-419"
    },
    {
        "title": "Texto Puente Simple",
        "source": "DCS",
        "transId": "64562",
        "idlastmodif": "1",
        "types": [
            "bible"
        ],
        "language": "es-419"
    },
    {
        "title": "unfoldingWord® Greek New Testament",
        "source": "DCS",
        "transId": "52426",
        "idlastmodif": "30",
        "types": [
            "bible"
        ],
        "language": "el-x-koine"
    },
    {
        "title": "unfoldingWord® Literal Text",
        "source": "DCS",
        "transId": "11419",
        "idlastmodif": "46",
        "types": [
            "bible"
        ],
        "language": "en"
    },
    {
        "title": "unfoldingWord® Simplified Text",
        "source": "DCS",
        "transId": "11992",
        "idlastmodif": "45",
        "types": [
            "bible"
        ],
        "language": "en"
    }
]

// console.log(JSON.stringify(retJson, null, 4));
//    const ret = [];
//    ret.push("<ul>");
//    for (const rec of retJson) {
//     ret.push(`<li>${rec.title}</li>`);
//    }
//    ret.push("</ul>");
//     document.getElementById("myScriptTarget").innerHTML = ret.join("\n");

const ret = [];
const baseAdress = "https://diegesis.bible/entry/details/"

ret.push(`<div class= "tableau">`)
        
    ret.push(`<div class="categories ressources "> Resource types </div>`)
    ret.push(`<div class="categories langues "> Languages </div>`)
    ret.push(`<div class="categories liens "> Titles </div>`)
       

let rowType="odd"       

for (const rec of retJson){
    source = rec.source
    transId = rec.transId
    idlastmodif = rec.revision
    //ret.push(`<a target="_blank" href="${baseAdress}${rec.source}/${rec.transId}/${rec.revision}">`)
    ret.push(`<a target="_blank" href="${baseAdress}${rec.source}/${rec.transId}/${rec.revision}" class="ressources ${rowType}">${rec.types}</a>`)
    ret.push(`<a target="_blank" href="${baseAdress}${rec.source}/${rec.transId}/${rec.revision}" class="langues ${rowType}">${rec.language}</a>`)
    ret.push(`<a target="_blank" href="${baseAdress}${rec.source}/${rec.transId}/${rec.revision}" class="liens ${rowType}">${rec.title}</a>`)
    rowType=rowType=="odd"? "even": "odd"
    //ret.push(`</a>`)
}

ret.push(`</div>`)

document.getElementById("myScriptTarget").innerHTML= ret.join("\n")