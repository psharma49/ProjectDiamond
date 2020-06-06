package diamond.springboot.db.dao;

import java.util.List;

import org.springframework.jdbc.core.namedparam.MapSqlParameterSource;
import org.springframework.jdbc.core.namedparam.NamedParameterJdbcTemplate;
import org.springframework.stereotype.Repository;
import diamond.springboot.db.entity.User.Avg;
import diamond.springboot.db.mapper.AvgRowMapper;
import diamond.springboot.db.mapper.PortfolioRowMapper;
@Repository
public class AvgDaoImpl {
	public AvgDaoImpl(NamedParameterJdbcTemplate template) {  
        this.template = template;  
}  
NamedParameterJdbcTemplate template;  
public List<Avg> findAvg(int lobid, int portfolioid, int productid,int yearid, String quarterid){
	
	MapSqlParameterSource params = new MapSqlParameterSource();
	params.addValue("LOB_ID", lobid);
	params.addValue("PORTFOLIO_ID", portfolioid);
    params.addValue("PRODUCT_ID", productid);
    params.addValue("YEAR_ID", yearid);
    params.addValue("QUARTER_ID", quarterid);
	String aquery = "SELECT AVG(F.TTV),  AVG(F.VELOCITY) as avg1\r\n" + 
    		"\r\n" + 
    		"FROM LOB L, PORTFOLIO P, PRODUCT_MASTER PM, KPI_MASTER K, KPI_SUBCATEGORY SUB, FEATURE F\r\n" + 
    		"\r\n" + 
    		"WHERE\r\n" + 
    		"\r\n" + 
    		"F.KPI_SUBCATEGORY_ID = SUB.KPI_SUBCATEGORY_ID\r\n" + 
    		"\r\n" + 
    		"AND F.KPI_ID = K.KPI_ID\r\n" + 
    		"\r\n" + 
    		"AND F.PRODUCT_ID = PM.PRODUCT_ID\r\n" + 
    		"\r\n" + 
    		"AND PM.PORTFOLIO_ID= P.PORTFOLIO_ID\r\n" + 
    		"\r\n" + 
    		"AND P.LOB_ID = L.LOB_ID\r\n" + 
    		"\r\n" + 
    		"AND L.LOB_STATUS = 'Y'\r\n" + 
    		"\r\n" + 
    		"AND P.PORTFOLIO_STATUS='Y'\r\n" + 
    		"\r\n" + 
    		"AND PM.PRODUCT_STATUS='Y'\r\n" + 
    		"\r\n" + 
    		"AND F.LOB_ID= :LOB_ID\r\n" + 
    		"\r\n" + 
    		"AND F.PORTFOLIO_ID = :PORTFOLIO_ID\r\n" + 
    		"\r\n" + 
    		"AND F.PRODUCT_ID = :PRODUCT_ID\r\n" +
    		"\r\n" + 
    		"AND F.YEAR = :YEAR_ID\r\n" + 
    		"\r\n" ;  
    if(!quarterid.equals("Q")) {
    aquery = aquery + "AND F.QUARTER = :QUARTER_ID";	
    }
    System.out.println(aquery);
   return template.query(aquery, params,  new AvgRowMapper());
}
}
