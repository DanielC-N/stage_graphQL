// Importer XMLHttpRequest car node !== navigateur
let xhttp = new XMLHttpRequest();

// Variables pour serveur et requête
const yourServerUrl = 'https://diegesis.bible/graphql'
const yourQuery = {
    query: `{
        localEntries {
            transId
            types
            title
            language
            source
            owner
            revision
        }
        
    }` 
   
};

// Créer une instance du client HTTP
const xhr = new XMLHttpRequest();

// La réponse sera en JSON
xhr.responseType = 'json';

// Commencer la requête
xhr.open('POST', yourServerUrl);

// Déclarer que la requête est en JSON
xhr.setRequestHeader('Content-Type', 'application/json');

const entryRecords = function (response) {
    console.log(JSON.stringify(response, null, 4))
	return response["data"]["localEntries"]
}

const baseAdress = "https://diegesis.bible/entry/details/"


// Fonction 'callback' qui sera appelé quand la réponse arrivera
// JSON.stringify transforme une chaîne en object
// Les arguments null et 2 formatent ce JSON sur plusieurs lignes
xhr.onload = function () {
    let source = ""
    let transId = ""
    let idlastmodif = ""
	const ret = []
	ret.push("<table>")
	for (const record of entryRecords(xhr.response)) {
        source = record.source
        transId = record.transId
        idlastmodif = record.revision 
		ret.push(`<tr>`)
        ret.push(`<th> Ressources types </th>`)
        ret.push(`<th> Languages </th>`)
        ret.push(`<th> Title </th>`)
        ret.push(`<tr>`)
		ret.push(`<td> ${ record.types }</td>`)
		ret.push(`</tr>`)
        ret.push(`<tr>`)
        ret.push(`<td> ${ record.language } </td>`)
        ret.push(`</tr>`)
        ret.push(`<tr>`)
        ret.push(`<td> ${ record.title }</td>`)
        ret.push(`</tr>`)
        ret.push(`<tr>`)
        ret.push(`<tr>`)
        ret.push(`<td><a href="${baseAdress}${record.source}/${record.transId}/${record.revision}">${record.title}</a> </td>`)
        ret.push(`</tr>`)
        
	}

        ret.push("</table>")
        console.log(ret.join("\n"))
        //console.log(JSON.stringify(xhr.response, null, 8))
        
};
// Envoyer la requête JSON, transformé en chaîne, au serveur
// Le client attend une réponse, puis execute la fonction callback
xhr.send(JSON.stringify(yourQuery));


// A FAIRE
// * Ajouter les autres champs
// * Ajouter un champs inexistant pour voir une réponse erreur
// * Modifier le code pour retourner un objet qui ne contient que le tableau
//   d'infos ressources
// * Utiliser xe tableau JSON pour générer les rangés d'un tableau HTML dans une chaîne
