import { Router } from 'express';

import db from '../../config/db/models';

import CategoryController from './controller';
import CategoryRouter from './router';
import CategoryService from './service';
import CategoryRepository from './repository';

import { ApiError } from '../../helpers/error';
import responseHandler from '../../helpers/response';

const Category = require('./categoryDao');

const router = Router();

const categoryDao = Category(db.sequelize, db.Sequelize.DataTypes);
const categoryRepository = new CategoryRepository(categoryDao);

const categoryService = new CategoryService(categoryRepository);

const categoryController = new CategoryController({
  categoryService,
  responseHandler
});
console.log(categoryController.getAll(), 'lal');
const categoryRouter = new CategoryRouter({
  router,
  categoryController
});

export default categoryRouter;
