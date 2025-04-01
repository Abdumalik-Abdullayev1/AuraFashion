import React, { useEffect, useState } from 'react'
import { Button, Drawer, Form, Input, Row, Col, Select, Upload } from 'antd'
import { useForm } from 'antd/es/form/Form';
import { UploadOutlined } from "@ant-design/icons";
import { products } from '../../service';


const ProductModal = ({ open, handleClose, update, getRequest }) => {
  const [data, setData] = useState([])
  const [form] = useForm()

  useEffect(() => {
    if (update.id) {
      form.setFieldsValue({
        title: values.title,
        category_id: values.category_id,
        color: values.color,
        size: values.size,
        price: parseInt(values.price),
        sale_price: parseInt(values.sale_price),
        description: values.description
      })
    } else {
      form.resetFields()
    }
  }, [update, form])

  const handleFinish = async (values) => {
    const editData = {
      title: values.title,
      category_id: values.category_id,
      color: values.color,
      size: values.size,
      price: parseInt(values.price),
      sale_price: parseInt(values.sale_price),
      description: values.description
    }
    const formData = new FormData()
    formData.append("title", values.title)
    formData.append("category_id", values.category_id)
    formData.append("color", values.color)
    formData.append("size", values.size)
    formData.append("price", values.price)
    formData.append("sale_price", values.sale_price)
    formData.append("description", values.description)
    if (values.file && values.file.file) {
      formData.append("file", values.file.file)
    }
    try {
      if (update.id) {
        const res = await products.update(update.id, editData);
        if (res.status === 200) {
          handleClose()
          getRequest()
        }
      } else {
        const res = await products.create(formData)
        if (res.status === 201) {
          handleClose()
          getRequest()
        }
      }

    } catch (error) {
      console.log("error");
    }
  }

  return (
    <>
      <Drawer
        title="Add Product"
        width={600}
        open={open}
        onClose={handleClose}
      >
        <h1 className="text-2xl font-semibold mb-4">Add Product</h1>
        <Form form={form} layout="vertical" onFinish={handleFinish}>
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                label="Product Name"
                name="title"
                rules={[
                  {
                    required: true,
                    message: "Please enter product name",
                  },
                ]}
              >
                <Input allowClear />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                label="Product price"
                name="price"
                rules={[
                  {
                    required: true,
                    message: "Please enter product price",
                  },
                ]}
              >
                <Input type="number" allowClear />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                label="Product color"
                name="color"
                rules={[
                  {
                    required: true,
                    message: "Please enter product color",
                  },
                ]}
              >
                <Input allowClear />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                label="Product size"
                name="size"
                rules={[
                  {
                    required: true,
                    message: "Please enter size",
                  },
                ]}
              >
                <Input type="text" allowClear />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                label="Product sale_price"
                name="sale price"
                rules={[
                  {
                    required: true,
                    message: "Please enter product color",
                  },
                ]}
              >
                <Input allowClear />
              </Form.Item>
            </Col>
            <Col span={12}>
              {!update.id && (
                <Form.Item
                  name="files"
                  label="Product image"
                  rules={[
                    {
                      required: true,
                      message: "Please upload product image",
                    },
                  ]}
                >
                  <Upload
                    beforeUpload={() => false}
                    maxCount={5}
                    listType="picture"
                    action={
                      "https://www.mocky.io/v2/5cc8019d300000980a055e76"
                    }
                  >
                    <Button
                      className="w-full"
                      icon={<UploadOutlined />}
                    >
                      Upload Logo
                    </Button>
                  </Upload>
                </Form.Item>
              )}
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={24}>
              <Form.Item>
                <Button
                  htmlType="submit"
                  type="primary"
                  className="mt-10 py-4"
                >
                  Add
                </Button>
                <Button className="ml-2" onClick={handleClose}>
                  cancel
                </Button>
              </Form.Item>
            </Col>
          </Row>
        </Form>

      </Drawer>

    </>
  )
}

export default ProductModal
