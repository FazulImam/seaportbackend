'use strict';

/**
 * rider service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::rider.rider');
