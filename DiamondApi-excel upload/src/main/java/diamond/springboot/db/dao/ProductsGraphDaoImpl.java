package diamond.springboot.db.dao;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.Calendar;
import java.util.List;
import java.util.Locale;

import org.springframework.jdbc.core.namedparam.MapSqlParameterSource;
import org.springframework.jdbc.core.namedparam.NamedParameterJdbcTemplate;
import org.springframework.stereotype.Repository;

import diamond.springboot.db.entity.User.PortfolioIndi;
import diamond.springboot.db.entity.User.ProductsGraph;
import diamond.springboot.db.mapper.PortfolioIndiRowMapper;
import diamond.springboot.db.mapper.ProductsGraphRowMapper;

@Repository
public class ProductsGraphDaoImpl {
	
	public ProductsGraphDaoImpl(NamedParameterJdbcTemplate template) {  
        this.template = template;  
}  
NamedParameterJdbcTemplate template;  	
public List<ProductsGraph> portfolioGraphView(int lobid, int portfolioid, String display_name, int yearid, String quarterid){
	MapSqlParameterSource params = new MapSqlParameterSource();
	params.addValue("LOB_ID", lobid);
	params.addValue("PORTFOLIO_ID", portfolioid);
	 params.addValue("DISPLAY_NAME", display_name);
    params.addValue("YEAR_ID", yearid);
    params.addValue("QUARTER_ID", quarterid);
    String qspg = "";
    String pgquery = "SELECT PM.PRODUCT_NAME,F.UNIT_OF_MEASUREMENT ,SUB.TIMELINE, SUM(F.BUSINESS_VALUE), AVG(F.BUSINESS_VALUE)\r\n" + 
    		"FROM LOB L, PORTFOLIO P, PRODUCT_MASTER PM, KPI_MASTER K, KPI_SUBCATEGORY SUB, FEATURE F\r\n" + 
    		"WHERE\r\n" + 
    		"F.KPI_SUBCATEGORY_ID = SUB.KPI_SUBCATEGORY_ID\r\n" + 
    		"AND F.KPI_ID = K.KPI_ID\r\n" + 
    		"AND F.PRODUCT_ID = PM.PRODUCT_ID\r\n" + 
    		"AND PM.PORTFOLIO_ID= P.PORTFOLIO_ID\r\n" + 
    		"AND P.LOB_ID = L.LOB_ID\r\n" + 
    		"AND L.LOB_STATUS = 'Y'\r\n" + 
    		"AND P.PORTFOLIO_STATUS='Y'\r\n" + 
    		"AND PM.PRODUCT_STATUS='Y'\r\n" + 
    		"AND F.LOB_ID= :LOB_ID\r\n" + 
    		"AND F.PORTFOLIO_ID = :PORTFOLIO_ID\r\n" + 
    		"AND SUB.DISPLAY_NAME = :DISPLAY_NAME\r\n" + 
    		"AND F.YEAR = :YEAR_ID\r\n" + 
    		"\r\n";
    if(!quarterid.equals("Q")) {
   	 if(!quarterid.equals("YTD")) {
		    pgquery = pgquery + "AND F.QUARTER  IN (:QUARTER_ID)\r\n";
   	 }
   	 else {
   		 LocalDate currentDate = LocalDate.now();
     	      Calendar cal = Calendar.getInstance(Locale.US);
     	      int month = cal.get(Calendar.MONTH);
     	      int quarter = (month / 3) + 1;
     	      if(quarter == 1) {
     	    	 qspg = qspg + "('Q1')" ;
     	      }
     	      else if(quarter == 2) {
     	    	qspg = qspg + "('Q1', 'Q2')" ;
     	      }
     	      else if (quarter == 3) {
     	    	qspg = qspg + "('Q1','Q2', 'Q3')" ;
     	      }
     	      else  {
     	    	qspg = qspg + "('Q1','Q2','Q3','Q4')" ; 
     	      }
     	   pgquery = pgquery + "AND F.QUARTER  IN " + qspg ;
   	 }
		    }
    
    pgquery = pgquery + " AND SUB.DISPLAY_ORDER != 0 GROUP BY PM.PRODUCT_NAME, SUB. DISPLAY_NAME,F.UNIT_OF_MEASUREMENT, SUB.TIMELINE";
	 List<ProductsGraph> lpg = new ArrayList<ProductsGraph>();
	 System.out.println(pgquery);
	 lpg = template.query(pgquery,params,  new ProductsGraphRowMapper());		
return lpg;
  
}


}
