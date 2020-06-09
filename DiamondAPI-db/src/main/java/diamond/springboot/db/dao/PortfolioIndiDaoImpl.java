package diamond.springboot.db.dao;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.Calendar;
import java.util.List;
import java.util.Locale;

import org.springframework.jdbc.core.namedparam.MapSqlParameterSource;
import org.springframework.jdbc.core.namedparam.NamedParameterJdbcTemplate;
import org.springframework.stereotype.Repository;

import diamond.springboot.db.entity.User.Display;
import diamond.springboot.db.entity.User.PortfolioIndi;
import diamond.springboot.db.mapper.DisplayRowMapper;
import diamond.springboot.db.mapper.PortfolioIndiRowMapper;
@Repository
public class PortfolioIndiDaoImpl {
	public PortfolioIndiDaoImpl(NamedParameterJdbcTemplate template) {  
        this.template = template;  
}  
NamedParameterJdbcTemplate template;  	
public List<PortfolioIndi> indiPortfolioView(int lobid, int portfolioid, int yearid, String quarterid){
	MapSqlParameterSource params = new MapSqlParameterSource();
	params.addValue("LOB_ID", lobid);
	params.addValue("PORTFOLIO_ID", portfolioid);
    params.addValue("YEAR_ID", yearid);
    params.addValue("QUARTER_ID", quarterid);
    String qspi = "";
    String piquery = "SELECT K.KPI_NAME, SUB.DISPLAY_NAME, SUB.DISPLAY_ORDER, F.UNIT_OF_MEASUREMENT ,SUB.TIMELINE, SUM(F.BUSINESS_VALUE), AVG(F.BUSINESS_VALUE)\r\n" + 
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
    		"AND F.YEAR = :YEAR_ID\r\n" + 
    		"\r\n" ; 
    if(!quarterid.equals("Q")) {
    	 if(!quarterid.equals("YTD")) {
		    piquery = piquery + "AND F.QUARTER  IN (:QUARTER_ID)\r\n";
    	 }
    	 else {
    		 LocalDate currentDate = LocalDate.now();
      	      Calendar cal = Calendar.getInstance(Locale.US);
      	      int month = cal.get(Calendar.MONTH);
      	      int quarter = (month / 3) + 1;
      	      if(quarter == 1) {
      	    	 qspi = qspi + "('Q1')" ;
      	      }
      	      else if(quarter == 2) {
      	    	qspi = qspi + "('Q1', 'Q2')" ;
      	      }
      	      else if (quarter == 3) {
      	    	qspi = qspi + "('Q1','Q2', 'Q3')" ;
      	      }
      	      else  {
      	    	qspi = qspi + "('Q1','Q2','Q3','Q4')" ; 
      	      }
      	   piquery = piquery + "AND F.QUARTER  IN " + qspi ;
    	 }
		    }
    		piquery = piquery + " AND SUB.DISPLAY_ORDER != 0 GROUP BY K.KPI_NAME, SUB. DISPLAY_NAME, SUB. DISPLAY_ORDER, F.UNIT_OF_MEASUREMENT, SUB.TIMELINE ORDER BY  K.KPI_NAME,SUB. DISPLAY_ORDER ASC, SUB. DISPLAY_NAME";
    		 List<PortfolioIndi> lpi = new ArrayList<PortfolioIndi>();
    		 System.out.println(piquery);
    		 lpi = template.query(piquery,params,  new PortfolioIndiRowMapper());		
return lpi;


}
}
