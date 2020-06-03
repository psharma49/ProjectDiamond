import axios from 'axios';

class DataService {

    retrieveYearList(){
        //console.log('execute service')
        return axios.get("http://localhost:8083/viewdash_board/year");
    }

    retrieveLOBList(){
        return axios.get(`http://localhost:8083/viewdash_board/lob/yearid`);
    }

    retrievePortfolioList(selectedLOB){
        //console.log('execute service')
        return axios.get(`http://localhost:8083/viewdash_board/portfolio/${selectedLOB}/yearid`);
    }

    retrieveProductList(selectedPortfolio){
        return axios.get(`http://localhost:8083/viewdash_board/product/${selectedPortfolio}/yearid`)
    }

    Onsubmitting(selectedLOB, selectedPortfolio, selectedProduct){
        return axios
        .get(`http://localhost:8083/viewdash_board/product_aggregate_view/${selectedLOB}/${selectedPortfolio}/${selectedProduct}/yearid`)
    }

}

export default new DataService();