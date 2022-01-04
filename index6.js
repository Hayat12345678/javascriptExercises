// 1)
let article = "Ich habe mir immer gewünscht, dass mein Computer so leicht zu bedienen ist wie mein Telefon; mein Wunsch ging in Erfüllung: mein Telefon kann ich jetzt auch nicht mehr bedienen. "
// 2)
let isZitat = article.includes("Telefon");

console.log(isZitat);
// 3)
 isZitat = article.includes("Stroustrup");

console.log(isZitat);


let zitat = "Ich habe mir immer gewünscht, dass mein Computer so leicht zu bedienen ist wie mein Telefon; mein Wunsch ging in Erfüllung: mein Telefon kann ich jetzt auch nicht mehr bedienen."

function check(searchWord){
    let included = zitat.includes(searchWord);
    console.log("Suchergebnis:", included);
}
check("Telefon");
check("Stroustrup");