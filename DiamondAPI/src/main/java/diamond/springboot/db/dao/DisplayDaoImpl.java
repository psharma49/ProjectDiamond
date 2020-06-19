package diamond.springboot.db.dao;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.Calendar;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Locale;

import org.springframework.jdbc.core.namedparam.MapSqlParameterSource;
import org.springframework.jdbc.core.namedparam.NamedParameterJdbcTemplate;
import org.springframework.stereotype.Repository;

import diamond.springboot.db.entity.User.Display;
import diamond.springboot.db.entity.User.Feature;
import diamond.springboot.db.mapper.DisplayRowMapper;
import diamond.springboot.db.mapper.FeatureRowMapper;

@Repository
public class DisplayDaoImpl {
	
	public DisplayDaoImpl(NamedParameterJdbcTemplate template) {  
        this.template = template;  
}  
NamedParameterJdbcTemplate template;
public List<Display> displayView(int lobid, int portfolioid, int productid,int yearid, String quarterid){
	MapSqlParameterSource params = new MapSqlParameterSource();
	params.addValue("LOB_ID", lobid);
	params.addValue("PORTFOLIO_ID", portfolioid);
    params.addValue("PRODUCT_ID", productid);
    params.addValue("YEAR_ID", yearid);
    params.addValue("QUARTER_ID", quarterid);
    String qsd = "";
    String dquery = "SELECT K.KPI_NAME, SUB.DISPLAY_NAME, SUB.DISPLAY_ORDER, F.UNIT_OF_MEASUREMENT ,SUB.TIMELINE, SUM(F.BUSINESS_VALUE), AVG(F.BUSINESS_VALUE)\r\n" + 
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
    		"AND F.PRODUCT_ID = :PRODUCT_ID\r\n" + 
    		"AND F.YEAR = :YEAR_ID\r\n" + 
    		"\r\n" ; 
    if(!quarterid.equals("Q")) {
    	 if(!quarterid.equals("YTD")) {
		    dquery = dquery + "AND F.QUARTER  IN (:QUARTER_ID)\r\n";
    	 }
    	 else {
    		 LocalDate currentDate = LocalDate.now();
      	      Calendar cal = Calendar.getInstance(Locale.US);
      	      int month = cal.get(Calendar.MONTH);
      	      int quarter = (month / 3) + 1;
      	      if(quarter == 1) {
      	    	 qsd = qsd + "('Q1')" ;
      	      }
      	      else if(quarter == 2) {
      	    	qsd = qsd + "('Q1', 'Q2')" ;
      	      }
      	      else if (quarter == 3) {
      	    	qsd = qsd + "('Q1','Q2', 'Q3')" ;
      	      }
      	      else  {
      	    	qsd = qsd + "('Q1','Q2','Q3','Q4')" ; 
      	      }
      	   dquery = dquery + "AND F.QUARTER  IN " + qsd ;
    	 }
		    }
    		dquery = dquery + " AND SUB.DISPLAY_ORDER != 0 GROUP BY K.KPI_NAME, SUB. DISPLAY_NAME, SUB. DISPLAY_ORDER, F.UNIT_OF_MEASUREMENT, SUB.TIMELINE ORDER BY  K.KPI_NAME,SUB. DISPLAY_ORDER ASC, SUB. DISPLAY_NAME";
    		 List<Display> ld = new ArrayList<Display>();
    		 System.out.println(dquery);
    		 ld = template.query(dquery,params,  new DisplayRowMapper());		
    		 for(int j = 0; j < ld.size(); j++){
    		        Display dis = ld.get(j);
    		        if(dis.getUnit_of_measurement()==null) {
    		        	continue;
    		        }
    		          String uom = dis.getUnit_of_measurement();
    		         if( uom.equals("%") || uom.equals("Points")){
    		         BigDecimal b = dis.getAvg();
    		         dis.setSum(b);
    		         }
    		         }

return ld;

}
}
