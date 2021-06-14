import db from '../../config/db/models';

import CategoryGenreService from './service';
import CategoryGenreRepository from './repository';

import { ApiError } from '../../helpers/error';
import responseHandler from '../../helpers/response';

const categoryGenre = require('./categoryGenreDao');



const categoryGenreDao = CategoryGenre(db.sequelize, db.Sequelize.DataTypes);

const categoryGenreRepository = new CategoryGenreRepository({
  categoryGenreDao,
  ApiError
});
const categoryGenreService = new CategoryGenreService({
  categoryGenreRepository,
  ApiError
});

 


exports { categoryGenreService}