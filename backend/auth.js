const jwt = require('jsonwebtoken')

module.exports.verifyToken = (req, res, next) => {
    if (!req.headers.authorization) {
        res.status(401).send({ message1: "Unauthorized" })
    } else {
        jwt.verify(req.headers.authorization.split(' ')[1], 'secretkey', function (err, decoded) {
            if (decoded) {
                req.user = decoded.data
                next()
            } else {
                res.status(401).send({ MessageFromLastElseBlock: "Unauthorized" })
            }
        })
    }
}