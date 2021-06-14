class CategoryController {
  constructor({ categoryService, responseHandler }) {
    this.categoryService = categoryService;
    this.responseHandler = responseHandler;
  }

  getAll = async (req, res, next) => {
    try {
      let categories = await this.categoryService.getAll();
      // res.status(200).json({ coucou: 'hello' });
    } catch (err) {
      console.log(err);
    }
  };
}

export default CategoryController;
