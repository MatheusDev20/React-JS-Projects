import { Switch, Route } from 'react-router-dom'
import VideoConverter from '../VideoConverter/index';
import Layout from '../../components/Layout/index.jsx';
const Routes = () => {
  console.log('?')

  return (
      <Layout>
        <Switch>
          <Route path='/' component={VideoConverter} />
        </Switch>
      </Layout>
  )
}

export default Routes;