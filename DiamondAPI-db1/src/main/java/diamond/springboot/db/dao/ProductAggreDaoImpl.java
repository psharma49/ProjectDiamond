package diamond.springboot.db.dao;

import java.util.List;

import org.springframework.jdbc.core.namedparam.MapSqlParameterSource;
import org.springframework.jdbc.core.namedparam.NamedParameterJdbcTemplate;
import org.springframework.stereotype.Repository;

import diamond.springboot.db.entity.User.Product;
import diamond.springboot.db.entity.User.ProductAggre;
import diamond.springboot.db.mapper.ProductAggreRowMapper;
import diamond.springboot.db.mapper.ProductRowMapper;

@Repository
public class ProductAggreDaoImpl {

	public ProductAggreDaoImpl(NamedParameterJdbcTemplate template) {  
        this.template = template;  
}  
NamedParameterJdbcTemplate template;  

public List<ProductAggre> bvProductAggre(int lobid, int portfolioid, int productid) {
	MapSqlParameterSource params = new MapSqlParameterSource();
	params.addValue("LOB_ID", lobid);
	params.addValue("PORTFOLIO_ID", portfolioid);
    params.addValue("PRODUCT_ID", productid);
    return template.query("SELECT K.KPI_NAME, SUB.KPI_SUBCATEGORY_NAME,F.UNIT_OF_MEASUREMENT, SUM(F.BUSINESS_VALUE), AVG(F.BUSINESS_VALUE)\r\n" + 
    		"\r\n" + 
    		"FROM LOB L, PORTFOLIO P, PRODUCT_MASTER PM, KPI_MASTER K, KPI_SUBCATEGORY SUB, FEATURE F\r\n" + 
    		"\r\n" + 
    		"WHERE F.KPI_SUBCATEGORY_ID = SUB.KPI_SUBCATEGORY_ID AND F.KPI_ID = K.KPI_ID\r\n" + 
    		"\r\n" + 
    		"AND F.PRODUCT_ID = PM.PRODUCT_ID AND PM.PORTFOLIO_ID = P.PORTFOLIO_ID  AND\r\n" + 
    		"\r\n" + 
    		"P.LOB_ID = L.LOB_ID\r\n" + 
    		"\r\n" + 
    		"AND L.LOB_STATUS = 'Y' AND P.PORTFOLIO_STATUS='Y' AND PM.PRODUCT_STATUS='Y'\r\n" + 
    		"\r\n" + 
    		"AND F.LOB_ID= :LOB_ID\r\n" + 
    		"\r\n" + 
    		"AND F.PORTFOLIO_ID = :PORTFOLIO_ID\r\n" + 
    		"\r\n" + 
    		"AND F.PRODUCT_ID = :PRODUCT_ID\r\n" + 
    		"\r\n" + 
    		"GROUP BY K.KPI_NAME, SUB.KPI_SUBCATEGORY_NAME, F.UNIT_OF_MEASUREMENT\r\n" + 
    		"", params,  new ProductAggreRowMapper());
    		 
    		
}

}
