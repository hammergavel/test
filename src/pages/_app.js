import InnerLayout from "@/components/InnerLayout";
import JoinAuctionModal from "@/components/Modal";
import { persistor, store } from "@/store";
import "@/styles/globals.css";
import { Provider, useSelector } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

export default function App({ Component, pageProps }) {
  const admin = false;
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <>
          {!admin ? (
            <div className="flex justify-center">
              <div className="relative h-screen w-screen md:w-[390px] overflow-hidden">
                <InnerLayout>
                  <Component {...pageProps} />
                </InnerLayout>
              </div>
            </div>
          ) : (
            <div className="bg-blue">
              <Component />
            </div>
          )}
        </>
      </PersistGate>
    </Provider>
  );
}
