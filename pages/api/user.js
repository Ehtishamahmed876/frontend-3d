const { withIronSessionApiRoute } = require('iron-session/next');

const { sessionOptions } = require('../../lib/withSession');

function userRoute(req, res) {
  if (req.session.user) {
    res.json({
      ...req.session.user,
      isLoggedIn: true,
    });
  } else {
    res.json({
      isLoggedIn: false,
      id: '',
      username: '',
      register_as: '',
    });
  }
}

async function withIronSessionApiRouteWrapper(req, res) {
  return withIronSessionApiRoute(userRoute, sessionOptions)(req, res);
}

module.exports = withIronSessionApiRouteWrapper;
