import { ProductOutlined, AppstoreOutlined, SettingOutlined } from '@ant-design/icons'



const adminLayout = [
    {
        content: "Dashboard",
        path: '/admin-layout',
        icon: <AppstoreOutlined/>
    },
    {
        content: "Products",
        path: '/admin-layout/products',
        icon: <ProductOutlined/>
    },
    {
        content: "Settings",
        path: '/admin-layout/settings',
        icon: <SettingOutlined/>
    }
]

export { adminLayout }