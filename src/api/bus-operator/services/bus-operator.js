'use strict';

/**
 * bus-operator service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::bus-operator.bus-operator');
