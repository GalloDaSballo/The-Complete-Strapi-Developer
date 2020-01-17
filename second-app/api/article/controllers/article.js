'use strict';
//Controllers
const { parseMultipartData, sanitizeEntity } = require('strapi-utils');

/**
 * Read the documentation (https://strapi.io/documentation/3.0.0-beta.x/concepts/controllers.html#core-controllers)
 * to customize this controller
 */

module.exports = {
  /**
   * Create a record.
   *
   * @return {Object}
   */

  async create(ctx) {
    console.log("api/controllers/article.create strapi.services", strapi.services)
    console.log("api/controllers/article.create strapi.controllers", strapi.controllers)
    console.log("api/controllers/article.create strapi.models", strapi.models)
    console.log("api/controllers/article.create ctx.state.user", ctx.state.user)

    const { id } = ctx.state.user
    const {title, content} = ctx.request.body

    const article = {
      title,
      content,
      user: id
    }

    let entity;
    if (ctx.is('multipart')) {
      console.log("api/controllers/article.create we do not allow multipart")
      entity = null
      
    } else {
      entity = await strapi.services.article.create(article);
    }
    return sanitizeEntity(entity, { model: strapi.models.article });
  },
};
