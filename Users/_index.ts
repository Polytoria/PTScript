import axios from 'axios';

const PolytoriaUser = {
    getUserData: async (id) => {
        let data = await axios.get(`https://api.polytoria.com/v1/users/user?id=${id}`);
        return data;
    }
};

export default PolytoriaUser;