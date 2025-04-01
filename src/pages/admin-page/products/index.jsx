import React, { useEffect, useState } from 'react';
import { Space, Button } from 'antd';
import { useLocation, useNavigate } from 'react-router-dom';
import { products } from '@service';
import { GlobalTable, ModalProduct } from '@components';

const Index = () => {

  const [data, setData] = useState([])
  const [open, setOpen] = useState(false)
  const [total, setTotal] = useState()
  const [update, setUpdate] = useState({})
  const { search } = useLocation()
  const navigate = useNavigate()
  const [params, setParams] = useState({
    search: "",
    limit: 5,
    page: 1
  })

  const getRequest = async () => {
    try {
      const res = await products.get(params)
      if (res.status === 200) {
        setData(res?.data?.products)
        setTotal(res?.data?.total_count)
      }
    } catch (error) {
      console.log("Error");
    }
  }
  useEffect(() => {
    getRequest()
  }, [params])
  useEffect(() => {
    const params = new URLSearchParams(search)
    let page = Number(params.get("page")) || 1
    let limit = Number(params.get("limit")) || 5
    let search_value = params.get("search_value")
    setParams((prev) => ({ ...prev, limit: limit, page: page, search_value: search_value }))
  }, [search])

  const handleTableChange = (pagination) => {
    const { current, pageSize } = pagination
    setParams((prev) => ({ ...prev, limit: pageSize, page: current }))
    const search_params = new URLSearchParams(search)
    search_params.set("page", `${current}`)
    search_params.set("limit", `${pageSize}`)
    navigate(`?${search_params}`)
  }

  const handleSearch = (event) => {
    const value = event.target.value
    setParams((prev) => ({ ...prev, search: value }))
    const search_params = new URLSearchParams(search)
    search_params.set("search", value)
    navigate(`?${search_params}`)
  }

  const handleClose = () => {
    setOpen(false)
    setUpdate({})
  }

  const columns = [
    {
      title: 'Product name',
      dataIndex: 'name',
      key: 'name',
      render: (text) => <a>{text}</a>,
    },
    {
      title: 'Age',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: 'Address',
      dataIndex: 'address',
      key: 'address',
    },
    {
      title: 'Action',
      key: 'action',
      render: (_, record) => (
        <Space size="middle">
          <a>Invite {record.name}</a>
          <a>Delete</a>
        </Space>
      ),
    },
  ];

  return (
    <>
      <div className='flex justify-between mb-4'>
        <input type="text" placeholder='search' onChange={handleSearch} className='outline-none' />
        <ModalProduct open={open} handleClose={handleClose} update={update} getRequest={getRequest} />
        <Button type="default" onClick={() => setOpen(true)}>Add Product</Button>
      </div>
      <GlobalTable
        columns={columns}
        data={data}
        pagination={{
          current: params.page,
          pageSize: params.limit,
          total: total,
          showSizeChanger: true,
          pageSizeOptions: ['10', '50', '100']
        }}
        handleChange={handleTableChange}
      />
    </>
  )
}

export default Index

// const App = () => <Table columns={columns} dataSource={productData} />;
// export default App;