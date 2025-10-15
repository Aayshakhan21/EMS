// import React from 'react'

import { createContext, useState } from "react";

export const myContext = createContext();

export default function MyContext({ children }) {
  const [user, setUser] = useState(null);
  const intialState = { user, setUser };
  return (
    <myContext.Provider value={intialState}>{children}</myContext.Provider>
  );
}

//context ka use ham isliy krte h taaki ham state ko direct use kr ske or har
//ek component m state manuallhy paas na krna pde
