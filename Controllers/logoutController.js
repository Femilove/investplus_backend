const User = require('../model/User')

const handleLogout = async (req, res) => {
    // On client, also delete the accessToken

    const cookies = req.cookies;
    if (!cookies?.jwt) return res.sendStatus(204); //No content
    const refreshToken = cookies.jwt;

    // Is refreshToken in db?
    const foundUser = await User.findOne({refreshToken }).exec();
    if (!foundUser) {
        res.clearCookie('jwt', { httpOnly: true, sameSite: 'None', secure: true });
        return res.sendStatus(204);
    }

    // Delete refreshToken in db
   foundUser.refreshToken =  foundUser.refreshToken.filter(rt => rt !== refreshToken);
   const result = await foundUser.save();
   console.log(result);

    res.clearCookie('jwt', { httpOnly: true, sameSite: 'None', secure: true,  maxAge: 24 * 60 * 60 * 1000  });
    res.sendStatus(204);
}

module.exports = { handleLogout }