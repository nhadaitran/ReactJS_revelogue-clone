import * as React from "react";

export const StoreContext = React.createContext();

const StoreProvider = ({ children }) => {
  const [openAuth, setOpenAuth] = React.useState(false);
    const [previewData, setPreviewData] = React.useState(null);

    const value = {
      auth: [openAuth, setOpenAuth],
      preview: [previewData, setPreviewData],
    };

  return (
    <StoreContext.Provider value={value}>{children}</StoreContext.Provider>
  );
};

export default StoreProvider;
