import axios from 'axios';

const apiClient = axios.create({
    baseURL: 'https://6464e4e3127ad0b8f8ab352a.mockapi.io/api/v1',
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
    }
})

export default {
    async deleteProduct(id) {
        try{
            await apiClient.delete('/E-commerceRopa/' + id)
        }catch(e){
            throw "Error at trying to delete a product"
        }
    },
    async loadProducts(){
        try{
            const response = await apiClient.get('/E-commerceRopa');
            return response.data
        } catch(e) {
            throw "Error with the load";
        }
    },
    async addProduct(elem){
        try{
            await apiClient.post('/E-commerceRopa', elem)
        }catch(e) {
            throw "Error at adding a product"
        }
    },
    async updateProduct(id, elem){
        try{
            await apiClient.put('/E-commerceRopa/' + id, elem)
        }catch(e){
            throw "Error at updating a product"
        }
    },
    async getProductById(id){
        try{
            const product = await apiClient.get('/E-commerceRopa/' + id);
            return product.data
        } catch(e) {
            throw "Error with the getting the product";
        }
    }
}