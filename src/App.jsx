import React from "react";
import Mickey from "./layout/Mickey";
import ItemContextProvider from "./store/ItemContext";
function App() {
  return (
    <>
      <ItemContextProvider>
        <Mickey />
      </ItemContextProvider>
    </>
  );
}
export default App;
