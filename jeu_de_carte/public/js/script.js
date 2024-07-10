async function pars_json(url) {
    const reponse = await fetch(url)
    const fichier = reponse.json()
    console.log(fichier.PromiseResult)
}
    pars_json("https://arfp.github.io/tp/web/javascript/03-ardgame/cardgame.json")