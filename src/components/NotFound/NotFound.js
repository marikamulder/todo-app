import './NotFound.scss';

function NotFound() {
    return (
        <div className="error404">
            <h1>Page not found</h1>
            <p>Please check that the url you have inputted is correctly spelled.</p>
            <p>Otherwise, go back to the previous page or use the links in the menu above.</p>
        </div>
    );
}

export default NotFound;