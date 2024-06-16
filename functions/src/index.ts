import { NextFunction, Request, Response } from 'express';
import { createStripeCheckoutSession } from './checkout';

const functions = require('firebase-functions');
const express = require('express');
const cors = require('cors')({ origin: 'https://cliff-crafts.web.app' });
const app = express();

app.use(cors);

app.post(
  '/checkouts/',
  runAsync(async ({ body }: Request, res: Response) => {
    res.send(await createStripeCheckoutSession(body.line_items));
  }),
);

function runAsync(callback: Function) {
  return (req: Request, res: Response, next: NextFunction) => {
    callback(req, res, next).catch(next);
  };
}

exports.api = functions.region('europe-west1').https.onRequest(app);
