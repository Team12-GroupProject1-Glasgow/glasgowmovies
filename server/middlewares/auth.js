const { User } = require('../models');
const { checkToken } = require('../helpers/jwt');

const authenticate = async (req, res, next) => {
    try {
        let decoded = checkToken(req.headers.access_token);
        let output = await User.findOne({where: {email: decoded.email}})
        req.user = ({id: output.id});
        next();
    } catch(err) {res.status(400).json({message: 'Please login first'} )}
}

// belum tau ada crud apa ngga jadi authorize commented dulu

// const authorize = async (req, res, next) => {
//     try {
//         let output = await Movie.findOne({where: {id: req.params.id}})
//         if (output.UserId === req.user.id) {
//             next();
//         } else {
//             res.status(401).json({message: 'Unauthorized'})
//         }
//     } catch(err) {res.status(404).json({message: 'Not Found'})}
// }

module.exports = {authenticate}