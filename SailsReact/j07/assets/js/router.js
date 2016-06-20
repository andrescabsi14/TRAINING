import React from 'react';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import Home from './sections/Dashboard.jsx';

// export default (
// 	<Router history={browserHistory}>
// 		<Route component={MainLayout}>
// 			<Route path="/" component={Home} />

// 			<Route path="users">
// 				<Route component={SearchLayout}>
// 					<IndexRoute component={UserList} />
// 				</Route>
// 				<Route path=":userId" component={UserProfile} />
// 			</Route>

// 			<Route path="widgets">
// 				<Route component={SearchLayout}>
// 					<IndexRoute component={WidgetList} />
// 				</Route>
// 			</Route>

// 		</Route>
// 	</Router>
// )

<Router>
    <Route path="/" component={Home} />
    
</Router>