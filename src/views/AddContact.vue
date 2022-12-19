


<template>

    <div class="container mt-3">
        <div class="row">
            <div class="col">
                <p class="h3 text-success fw-bold">Add Contact</p>
                <p class="fst-italic">Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit similique natus porro corrupti vero amet sit reprehenderit ipsa repellat officiis eos nam odio quam corporis ullam fuga, laborum, illo!</p>
            </div>
        </div>
    </div>
    <div class="container mt-3">
        <div class="row">
            <div class="col-md-4">
                <form @submit.prevent="submitCreate()">
                    <div class="row">
                        <div class="col">
                            <input v-model="contact.nombre" type="text" class="form-control" placeholder="Nombre">
                        </div>
                    </div>
                    <div class="mt-2">
                        <div class="col">
                            <input v-model="contact.apellido" type="text" class="form-control" placeholder="Apellido">
                        </div>
                    </div>
                    <div class="mt-2">
                        <div class="col">
                            <input v-model="contact.email" type="text" class="form-control" placeholder="Email">
                        </div>
                    </div>
                    <div class="mt-2">
                        <div class="col">
                            <input v-model="contact.telefono" type="text" class="form-control" placeholder="Telefono">
                        </div>
                    </div>
                    <div class="mt-2">
                        <div class="col">
                            <input v-model="contact.direccion" type="text" class="form-control" placeholder="Direccion">
                        </div>
                    </div>
                    <div class="mt-2">
                        <input type="submit" class="btn btn-success" value="Create">
                    </div>
                </form>
                <pre>{{contact}}</pre>
            </div>
        </div>
    </div>
</template>

<script>
import { ContactService } from '@/service/ContactService';

export default {
    name: "AddContact",
    data: function () {
        return {
            contact: {
                nombre: '',
                apellido: '',
                email: '',
                telefono: '',
                direccion: ''

            }
        }
    },
    methods: {
        submitCreate: async function () {
            try {
                let response = await ContactService.createContact(this.contact);
                let result = response.data;
                if (result) {
                    return this.$router.push('/');
                } else {
                    return this.$router.push('/contacts/add');
                }
            } catch (error) {
                console.log(error)
            }
        }
    }
}
</script>

<style scoped>

</style>