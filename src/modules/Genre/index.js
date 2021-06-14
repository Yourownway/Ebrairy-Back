import { Router } from 'express';

import db from '../../config/db/models';

import GenreController from './controller';
import GenreRouter from './router';
import GenreService from './service';
import GenreRepository from './repository';

import { ApiError } from '../../helpers/error';
import responseHandler from '../../helpers/response';

const Genre = require('./genreDao');

const router = Router();

const genreDao = Genre(db.sequelize, db.Sequelize.DataTypes);

const genreRepository = new GenreRepository({
  genreDao,
  ApiError
});
const genreService = new GenreService({ genreRepository, ApiError });

const genreController = new GenreController({
  genreService,
  responseHandler
});

const genreRouter = new GenreRouter({
  router,
  genreController
});

export default genreRouter;
