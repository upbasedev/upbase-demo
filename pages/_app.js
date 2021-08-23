import "../index.css";

import App from "next/app";
import AppProvider from "components/AppProvider";
import Page from "layout/Page";
class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;

    return (
      <>
        <AppProvider>
          <Page>
            <Component {...pageProps} />
          </Page>
        </AppProvider>
      </>
    );
  }
}

MyApp.getInitialProps = async (appContext) => ({
  ...(await App.getInitialProps(appContext)),
});

export default MyApp;
