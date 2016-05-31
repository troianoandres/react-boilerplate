module.exports = (function () {
    // VENDOR LIBS
    const React = require('react');
    const ReactRouter = require('react-router');
    const Router = ReactRouter.Router;
    const render = require('react-dom').render;
    const browserHistory = ReactRouter.browserHistory;

    // ROUTE TYPES
    const Route = ReactRouter.Route;
    const IndexRoute = ReactRouter.IndexRoute;
    const Redirect = Router.Redirect;

    // VIEWS
    const views = require('application/views');

    const ModuleRouter = function () {
        this.routes = (
            <Route path='/' component={views.AppContainer}>
                <IndexRoute component={views.AppIndex} />
            </Route>
        );
    };

    ModuleRouter.prototype.run = function (mountElement) {
        render(<Router history={browserHistory} routes={this.routes} />, mountElement);
    };

    return new ModuleRouter();
})();