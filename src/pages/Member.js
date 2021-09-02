import React from 'react';
import Logo from '../components/Logo';
import Navigation from '../components/Navigation';
// import axios from 'axios';

const Member = () => {
    // const [data, setData] = useState([]);

    // axios.get('https://mma-ufc-news.p.rapidapi.com/latest').then((res) => console.log(res))

    // const options = {
    //     method: 'GET',
    //     url: 'https://mma-ufc-news.p.rapidapi.com/latest',
    //     headers: {
    //       'x-rapidapi-host': 'mma-ufc-news.p.rapidapi.com',
    //       'x-rapidapi-key': 'ffa10d5f87msh39a07ad28945a79p18c096jsn64a6cfe4293f'
    //     }
    //   };
      
    //   axios.request(options).then(function (response) {
    //       console.log(response.data);
    //   }).catch(function (error) {
    //       console.error(error);
    //   });

    return (
        <div>
            <Logo/>
            <Navigation/>
        </div>
    );
};

export default Member;