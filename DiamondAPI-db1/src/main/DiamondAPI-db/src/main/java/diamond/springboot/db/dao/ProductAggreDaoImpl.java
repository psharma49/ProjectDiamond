<<<<<<< HEAD:DiamondAPI-db1/src/main/DiamondAPI-db/src/main/java/diamond/springboot/db/dao/ProductAggreDaoImpl.java
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
=======
package diamond.springboot.db.dao;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.HashMap;
import java.util.LinkedHashMap;
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

public LinkedHashMap<String, List<ProductAggre>> bvProductAggre(int lobid, int portfolioid, int productid) {
	MapSqlParameterSource params = new MapSqlParameterSource();
	params.addValue("LOB_ID", lobid);
	params.addValue("PORTFOLIO_ID", portfolioid);
    params.addValue("PRODUCT_ID", productid);
   /* return template.query("SELECT K.KPI_NAME, SUB.KPI_SUBCATEGORY_NAME,F.UNIT_OF_MEASUREMENT, SUM(F.BUSINESS_VALUE), AVG(F.BUSINESS_VALUE)\r\n" + 
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
    		*/ 
   List<ProductAggre> li = new ArrayList<ProductAggre>();
    li =  template.query("SELECT K.KPI_NAME, SUB.KPI_SUBCATEGORY_NAME, SUB.PRIORITY, F.UNIT_OF_MEASUREMENT , SUM(F.BUSINESS_VALUE), AVG(F.BUSINESS_VALUE)\r\n" + 
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
    		"GROUP BY K.KPI_NAME, SUB.KPI_SUBCATEGORY_NAME, SUB.PRIORITY, F.UNIT_OF_MEASUREMENT \r\n" + 
    		"\r\n" + 
    		"ORDER BY SUB.PRIORITY ASC, K.KPI_NAME, SUB.KPI_SUBCATEGORY_NAME", params,  new ProductAggreRowMapper());
    			
      LinkedHashMap<String, List<ProductAggre>> product_map = new LinkedHashMap<>(); 
      String temp = "";
     
      
     
      for(int i = 0; i < li.size(); i++){
      temp = "";
      List<ProductAggre> li_temp = new ArrayList<ProductAggre>(); 
      
      temp = li.get(i).getKpi_name();
      while(i+1 < li.size() &&  li.get(i+1).getKpi_name().equals(temp)){
    	 
      li_temp.add(li.get(i));
     
      // li_temp.add( new ProductAggre( li.get(i).getKpi_name(),li.get(i).getKpi_subcategory_name(), li.get(i).getUnit_of_measurement(), li.get(i).getSum(),li.get(i).getAvg())); 
       
       
      i++;
      }
      // li_temp.add( new ProductAggre( li.get(i).getKpi_name(),li.get(i).getKpi_subcategory_name(), li.get(i).getUnit_of_measurement(), li.get(i).getSum(),li.get(i).getAvg()));  
       
      li_temp.add( li.get(i));
      
      product_map.put( temp, li_temp);
          // li_temp.clear();
      }
   return product_map;
}

}
>>>>>>> e31035e7cec9f951d72e301ce3a0666c4c939688:DiamondAPI-db/src/main/java/diamond/springboot/db/dao/ProductAggreDaoImpl.java
