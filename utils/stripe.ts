import Stripe from "stripe";

const secretKey = process.env.STRIPE_SECRET_KEY;

if (!secretKey) {
  throw new Error("Stripe secret key not provided");
}

const stripe = new Stripe(secretKey, {
  // apiVersion: "2024-06-20",
  apiVersion: "2024-12-18.acacia",
});

export default stripe;
