'use strict';

/**
 * packet controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::packet.packet');
