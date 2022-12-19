<script>
import { ContactService } from '@/service/ContactService';

export default {
    name: "ViewContact",
    data: function () {
        return {
            contactId: this.$route.params.contactId,
            contact: {}
        }
    },
    created: async function () {
        try {
            let response = await ContactService.getContact(this.contactId);
            this.contact = response.data;
        } catch (error) {
            console.log(error)
        }
    }
}
</script>


<template>

<div class="container mt-3">
    <div class="row">
        <div class="col">
            <p class="h3 text-success fw-bold">View Contact</p>
            <p class="fst-italic">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta voluptate, consectetur illo dolores eveniet quibusdam unde iste, reprehenderit animi inventore id nulla iure consequuntur amet voluptatum quos autem quae ipsum.</p>
        </div>
    </div>
</div>
<div class="container mt-3">
    <div class="row align-items-center">
        <div class="col-md-6">
            <ul class="list-group">
                <li class="list-group-item">Nombre: <span class="fw-bold"> {{contact.nombre}}</span></li>
                <li class="list-group-item">Apellido: <span class="fw-bold"> {{contact.apellido}}</span></li>
                <li class="list-group-item">Email: <span class="fw-bold"> {{contact.email}}</span></li>
                <li class="list-group-item">Telefono: <span class="fw-bold"> {{contact.telefono}}</span></li>
                <li class="list-group-item">Direccion: <span class="fw-bold">{{contact.direccion}}</span></li>
            </ul>
        </div>
    </div>
    <div class="row">
        <div class="col">
            <router-link to="/contacts" class="btn btn-success"><i class="fa fa-arrow-alt-circle-left"></i> Back</router-link>
        </div>
    </div>
    <pre>{{contact}}</pre>
</div>

</template>


<style scoped>

</style>