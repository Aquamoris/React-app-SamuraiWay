import axios from "axios";

// Создаём сущности для работы с этой API
const instace = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        "API-KEY": "932c6beb-48e7-4801-a0a3-2ad7ddba21dd"
    }
})

export const usersAPI = {

    // Упаковали как метод
    getUsers(currentPage = 1, pageSize = 10) {
        return instace
            .get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data);
    }
}


// Вариант без упаковки, но лучше упаковать
// Передаём значения по умолчанию
export const getUsers = (currentPage = 1, pageSize = 10) => {

    // Обязательно делаем return чтобы вернуть Promise
    return instace
        .get(`users?page=${currentPage}&count=${pageSize}`)
        .then(response => response.data); // Берем сразу data
}
