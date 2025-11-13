

function App() {


  return (
    <>
      <div className="container">
        <header>
          <h1>INVIA I TUOI DATI</h1>
        </header>
        <main>
          <form>
            <div className="mb-3">
              <label className="form-label">Author</label>
              <input type="text" className="form-control" />
            </div>
            <div className="mb-3">
              <label className="form-label">Title</label>
              <input type="text" className="form-control" />
            </div>
            <div className="mb-3">
              <label className="form-label">Body</label>
              <textarea className="form-control" rows="3"></textarea>
            </div>
            <div className="row d-flex justify-content-center">
              <div className="col-2">
                <div className="mb-3 form-check">
                  <input type="checkbox" className="form-check-input" />
                  <label className="form-check-label">Pubblico</label>
                </div>
              </div>
              <div className="col-2">
                <div className="mb-3 form-check">
                  <input type="checkbox" className="form-check-input" />
                  <label className="form-check-label">Bozza</label>
                </div>
              </div>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
          </form>
        </main>
      </div>
    </>
  )
}

export default App
