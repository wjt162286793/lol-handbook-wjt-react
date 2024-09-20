import routes from './router/index'
import './App.css'
import { useRoutes} from 'react-router-dom'
import { Button, ConfigProvider, Space } from 'antd';

function App() {
  const ElementRouter = useRoutes(routes)

  return (
        <ConfigProvider
        theme={{
          token: {
            // Seed Token，影响范围大
            colorPrimary: '#bf8d30',
            // borderRadius: 2,
    
            // // 派生变量，影响范围小
            colorBgContainer: '#191d2a',
          },
        }}
        >
            {ElementRouter}
        </ConfigProvider>
  )
}

export default App
