import React from 'react'
import { Table } from 'antd'

const Index = ({ columns, data, pagination, handleChange }) => {
    return (
        <Table
        columns={columns}
        dataSource={data}
        pagination={pagination}
        onChange={(pagination) => handleChange(pagination)}
        />
    )
}

export default Index
