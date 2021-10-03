import { Switch, Route } from 'react-router-dom'
import VideoConverter from '../VideoConverter/index';
import Layout from '../../components/Layout/index.jsx';
import YoutubePage from '../Youtube';
const Routes = () => {
  return (
    <Layout>
      <Switch>
        <Route path='/'exact component={VideoConverter} />
        <Route path='/pdf' component={YoutubePage} />
      </Switch>
    </Layout>
  )
}

export default Routes;