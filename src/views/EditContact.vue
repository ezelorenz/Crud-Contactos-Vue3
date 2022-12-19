<script>
import { ContactService } from '@/service/ContactService';
export default {
    name: "EditContact",
    data: function () {
        return {
            contactId: this.$route.params.contactId,
            contact: {}
        }
    },
    created: async function () {
        try {
            let response = await ContactService.getContact(this.contactId)
            this.contact = response.data;
        } catch (error) {
            console.log(error)
        }
    },
    methods: {
        enviarDb: async function () {
            try {
                let response = await ContactService.updateContact(this.contact, this.contactId);
                if (response) {
                    return this.$router.push('/');
                } else {
                    return this.$router.push(`/contacts/edit/${this.contactId}`);
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
            <p class="h3 text-success fw-bold">Edit Contact</p>
            <p class="fst-italic">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero officiis obcaecati magnam eveniet, facilis quibusdam at nemo, neque soluta ullam velit consectetur. Doloremque corrupti aperiam officiis debitis incidunt numquam. Libero. </p>
        </div>
    </div>
</div>
<div class="container mt-3">
    <div class="row">
        <div class="col-md-4">
            <form @submit.prevent="enviarDb()">
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
                        <input v-model="contact.telefono" type="number" class="form-control" placeholder="Telefono">
                    </div>
                </div>
                <div class="mt-2">
                    <div class="col">
                        <input v-model="contact.direccion" type="text" class="form-control" placeholder="Direccion">
                    </div>
                </div>
                <div class="mt-2">
                    <input type="submit" class="btn btn-success" value="Update">
                </div>
            </form>
        </div>
    </div>
</div>
</template>


<style scoped>

</style>