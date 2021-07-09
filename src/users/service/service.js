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
    getUser(id) {
        return this.database[id]
    }

    // CREATE PRODUCT
    createUser = ({id, name, age}) => {
        const created = this.database.push({id, name, age})

        return {id: created}
    }

    // UPDATE
    updateUser = ({id, name, age}) => {
        this.database[id] = {id, name, age}

        return this.database[id]
    }

    // DELETE
    deleteUser = ({id}) => {
        const deleted = this.database.splice(id, 1)

        return deleted
    }

}

module.exports = { Service }