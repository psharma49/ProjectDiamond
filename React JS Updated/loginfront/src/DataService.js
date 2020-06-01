import axios from 'axios';

class DataService {

    retrievYearList(){
        //console.log('execute service')
        return axios.get("http://localhost:8080//view_board/year");
    }

    retrieveLOBList(selectedYear){
        return axios.get(`http://localhost:8080//view_board/${this.state.selectedYear}`);
    }

    retrievePortfolioList(selectedLOB,selectedYear){
        //console.log('execute service')
        return axios.get(`http://localhost:8080//view_board/portfolio/${this.state.selectedLOB}/${this.state.selectedYear}`);
    }

    retrieveProductList(selectedPortfolio, selectedYear){
        return axios.get(`http://localhost:8080//view_board/product/${this.state.selectedPortfolio}/${this.state.selectedYear}`)
    }

    Onsubmitting(selectedLOB, selectedPortfolio, selectedProduct,selectedYear){
        return axios
        .get(`http://localhost:8080//view_board/product_aggregate_view/${this.state.selectedLOB}/${this.state.selectedPortfolio}/${this.state.selectedProduct}/${this.state.selectedYear}`)
    }

}

export default new DataService()