import { useState, createContext, FC, ReactElement } from 'react';
import { IState, TPages } from "../../types";


const Context = createContext({});

const initialState: IState = {
  pagination: null,
  results: null,
  error: false,
};

const parsePagination = (pages: any): TPages => {
  let pagerButtons: TPages = null;
  if (pages?.urls) {
    pagerButtons = Object.entries(pages?.urls);
  }

  return pagerButtons;
};

const Provider: FC<{ children: ReactElement }> = ({ children }): ReactElement => {
  const [state, setState] = useState(initialState);
  return (
    <Context.Provider
      value={{
        ...state,
        updateState: (data: IState) => {
          const parsedPagination = parsePagination(data.pagination);
          setState({ ...data, pagination: parsedPagination })
        }
      }}
    >
      {children}
    </Context.Provider>
  )
}


export { Provider, Context };
