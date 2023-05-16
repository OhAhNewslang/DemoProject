import axios from 'axios'

export default function callSsr() {
    const result = axios.get("/hello1")
    .then(res => {
        console.log(res.data)
    })
}