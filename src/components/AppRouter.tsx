import { Switch, Route, Redirect } from "react-router-dom"

import { routes } from "../routes"
import { RouteNames } from "../routes"

const AppRouter = () => {
    return (
        <Switch>
            {routes.map(route => 
                    <Route 
                        path={route.path}
                        exact={route.exact}
                        component= {route.component}
                        key={route.path}
                    />
                )}
                <Redirect to={RouteNames.SHOP} />
        </Switch>
    )
}

export default AppRouter