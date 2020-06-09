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
        return axios.get(`http://localhost:8083/viewdash_board/product/${selectedPortfolio}/yearid`);
    }

    Onsubmitting(selectedLOB, selectedPortfolio, selectedProduct,selectedYear,selectedQuarter){
        return axios
        .get(`http://localhost:8083/viewdash_board/product_aggregate_view/${selectedLOB}/${selectedPortfolio}/${selectedProduct}/${selectedYear}/${selectedQuarter}`)
    }
    OnFeatureViewButton(selectedLOB, selectedPortfolio, selectedProduct,selectedYear,selectedQuarter){
        return axios
        .get(`http://localhost:8083/viewdash_board/product_featureq_view/${selectedLOB}/${selectedPortfolio}/${selectedProduct}/${selectedYear}/${selectedQuarter}`)
    }
    AvgTtvData(selectedLOB, selectedPortfolio, selectedProduct,selectedYear,selectedQuarter){
        return axios
        .get(`http://localhost:8083/viewdash_board/product_avg_ttv_view/${selectedLOB}/${selectedPortfolio}/${selectedProduct}/${selectedYear}/${selectedQuarter}`)
    }
    HeaderData(selectedLOB, selectedPortfolio, selectedProduct,selectedYear,selectedQuarter){
        return axios
        .get(`http://localhost:8083/viewdash_board/product_display_view/${selectedLOB}/${selectedPortfolio}/${selectedProduct}/${selectedYear}/${selectedQuarter}`)
    }

}

export default new DataService();