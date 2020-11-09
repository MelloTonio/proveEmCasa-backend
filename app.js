import { resolve } from 'path';


import './src/database';
import express from 'express';

import userRoutes from './src/routes/userRoutes';
import tokenRoutes from './src/routes/tokenRoutes';


class App {
  constructor() {
    // Every time that you create a instance of the "App" class
    // you'll call all the constructor functions.
    this.app = express();
    this.middlewares();
    this.routes();
  }

  // Functions that stay in the middle of certain "actions".
  // The "action required" needs to pass through these functions to reach the final objective.
  middlewares() {
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.json());
    this.app.use(express.static(resolve(__dirname, 'uploads')));
  }

  // Routes that will help you handle HTTP requests.
  routes() {
    this.app.use('/users/', userRoutes);
    this.app.use('/tokens/', tokenRoutes);
  }
}

// Exporting express
export default new App().app;
