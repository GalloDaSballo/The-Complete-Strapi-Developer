module.exports = async (ctx, next) => {
  if (ctx.state.user) {
    // Go to next policy or will reach the controller's action.
    return await next();
  }

  ctx.unauthorized(`You're not logged in!`); //returns a 401
  //403 always means unauthorized BUT because it's not set in the Roles & Permissions
  //401 comes from ctx.unauthorized
  //This way you always know if it comes from the policy or from the Roles & Permissions
};
