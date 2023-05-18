import axios from "axios";

export default function(){
  axios.get('http://localhost:8080/hello1')
  .then(res => {
  console.log(res.data)
})
}
