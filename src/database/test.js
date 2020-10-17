const Database = require('./db');
const saveOrphanage =  require('./saveOrphanage')

Database.then(async db => {
    // inserir dados na tabela 
   await saveOrphanage(db, {
        lat: "-18.9287974",
        lng: "-48.324422",
        name: "Casa da Criança",
        about: "Presta assistência a crianças de 06 a 15 anos que se encontre em situação de risco e/ou vulnerabilidade social.",
        whatsapp: "3412345678",
        images: [
            "https://portal.trt11.jus.br/images/Comunicacao/Noticias/2017/Abril/209.png",

            "https://clinicamedkids.com.br/wp-content/uploads/2019/11/crian%C3%A7as-brincando.jpg",

            "https://saomarcos.br/wordpress/escola/wp-content/uploads/2018/11/aprender-627x376.jpg",

            "https://wp.clicrbs.com.br/erechim/files/2010/10/tia-crianaas-4.jpg"

        ].toString(),
        instructions: "Venha como se sentir a vontade e traga muito amor e paciência para dar.",
        opening_hours: "Horários de visitar Das 8h às 18h",
        open_on_weekends: "1"
    })
    
    // consultar dados da tabela 
    const selectedOrphanages = await db.all("SELECT * FROM orphanages")
    console.log(selectedOrphanages)

    // consultar somente 1 orfanato pelo id
    const orphanage = await db.all('SELECT * FROM orphanages WHERE id = "5"')
    console.log(orphanage)

    // deletar dados da tabela 
    /*console.log(await db.run("DELETE FROM orphanages WHERE id=1"))
    console.log(await db.run("DELETE FROM orphanages WHERE id=2"))
    console.log(await db.run("DELETE FROM orphanages WHERE id=2"))
    console.log(await db.run("DELETE FROM orphanages WHERE id=4"))
    console.log(await db.run("DELETE FROM orphanages WHERE id=6"))*/

    
})