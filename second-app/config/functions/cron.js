'use strict';

/**
 * Cron config that gives you an opportunity
 * to run scheduled jobs.
 *
 * The cron format consists of:
 * [MINUTE] [HOUR] [DAY OF MONTH] [MONTH OF YEAR] [DAY OF WEEK] [YEAR (optional)]
 */

module.exports = {
  /**
   * Executes every minute
   */
  '* * * * * *': async () => {
    // strapi.services.email.sendEmail("xawope5903@4xmail.org", "The subject", "<p>The html</p>")
    //
    // const book = await strapi.services.book.find({'users_contains': 1})
    // console.log("book", book)

    //Validation / Checks / Controls

    // const book_creation = await strapi.services.book.create({
    //   title: "Dynamically created",
    //   users: [1]
    // })
    //
    // console.log("Newly created book book_creation", book_creation)
    //
    // console.log("Now we update it")
    //
    // const book_updated = await strapi.services.book.update(
    //   {
    //     id: book_creation.id
    //   },
    //   {
    //     title: "My newly updated title"
    //   }
    // )
    //
    // console.log("new book_updated", book_updated)
  }
};
