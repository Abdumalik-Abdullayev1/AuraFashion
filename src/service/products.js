import https from './config'

const products = {
    create: (data) => https.post('/v1/product', data),
    get: (params) => https.get('/v1/product/list', {params}),
    update: (data, id) => https.put(`/v1/product/${id}`, data),
    delete: (id) => https.delete(`/v1/product/${id}`),
}
export default products