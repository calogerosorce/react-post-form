

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
              <label for="exampleInputEmail1" className="form-label">Email address</label>
              <input type="email" className="form-control" aria-describedby="emailHelp" />
            </div>
            <div className="mb-3">
              <label for="exampleInputEmail1" className="form-label">Email address</label>
              <input type="email" className="form-control" aria-describedby="emailHelp" />
            </div>
            <div className="mb-3">
              <label for="exampleInputPassword1" className="form-label">Password</label>
              <input type="password" className="form-control" />
            </div>
            <div className="row d-flex justify-content-center">
              <div className="col-2">
                <div className="mb-3 form-check">
                  <input type="checkbox" className="form-check-input" />
                  <label className="form-check-label" for="exampleCheck1">Check me out</label>
                </div>
              </div>
              <div className="col-2">
                <div className="mb-3 form-check">
                  <input type="checkbox" className="form-check-input" />
                  <label className="form-check-label" for="exampleCheck1">Check me out</label>
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
