'use strict';

/**
 * reserved-seat service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::reserved-seat.reserved-seat');
