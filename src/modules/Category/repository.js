class CategoryRepository {
  constructor(categoryDAO) {
    this.categoryDAO = categoryDAO;
    console.log(categoryDAO, 'ici');
  }
  async getAll() {
    const data = await this.categoryDAO.findAll();

    return data;
  }
}

export default CategoryRepository;
