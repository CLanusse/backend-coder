
class Productos {

    constructor () {
        this.items = []
    }

    agregar(producto) {
        const newItem = {
            id: this.items.length + 1,
            ...producto
        }
        this.items.push(newItem)

        return newItem
    }

    listarTodos() {
        return this.items
    }

    listarId(id) {
        return this.items.find(prod => prod.id === Number(id))
    }

}


module.exports = new Productos()