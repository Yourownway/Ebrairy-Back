class CategoryGenreRepository {
  constructor(categoryGenreDAO) {
    this.categoryGenreDAO = categoryGenreDAO;
  }

  async getAll() {
    return await this.categoryGenreDAO.findAll();
  }
}

export default CategoryGenreRepository;
