const { BadRequestException, NotFoundException } = require("../config/errors")

function handler (error, req, res, next) {
    if(error instanceof BadRequestException) {
        return res.status(400).json({error})
    }
    if(error instanceof NotFoundException) {
        return res.status(404).json({error})
    }

    res.status(500).json({error})
}

module.exports = handler