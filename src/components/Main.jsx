export default function Main({ formData, handleSubmit, handleFormdData }) {

    return (
        <div className="container">
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label className="form-label">Author</label>
                    <input type="text" name='author' className="form-control" value={formData.author} onChange={handleFormdData} />
                </div>
                <div className="mb-3">
                    <label className="form-label">Title</label>
                    <input type="text" name='title' className="form-control" value={formData.title} onChange={handleFormdData} />
                </div>
                <div className="mb-3">
                    <label className="form-label">Body</label>
                    <textarea type="text" name='body' className="form-control" value={formData.body} onChange={handleFormdData} rows='3' />
                </div>
                <div className="row d-flex justify-content-center">
                    <div className="col-2">
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" name="public" value={true} checked={formData.name} onChange={handleFormdData} />
                            <label className="form-check-label">
                                Pubblico
                            </label>
                        </div>
                    </div>
                    <div className="col-2">
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" name="public" value={false} checked={formData.name} onChange={handleFormdData} />
                            <label className="form-check-label">
                                Bozza
                            </label>
                        </div>
                    </div>
                </div>
                <button type="submit" className="btn btn-primary">Invia dati</button>
            </form>
        </div>
    )
}