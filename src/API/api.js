import axios from "axios";

export const instance = axios.create({
    baseURL: 'http://165.22.86.200:8000/auth/',
    headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Headers': 'privatekey'
        // 'Authorization': `Bearer ${token}`
    }
})


export const getapi = {
    setToken(token) {
        instance.defaults.headers.common['Authorization'] = 'Bearer ' + token;
    },
    login(username, password) {
        return instance.post(`token/`, {
            "Username": username,
            "Password": password
        })
    },
    register(data) {
        return instance.post(`registration/`, {
            "Username": data.username,
            "Email": data.email,
            "Password": data.password,
            "Confirm_password": data.confirm_password
        })
    },
    phoneNumber(data){
        return instance.put(`profile/`, {
            "first_name": data.firstname,
            "last_name": data.lastname,
            "birth_date": data.birthdate,
            "phone_number": data.phoneNumber
        })
    }

}

export const instanceProduct = axios.create({
    baseURL: 'http://165.22.86.200:8000/',
    headers: {
        'Content-Type': 'application/json',
    }
})

export const getProducts = async () => {
    try {
      const res = await instanceProduct.get('product/')
  
      return res.data
    } catch(e) {
    return console.error(e)
    }
  }
