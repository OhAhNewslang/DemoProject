export const getData = async () => {
    try {
      const res = await axios({
        method: 'get',
        url: 'http://localhost:8080/hello1',
      });
      return res;
    } catch (error) {
      console.log(error);
    }
  };