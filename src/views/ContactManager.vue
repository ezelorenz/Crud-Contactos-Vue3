<script>
import { ContactService } from '@/service/ContactService';

export default {
    name: "ContactManager",
    data: function () {
        return {
            contacts: [],
            errorMessage: null
        }
    },
    created: async function () {
        try {
            let response = await ContactService.getAllContacts();
            this.contacts = response.data;

        } catch (error){
            this.errorMessage = error;
        }
    },
    methods: {
        eliminarContacto: async function (contactId) {
            try {
                let response = await ContactService.deleteContact(contactId)
                if (response) {
                    let response = await ContactService.getAllContacts();
                    this.response = response.data;
                }
            } catch (error) {
                console.log(error)
            }
        }
    }
}


</script>


<template>
    <div class="container mt-3">
        <div class="row">
            <div class="col">
                <p class="h3 text-success fw-bold">Contact Manager
                    <router-link to="/contacts/add" class="btn btn-success btn-sm"><i class="fa fa-plus-circle"></i> New</router-link>
                </p>
                <p class="fst-italic">Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit similique natus porro corrupti vero amet sit reprehenderit ipsa repellat officiis eos nam odio quam corporis ullam fuga, laborum, tempore illo!</p>
                
            </div>
        </div>
    </div>
    <div class="container mt-3" v-if="contacts.length > 0">
        <div class="row">
            <div class="col-md-6" v-for="contact of contacts" :key="contact">
                <div class="card my-2 list-group-item-success shadow-lg">
                    <div class="card-body">
                        <div class="row align-items-center">
                            <div class="col-sm-11">
                                <ul class="list-group">
                                    <li class="list-group-item"><span class="fw-bold">Nombre: </span>{{contact.nombre}}</li>
                                    <li class="list-group-item"><span class="fw-bold">Apellido: </span>{{contact.apellido}}</li>
                                    <li class="list-group-item"><span class="fw-bold">Dirrección: </span>{{contact.direccion}}</li>
                                </ul>
                                
                            </div>
                            <div class="col-sm-1 d-flex flex-column align-items-center">
                                <router-link :to="`/contacts/view/${contact.id}`" class="btn btn-warning">
                                    <i class="fa fa-eye"></i></router-link>
                                <router-link :to="`/contacts/edit/${contact.id}`" class="btn btn-primary my-1">
                                    <i class="fa fa-pencil"></i></router-link>
                                    <button @click="eliminarContacto(contact.id)" class="btn btn-danger"><i class="fa fa-trash"></i></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>


<style scoped>

</style>