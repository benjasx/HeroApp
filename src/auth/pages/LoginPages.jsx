import { useNavigate } from "react-router"

export const LoginPages = () => {
  const navigate = useNavigate()
  const onLogin = () => {
    navigate('/', {replace: true})
  }
  return (
    <div className="min-vh-100 d-flex align-items-center justify-content-center">
      <div className="card bg-dark text-light p-5"  style={{width: '400px'}}>
        <div className="card-header text-center border-secondary">
          <h3>Iniciar Sesión</h3>
        </div>
        <div className="card-body">
          <form>
            <div className="mb-3">
              <label htmlFor="username" className="form-label">Username:</label>
              <input 
                type="text" 
                className="form-control bg-dark text-light border-secondary" 
                id="username" 
                placeholder="Enter username"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">Password:</label>
              <input 
                type="password" 
                className="form-control bg-dark text-light border-secondary" 
                id="password" 
                placeholder="Password"
              />
            </div>
            <div className="d-grid">
              <button type="button" className="btn btn-outline-primary" onClick={onLogin}>
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
