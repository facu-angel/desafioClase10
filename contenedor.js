const fs = require('fs')
class Libreria {
    constructor(filename = "files.json"){
        this.id = 0
        this.array = []
        this.filename = filename
        this.init()
    }
    init(){
        let data = fs.readFileSync(this.filename)
        const lista = JSON.parse(data)
        for(const cadaObj of lista){
            this.insert(cadaObj)
        }
    }
    insert(objeto){
        objeto.id = ++this.id
        this.array.push(objeto)

    }
    find(number){
        return this.array.find(e=>e.id == number)
    }
    update(id, objeto){
        //busco el objeto a actualizar
        this.array = this.array.filter(e=>e.id != id)
        const updateObj = {
            title: objeto.title,
            price: objeto.price,
            id: id
        }
        this.array.push(updateObj)
    }
    deleteById(id){
        this.array = this.array.filter(e=>e.id != id)
    }
}

module.exports = Libreria