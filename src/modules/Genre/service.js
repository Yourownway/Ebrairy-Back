class GenreService {
  constructor(genreRepo) {
    this.genreRepo = genreRepo;
  }

  async getAll() {
    return await this.genreRepo.getAll();
  }
}

export default GenreService;
