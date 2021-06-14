import { useState, createContext, FC, ReactElement } from 'react';
import { IState } from "../../types";


const Context = createContext({});

const initialState: IState = {
  pagination: null,
  results: null,
  error: false,
};

const Provider: FC<{ children: ReactElement }> = ({ children }): ReactElement => {
  const [state, setState] = useState(initialState);
  return (
    <Context.Provider
      value={{
        ...state,
        updateState: (data: IState) => {
          console.log('UPDATE STATE', data);
          setState(data)
        }
      }}
    >
      {children}
    </Context.Provider>
  )
}


export { Provider, Context };
