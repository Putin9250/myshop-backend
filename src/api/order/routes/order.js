'use strict';

module.exports = {
  routes: [
    // ✅ Default create route (THIS FIXES YOUR ERROR)
    {
      method: 'POST',
      path: '/orders',
      handler: 'order.create',
      config: {
        policies: [],
        middlewares: [],
      },
    },

    // ✅ Optional (good to have)
    {
      method: 'GET',
      path: '/orders',
      handler: 'order.find',
    },
    {
      method: 'GET',
      path: '/orders/:id',
      handler: 'order.findOne',
    },

    // ✅ Your Razorpay route
    {
      method: 'POST',
      path: '/orders/create-razorpay-order',
      handler: 'order.createRazorpayOrder',
      config: {
        policies: [],
        middlewares: [],
      },
    },
  ],
};