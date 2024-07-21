'use strict';

/**
 * packet router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::packet.packet');
