import '@app/index.scss';
import type { AppProps } from 'next/app';
import store from '@app/store';
import { Provider } from 'react-redux';

export default function App({ Component, pageProps }: AppProps) {
  console.log(store.getState());
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  )
}
  