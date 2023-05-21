import axios from 'axios';
import { GetServerSideProps } from 'next';

export const getServerSideProps: GetServerSideProps = async (context) => {
    try {
        const res = await axios.get('http://localhost:8080/hello');
        const Texts: string[] = res.data;
        console.log(res);

        return {
            props: {
                Texts
            }
        };
    } catch (error) {
      console.log(error);
        return {
            notFound: true,
        };
    }
};

interface Props {
  Texts: string[];
}

export default (props: Props) => {
  return (
    <main>
      <ul>
        {props.Texts.map((Text) => (
            <div>
                <h2> {Text} </h2>
            </div>
        ))}
    </ul>
  </main>
  ); 
};
