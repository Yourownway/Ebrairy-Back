class CategoryService {
  constructor(categoryRepo) {
    this.categoryRepo = categoryRepo;
  }

  async getAll() {
    return await this.categoryRepo.getAll();
  }
}

export default CategoryService;
