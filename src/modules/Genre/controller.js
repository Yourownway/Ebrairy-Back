class GenreController {
  constructor({ genreService }) {
    this.genreService = genreService;
  }

  getAll = async (req, res) => {
    try {
      let genres = await this.genreService.getAll();
      res.status(200).json(genres);
    } catch (err) {
      res.status(400).json(err);
    }
  };
}

export default GenreController;
