import {createContext} from "react";

export interface ContextType {}

const AppContext = createContext<ContextType>({});
export default AppContext
