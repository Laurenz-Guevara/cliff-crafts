import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET!, {
  apiVersion: '2022-11-15',
});

export async function createStripeCheckoutSession(
  line_items: Stripe.Checkout.SessionCreateParams.LineItem[]
) {
  const url = process.env.WEBAPP_URL;

  const session = await stripe.checkout.sessions.create({
    submit_type: 'pay',
    mode: 'payment',
    payment_method_types: ['card'],
    billing_address_collection: 'auto',

    shipping_address_collection: { allowed_countries: ['GB'] },
    shipping_options: [
      { shipping_rate: 'shr_1MVLwyGzQtIIMK9gw8slKX2Y' },
      { shipping_rate: 'shr_1MVLxZGzQtIIMK9gdC2yStUu' },
    ],
    allow_promotion_codes: true,
    line_items,
    success_url: `${url}/success?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `${url}/failed`,
  });

  return session;
}
