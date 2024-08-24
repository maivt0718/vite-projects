import { message } from "antd";
import useRoute from "./components/routes/useRoute";
import React from "react";

export const NotificationContext = React.createContext()

function App() {
  const routes = useRoute()
  const [messageApi, contextHolder] = message.useMessage();
  

  const handleNotification = (status, content) => {
    messageApi.open({
      type: status,
      content: content
    })
  }
  
  return <>
  <NotificationContext.Provider value={{
    name: "Hana",
    handleNotification}}>
    {contextHolder}
    {routes}
  </NotificationContext.Provider>
  </>;
}

export default App;
