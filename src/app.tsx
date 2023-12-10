import classes from './app.module.scss';
import Layout from './containers/layout/layout';
import { RouterProvider } from 'react-router-dom';
import router from './app.router';

function App() {

  return (
    <div className={classes.app}>
      <Layout />
      <div className={classes.container}>
        <RouterProvider router={router} />
      </div>
    </div>
  )
}

export default App
