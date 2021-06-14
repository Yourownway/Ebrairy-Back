class CategoryGenreService {
  constructor(categoryGenreRepo) {
    this.categoryGenreRepo = categoryGenreRepo;
  }

  async getAll() {
    return await this.categoryGenreRepo.getAll();
  }
}

export default CategoryGenreService;
