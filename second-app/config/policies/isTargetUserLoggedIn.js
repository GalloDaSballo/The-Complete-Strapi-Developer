//Checks the target user from filter
//Checks the current logged in user
//If they are the same it let's execution run
module.exports = async (ctx, next) => {
  if (ctx.state.user) {

    if(!ctx.request.query.user){
      return ctx.unauthorized("Specify a targer user equal to your own id ?user=${user.id}");
    }
    console.log("config/policies/isTargetUserLoggedIn ctx.request.query", ctx.request.query)

    const targetUser = ctx.request.query.user.toString()
    const loggedInUser = ctx.state.user.id.toString()

    console.log("config/policies/isTargetUserLoggedIn targetUser", targetUser)
    console.log("config/policies/isTargetUserLoggedIn loggedInUser", loggedInUser)

    if(targetUser === loggedInUser){
      return await next();
    } else {
      return ctx.unauthorized(`Target user is different from logged in user`);
    }
  }

  ctx.unauthorized(`You're not logged in!`);
};
