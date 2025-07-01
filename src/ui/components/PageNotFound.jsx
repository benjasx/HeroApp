import { Link } from 'react-router';

export const PageNotFound = () => {
    return (
        <div className="container">
            <div className="row min-vh-100 align-items-center justify-content-center">
                <div className="col-md-8 text-center">
                    <div className="display-1 fw-bold text-primary mb-4">404</div>
                    <h1 className="display-4 fw-bold mb-4">Page Not Found</h1>
                    <p className="lead text-muted mb-5">
                        The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
                    </p>
                    <Link
                        to="/"
                        className="btn btn-primary btn-lg px-5 py-3 shadow-sm"
                    >
                        <i className="fas fa-home me-2"></i>
                        Return Home
                    </Link>
                </div>
            </div>
        </div>
    );
};
