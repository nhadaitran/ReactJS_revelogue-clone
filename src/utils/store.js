import * as React from "react";

export const StoreContext = React.createContext();

const StoreProvider = ({ children }) => {
  const [openAuth, setOpenAuth] = React.useState(false);
  const [previewData, setPreviewData] = React.useState(null);
  const [alert, setAlert] = React.useState(null);
  const [breadcrumbs, setBreadcrumbs] = React.useState([]);

  const value = {
    auth: [openAuth, setOpenAuth],
    alert: [alert, setAlert],
    preview: [previewData, setPreviewData],
    breadcrumb: [breadcrumbs, setBreadcrumbs],
  };

  return (
    <StoreContext.Provider value={value}>{children}</StoreContext.Provider>
  );
};

export default StoreProvider;
