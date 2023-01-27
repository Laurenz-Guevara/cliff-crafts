const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

export default async function handler(req, res) {
  if (req.method === 'POST') {
    console.log;
    try {
      const params = {
        submit_type: 'pay',
        mode: 'payment',
        payment_method_types: ['card'],
        line_items: [
          {
            price: 'price_1MUXAHGzQtIIMK9gywFGaODf',
            quantity: 1,
          },
        ],
        mode: 'payment',
        success_url: `${req.headers.origin}/?success=true`,
        cancel_url: `${req.headers.origin}/?canceled=true`,
        automatic_tax: { enabled: true },
      };
      const session = await stripe.checkout.sessions.create(params);
      res.redirect(303, session.url);
    } catch (err) {
      res.status(err.statusCode || 500).json(err.message);
    }
  } else {
    res.setHeader('Allow', 'POST');
    res.status(405).end('Method Not Allowed');
  }
}
