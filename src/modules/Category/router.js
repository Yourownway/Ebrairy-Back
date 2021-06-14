class CategoryRouter {
  constructor({ router, categoryController }) {
    this.router = router;
    this.initializeRoutes({ categoryController });
    return this.router;
  }

  initializeRoutes({ categoryController }) {
    this.router.route('/categories').get(categoryController.getAll);
  }
}

export default CategoryRouter;
