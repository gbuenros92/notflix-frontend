import './CreateMovie.css'

const CreateMovie = () => {
    return (
        <form className="row g-3" id='create-movie-form'>
            <div className="col-md-6">
                <label htmlFor="inputTitle4" className="form-label">Title</label>
                <input type="text" className="form-control" id="inputTitle4" />
            </div>
            <div className="col-md-6">
                <label htmlFor="inputGenre4" className="form-label">Genre</label>
                <input type="text" className="form-control" id="inputGenre4" />
            </div>
            <div className="col-12">
                <label htmlFor="inputPlot" className="form-label">Plot</label>
                <input type="text" className="form-control" id="inputPlot" placeholder="Movie description..." />
            </div>

            <div className="col-md-6">
                <label htmlFor="inputImage" className="form-label">Image</label>
                <input type="text" className="form-control" id="inputImage" />
            </div>

            <div className="col-md-2">
                <label htmlFor="inputContentRating" className="form-label">Content Rating</label>
                <input type="text" className="form-control" id="inputContentRating" />
            </div>

            <div className="col-md-2">
                <label htmlFor="inputIMDBrating" className="form-label">IMDB Rating</label>
                <input type="text" className="form-control" id="inputIMDBrating" />
            </div>

            <div className="col-md-2">
                <label htmlFor="inputRuntimeMins" className="form-label">Runtime Mins</label>
                <input type="text" className="form-control" id="inputRuntimeMins" />
            </div>

            <div className="col-12">
                <button type="submit" className="btn btn-primary">Create Movie</button>
            </div>
        </form>
    );
}

export default CreateMovie;