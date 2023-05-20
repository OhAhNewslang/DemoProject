import axios from "axios";
import { useEffect, useState } from "react";

const Csr = () => {
    const [text, setText] = useState<String>();

    useEffect(() => {
        getFetch();
    });

    const getFetch = async () => {
        try{
            const res = await axios.get('/hello1');
            const text : String = res.data;

            setText(text);

        } catch(error) {
            console.log(error);
        }
    };
    return(
        <div>
            {text}
        </div>
    )
}
export default Csr;