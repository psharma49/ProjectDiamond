package diamond.springboot.db.dao;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.Calendar;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Locale;

import org.springframework.jdbc.core.namedparam.MapSqlParameterSource;
import org.springframework.jdbc.core.namedparam.NamedParameterJdbcTemplate;
import org.springframework.stereotype.Repository;

import diamond.springboot.db.entity.User.Feature;
import diamond.springboot.db.entity.User.Featureq;
import diamond.springboot.db.mapper.FeatureRowMapper;
import diamond.springboot.db.mapper.FeatureqRowMapper;

@Repository
public class FeatureqDaoImpl {
	public FeatureqDaoImpl(NamedParameterJdbcTemplate template) {  
        this.template = template;  
}  
NamedParameterJdbcTemplate template;  

public List<Featureq> featureqLevelView(int lobid, int portfolioid, int productid,int yearid, String quarterid){
	MapSqlParameterSource params = new MapSqlParameterSource();
	params.addValue("LOB_ID", lobid);
	params.addValue("PORTFOLIO_ID", portfolioid);
    params.addValue("PRODUCT_ID", productid);
    params.addValue("YEAR_ID", yearid);
    params.addValue("QUARTER_ID", quarterid);
    String qsq = "";
    List<Featureq> lfq = new ArrayList<Featureq>();
    String fqquery = "SELECT F.FEATURE_NAME, f1.Commercial, f1.um_com, f1.Market, f1.um_markrt,\r\n" +
    	    "f1.Efficiency, f1.um_eff, f1.Customer_Value, f1.um_cv, f1.Future_Trends, f1.um_ft \r\n" +
    	    "FROM LOB L, PORTFOLIO P, PRODUCT_MASTER PM, KPI_MASTER K, KPI_SUBCATEGORY SUB, FEATURE F\r\n" +
    	    "LEFT JOIN \r\n" +
    	    "(SELECT f.feature_name, COALESCE(SUM(f1.business_value),0::numeric) as Commercial, STRING_AGG(f1.unit_of_measurement, ',') as um_com, COALESCE(SUM(f2.business_value),0::numeric) as Market, STRING_AGG(f2.unit_of_measurement, '') as um_markrt,\r\n" +
    	    "COALESCE(SUM(f3.business_value),0::numeric) as Efficiency, STRING_AGG(f3.unit_of_measurement, '') as um_eff, COALESCE(SUM(f4.business_value),0::numeric) as Customer_Value, \r\n" +
    	    "STRING_AGG(f4.unit_of_measurement, '') as um_cv, COALESCE(SUM(f5.business_value),0::numeric) as Future_Trends, STRING_AGG(f5.unit_of_measurement, '') as um_ft\r\n" +
    	    "FROM feature f\r\n" +
    	    "LEFT JOIN feature f1 ON f.feature_id = f1.feature_id AND f1.kpi_id = 1\r\n" +
    	    "LEFT JOIN feature f2 ON f.feature_id = f2.feature_id AND f2.kpi_id = 2\r\n" +
    	    "LEFT JOIN feature f3 ON f.feature_id = f3.feature_id AND f3.kpi_id = 3\r\n" +
    	    "LEFT JOIN feature f4 ON f.feature_id = f4.feature_id AND f4.kpi_id = 4\r\n" +
    	    "LEFT JOIN feature f5 ON f.feature_id = f5.feature_id AND f5.kpi_id = 5\r\n" +
    	    "GROUP BY f.feature_name) f1 ON f.feature_name = f1.feature_name\r\n" +
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
    	    "AND F.YEAR = :YEAR_ID\r\n" ;
    	    if(!quarterid.equals("Q")) {
    	    	 if(!quarterid.equals("YTD")) {
    	              fqquery = fqquery + "AND F.QUARTER  IN (:QUARTER_ID)\r\n";
    	    	 }
    	    	 else {
    	    		 LocalDate currentDate = LocalDate.now();
    	       	      Calendar cal = Calendar.getInstance(Locale.US);
    	       	      int month = cal.get(Calendar.MONTH);
    	       	      int quarter = (month / 3) + 1;
    	       	      if(quarter == 1) {
    	       	    	 qsq = qsq + "('Q1')" ;
    	       	      }
    	       	      else if(quarter == 2) {
    	       	    	qsq = qsq + "('Q1', 'Q2')" ;
    	       	      }
    	       	      else if (quarter == 3) {
    	       	    	qsq = qsq + "('Q1','Q2', 'Q3')" ;
    	       	      }
    	       	      else  {
    	       	    	qsq = qsq + "('Q1','Q2','Q3','Q4')" ; 
    	       	      }
    	       	   fqquery = fqquery + "AND F.QUARTER  IN " + qsq ;
    	    	 }
    	              }
    	            fqquery = fqquery + " GROUP BY f.FEATURE_NAME, f1.Commercial, f1.um_com, f1.Market, f1.um_markrt,f1.Efficiency, f1.um_eff, f1.Customer_Value, f1.um_cv, f1.Future_Trends, f1.um_ft ORDER by F.FEATURE_NAME ";
    		System.out.println(fqquery);
    lfq = template.query(fqquery,params,  new FeatureqRowMapper());	
    return lfq;
}
}
