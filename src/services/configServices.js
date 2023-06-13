import axios from 'axios';

const apiClient = axios.create({
    baseURL: 'https://6483cc78ee799e3216261ce6.mockapi.io/products',
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
    }
})

export default {
    async deleteProduct(id) {
        try{
            await apiClient.delete('/' + id)
        }catch(e){
            throw "Error at trying to delete a product"
        }
    },
    async loadProducts(){
        try{
            const response = await apiClient.get('/');
            return response.data
        } catch(e) {
            throw "Error with the load";
        }
    },
    async addProduct(elem){
        try{
            await apiClient.post('/', elem)
        }catch(e) {
            throw "Error al agregar un elemento"
        }
    },
    async editProduct(id, elem){
        try{
            await apiClient.put('/' + id, elem)
        }catch(e){
            throw "Error al tratar de modificar un elemento"
        }
    }
}