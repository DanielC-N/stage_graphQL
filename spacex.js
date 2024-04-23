const spacexUrl = 'https://spacex-production.up.railway.app/'
const spaceX = {
    query:`{
        company {
            ceo
        }
    
    }`
};



function createHttpRequestDiegesis() {

}

const xhr = new XMLHttpRequest();


xhr.responseType = 'json';


xhr.open('POST',spacexUrl);


xhr.setRequestHeader('Content-Type', 'application/json');

const entryRecords = function (response) {
     console.log(JSON.stringify(response, null, 4))
    return response["data"] ["company"]
}

xhr.onload = function () {
    console.log(xhr.response);}

xhr.send(JSON.stringify(spaceX));