import axios from "axios";

export class ContactService {
    static serverURL = 'https://localhost:7143';

    static getAllContacts() {
        let dataURL = `${this.serverURL}/api/customer`;
        return axios.get(dataURL);
    }

    static getContact(contactId) {
        let dataURL = `${this.serverURL}/api/customer/${contactId}`;
        return axios.get(dataURL);
    }

    static createContact(contact) {
        let dataURL = `${this.serverURL}/api/customer`;
        return axios.post(dataURL, contact);
    }

    static updateContact(contact, contactId) {
        let dataURL = `${this.serverURL}/api/customer/${contactId}`;
        return axios.put(dataURL, contact);
    }

    static deleteContact(contactId) {
        let dataURL = `${this.serverURL}/api/customer/${contactId}`;
        return axios.delete(dataURL);
    }
}