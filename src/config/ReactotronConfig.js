import Reacotron from 'reactotron-react-js';
import { reactotronRedux } from 'reactotron-redux';

if (process.env.NODE_ENV === 'development') {
  const tron = Reacotron.configure()
    .use(reactotronRedux())
    .connect()

  tron.clear()

  console.tron = tron
}
