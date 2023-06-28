import axios from 'axios';

const apiClient = axios.create({
    baseURL: 'http://localhost:8080/api/',
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
        
    }
})

export default {
    async deleteProduct(id) {
        try{
            await apiClient.delete('/products/' + id)
        }catch(e){
            throw "Error at trying to delete a product"
        }
    },
    async loadProducts(){
        try{
            const response = await apiClient.get('/products');
            return response.data
        } catch(e) {
            throw "Error with the load";
        }
    },
    async addProduct(elem){
        try{
            await apiClient.post('/products', elem)
        }catch(e) {
            throw "Error at adding a product"
        }
    },
    async updateProduct(id, elem){
        try{
            await apiClient.put('/products/' + id, elem)
        }catch(e){
            throw "Error at updating a product"
        }
    },
    async getProductById(categoryId, id){
        try{
            const product = await apiClient.get('/products/' + categoryId + '/' + id);
            return product.data
        } catch(e) {
            throw "Error with the getting the product";
        }
    },
    async getProductByCategoryId(categoryId){
        try{
            const response = await apiClient.get('/products/' + id);
            return response.data
        } catch(e) {
            throw "Error with the getting the product";
        }
    },
    async deleteUser(id) {
        try{
            await apiClient.delete('/users/' + id)
        }catch(e){
            throw "Error at trying to delete a product"
        }
    },
    async loadUsers(){
        try{
            const response = await apiClient.get('/users');
            return response.data
        } catch(e) {
            throw "Error with the load";
        }
    },
    async addUser(elem){
        try{
            await apiClient.post('/users', elem)
        }catch(e) {
            throw "Error at adding a product"
        }
    },
    async updateUser(id, elem){
        try{
            await apiClient.put('/users/' + id, elem)
        }catch(e){
            throw "Error at updating a product"
        }
    },
    async getUserById(id){
        try{
            const product = await apiClient.get('/users/' + id);
            return product.data
        } catch(e) {
            throw "Error with the getting the product";
        }
    }
}