'use strict';

/**
 * `Email` service.
 */

module.exports = {
  sendEmail: async (to, subject, html) => {
    strapi.log.info("services.email.sendEmail Sending email")
    await strapi.plugins['email'].services.email.send({
      to,
      from: 'xawope5903@4xmail.org',
      replyTo: 'xawope5903@4xmail.org',
      subject,
      html
    });
    strapi.log.info("services.email.sendEmail Email sent")
  }
};
