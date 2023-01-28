const functions = require('firebase-functions');
const express = require('express');
const cors = require('cors')({ origin: 'https://cliffcrafts.com' });
const app = express();

app.use(cors);

import { createStripeCheckoutSession } from './checkout';

app.post(
  '/checkouts/',
  runAsync(async ({ body }: any, res: any) => {
    res.send(await createStripeCheckoutSession(body.line_items));
  })
);

function runAsync(callback: Function) {
  return (req: any, res: any, next: any) => {
    callback(req, res, next).catch(next);
  };
}

exports.api = functions.region('europe-west1').https.onRequest(app);
