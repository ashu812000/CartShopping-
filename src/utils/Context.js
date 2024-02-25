import {createContext} from "react";

export const LoaderContext = createContext({
    showLoader: false,
    setShowLoader: (showLoader) => {
    }
})
