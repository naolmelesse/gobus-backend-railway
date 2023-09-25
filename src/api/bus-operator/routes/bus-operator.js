'use strict';

/**
 * bus-operator router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::bus-operator.bus-operator');
