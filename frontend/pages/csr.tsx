import axios from 'axios';
import { useEffect, useState } from 'react';

export default () => {
    const [Texts, setTexts] = useState<string[]>([]);
    useEffect(() => {
        getFetch();
    }, []);
    const getFetch = async () => {
        try {
            
            const res = await axios.get('/hello');
            console.log(res);

            const Texts: string[] = res.data;
            setTexts(Texts);

        } catch (error) {

            console.log(error);

        }
    };
    return (
        <main>
            <ul>
            {Texts.map((Text) => (
                <li>
                    <h2> {Text} </h2>
                </li>
            ))}
        </ul>
        </main>
        
    );
};