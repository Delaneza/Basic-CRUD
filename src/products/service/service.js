const { BadRequestException, NotFoundException } = require('../../config/errors')

class Service {
    constructor(database) {
        this.database = database
    }

    // GET ALL
    getAll = () => {
        return this.database
    }

    // GET PRODUCT
    getProduct(id) {
        return this.database[id]
    }

    // CREATE PRODUCT
    createProduct = ({id, prod_name, price}) => {
        const created = this.database.push({id, prod_name, price})

        return {id: created}
    }

    // UPDATE
    updateProduct = ({id, prod_name, price}) => {
        this.database[id] = {id, prod_name, price}

        return this.database[id]
    }

    // DELETE
    deleteProduct = ({id}) => {
        const deleted = this.database.splice(id, 1)

        return deleted
    }

}

module.exports = { Service }