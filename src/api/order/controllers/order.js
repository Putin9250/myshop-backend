// src/api/order/controllers/order.js
"use strict";

const { createCoreController } = require("@strapi/strapi").factories;
const Razorpay = require("razorpay");

module.exports = createCoreController("api::order.order", ({ strapi }) => ({
  // Keep default methods (find, findOne, create, update, delete)
  async create(ctx) {
    // You can add custom logic before/after default create if needed
    return super.create(ctx);
  },

  // Custom method to create a Razorpay order
  async createRazorpayOrder(ctx) {
    try {
      const { amount } = ctx.request.body;

      console.log("Amount received:", amount);
      console.log("Key:", process.env.RAZORPAY_KEY_ID);

      const razorpay = new Razorpay({
        key_id: process.env.RAZORPAY_KEY_ID,
        key_secret: process.env.RAZORPAY_KEY_SECRET,
      });

      const order = await razorpay.orders.create({
        amount,
        currency: "INR",
        receipt: `receipt_${Date.now()}`,
      });

      return ctx.send(order);
    } catch (error) {
      console.error("Razorpay FULL ERROR:", error);
      ctx.throw(500, error.message);
    }
  },
}));
