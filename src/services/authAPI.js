import axios from 'axios';

const API_URL = "https://mcokoodumnowtjxnhptm.supabase.co/rest/v1/user"; 
const API_KEY = "sb_publishable_ykRAVyx0Vo8GuPEg9du-6w_lOofUwnf";

const headers = {
    apikey: API_KEY,
    Authorization: `Bearer ${API_KEY}`,
    "Content-Type": "application/json",
    Prefer: "return=representation" 
};

export const authAPI = {
    // FUNGSI REGISTER
    async register(data) {
        // Cek apakah email sudah terdaftar di tabel 'user'
        const checkEmail = await axios.get(`${API_URL}?email=eq.${data.email}`, { headers });
        if (checkEmail.data.length > 0) {
            throw new Error("Email ini sudah terdaftar!");
        }

        // Insert data baru ke tabel 'user'
        const response = await axios.post(API_URL, data, { headers });
        return response.data;
    },

    // FUNGSI LOGIN
    async login(data) {
        // Cek kecocokan email dan password di tabel 'user'
        const response = await axios.get(
            `${API_URL}?email=eq.${data.email}&password=eq.${data.password}`, 
            { headers }
        );

        if (response.data.length === 0) {
            throw new Error("Email atau password salah!");
        }

        return response.data[0]; // Kembalikan data user beserta role-nya
    },
    async fetchUsers() {
        const response = await axios.get(API_URL, { headers });
        return response.data; // Mengembalikan array berisi seluruh data user
    }
};