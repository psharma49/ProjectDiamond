package diamond.springboot.db.dao;

import java.io.ByteArrayInputStream;
import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.math.BigDecimal;

import org.apache.poi.ss.usermodel.Cell;
import org.apache.poi.ss.usermodel.Row;
import org.apache.poi.ss.usermodel.Sheet;
import org.apache.poi.ss.usermodel.Workbook;
import org.apache.poi.xssf.usermodel.XSSFRow;
import org.apache.poi.xssf.usermodel.XSSFSheet;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;
import java.util.ArrayList;
import java.util.List;

import org.springframework.jdbc.core.namedparam.MapSqlParameterSource;
import org.springframework.jdbc.core.namedparam.NamedParameterJdbcTemplate;
import org.springframework.jdbc.core.namedparam.SqlParameterSource;
import org.springframework.jdbc.support.GeneratedKeyHolder;
import org.springframework.jdbc.support.KeyHolder;
import org.springframework.stereotype.Repository;
import org.springframework.web.multipart.MultipartFile;


import diamond.springboot.db.entity.User.ExcelUpload;
import diamond.springboot.db.entity.User.ExcelUpload2;
import diamond.springboot.db.entity.User.ExcelUpload3;
import diamond.springboot.db.entity.User.Feature;
import diamond.springboot.db.entity.User.FeatureUpload;
import diamond.springboot.db.entity.User.ProductAggre;
import diamond.springboot.db.mapper.ExcelUpload2RowMapper;
import diamond.springboot.db.mapper.ExcelUpload3RowMapper;
import diamond.springboot.db.mapper.ProductAggreRowMapper;
@Repository
public class ExcelUploadDaoImpl {

	public ExcelUploadDaoImpl(NamedParameterJdbcTemplate template) {  
        this.template = template;  
}  
NamedParameterJdbcTemplate template;  

public void readExcel(MultipartFile file) throws IOException {
	
	//List<ExcelUpload> tempList = new ArrayList<ExcelUpload>();
    XSSFWorkbook workbook = new XSSFWorkbook(file.getInputStream());
    XSSFSheet worksheet = workbook.getSheetAt(0);

    for(int i=1;i<worksheet.getPhysicalNumberOfRows() ;i++) {
        ExcelUpload temp = new ExcelUpload();

        XSSFRow row = worksheet.getRow(i);
        temp.setDate(row.getCell(0).getStringCellValue());
        temp.setLob(row.getCell(1).getStringCellValue());
        temp.setPortfolio(row.getCell(2).getStringCellValue());
        temp.setProduct(row.getCell(3).getStringCellValue());
        temp.setFeature_name(row.getCell(4).getStringCellValue());
        temp.setTtv(row.getCell(5).getNumericCellValue());
        temp.setVel(row.getCell(6).getNumericCellValue());
        temp.setProject_type(row.getCell(7).getStringCellValue());
        temp.setKpi(row.getCell(8).getStringCellValue());
        temp.setSub_kpi(row.getCell(9).getStringCellValue());
        temp.setBv(row.getCell(10).getNumericCellValue());
        temp.setUom(row.getCell(11).getStringCellValue());
       String d = temp.getDate();
       String month = d.substring(3,6);
       String yearstr = d.substring(7,11);
       int yearint = Integer.parseInt(yearstr);
       String quarter = "";
       if(month.equals("Jan") || month.equals("Feb") || month.equals("Mar") ) {
    	   quarter = quarter + "Q1";
       }
       else if(month.equals("Apr") || month.equals("May") || month.equals("Jun") ) {
    	   quarter = quarter + "Q2";
       } 
       else if(month.equals("Jul") || month.equals("Aug") || month.equals("Sep") ) {
    	   quarter = quarter + "Q3";
       }
       else {
    	   quarter = quarter + "Q4";
       }
       
       String product_name = temp.getProduct();
       String sub_kpi_name = temp.getSub_kpi();
       MapSqlParameterSource params = new MapSqlParameterSource();
   	params.addValue("PRODUCT_NAME", product_name);
   	params.addValue("KPI_SUBCATEGORY_NAME", sub_kpi_name);
   	List<ExcelUpload3> e3 = new ArrayList<ExcelUpload3>();
   	e3 = template.query("SELECT LOB_ID, PORTFOLIO_ID, PRODUCT_ID\r\n" + 
   			"FROM PRODUCT_MASTER \r\n" + 
   			"WHERE\r\n" + 
   			"PRODUCT_NAME = :PRODUCT_NAME\r\n" + 
   			"AND PRODUCT_STATUS = 'Y'", params, new ExcelUpload3RowMapper());
           
   	
   	List<ExcelUpload2> e2 = new ArrayList<ExcelUpload2>();
   	e2 = template.query("SELECT KPI_ID, KPI_SUBCATEGORY_ID\r\n" + 
   			"FROM KPI_SUBCATEGORY \r\n" + 
   			"WHERE KPI_SUBCATEGORY_NAME = :KPI_SUBCATEGORY_NAME\r\n" + 
   			"", params, new ExcelUpload2RowMapper());
   	String fname = temp.getFeature_name();
   	double dttv = temp.getTtv();
   	BigDecimal fttv = BigDecimal.valueOf(dttv);
   	double dvel = temp.getVel();
   	BigDecimal fvel = BigDecimal.valueOf(dvel);
   	String fproject_type = temp.getProject_type();
   	double dbv = temp.getBv();
   	BigDecimal fbv = BigDecimal.valueOf(dbv);
   	String fuom = temp.getUom();
   	int f_subkpi_id = e2.get(0).getKpi_subcategory_id();
   	int f_kpi_id = e2.get(0).getKpi_id();
   	int f_lob_id = e3.get(0).getLobid();
   	int f_portfolio_id = e3.get(0).getPortfolioid();
   	int f_product_id = e3.get(0).getProductid();
   	
   	FeatureUpload fup = new FeatureUpload();	
   	fup.setFeature_name(fname);
   	fup.setFeature_month(month);
   	fup.setTtv(fttv);
   	fup.setVelocity(fvel);
   	fup.setProject_type(fproject_type);
   	fup.setBusiness_value(fbv);
   	fup.setUnit_of_measurement(fuom);
   	fup.setKpi_subcategory_id(f_subkpi_id);
   	fup.setKpi_id(f_kpi_id);
   	fup.setLob_id(f_lob_id);
   	fup.setPortfolio_id(f_portfolio_id);
   	fup.setProduct_id(f_product_id);
   	fup.setYear(yearint);
   	fup.setQuarter(quarter);
   	
   	final String insertsql = "INSERT INTO FEATURE(FEATURE_NAME, FEATURE_MONTH, TTV, VELOCITY, PROJECT_TYPE, BUSINESS_VALUE, UNIT_OF_MEASUREMENT, KPI_SUBCATEGORY_ID, KPI_ID,PRODUCT_ID, PORTFOLIO_ID, LOB_ID, YEAR, QUARTER) VALUES( :FEATURE_NAME, :FEATURE_MONTH, :TTV, :VELOCITY, :PROJECT_TYPE, :BUSINESS_VALUE, :UNIT_OF_MEASUREMENT, :KPI_SUBCATEGORY_ID, :KPI_ID, :PRODUCT_ID, :PORTFOLIO_ID, :LOB_ID, :YEAR, :QUARTER);";
   	KeyHolder holder = new GeneratedKeyHolder();
    MapSqlParameterSource param = new MapSqlParameterSource();
     param.addValue("FEATURE_NAME", fup.getFeature_month());
    param.addValue("FEATURE_MONTH", fup.getFeature_month());
     param.addValue("TTV",fup.getTtv() );
     param.addValue("VELOCITY",fup.getVelocity() );
    param.addValue("PROJECT_TYPE", fup.getProject_type() );
     param.addValue("BUSINESS_VALUE", fup.getBusiness_value());
     param.addValue("UNIT_OF_MEASUREMENT", fup.getUnit_of_measurement() );
     param.addValue("KPI_SUBCATEGORY_ID",fup.getKpi_subcategory_id() );
    param.addValue("KPI_ID", fup.getKpi_id() );
     param.addValue("PRODUCT_ID", fup.getProduct_id() );
     param.addValue("PORTFOLIO_ID", fup.getPortfolio_id());
     param.addValue("LOB_ID", fup.getLob_id() );
     param.addValue("YEAR", fup.getYear() );
     param.addValue("QUARTER", fup.getQuarter());
    template.update(insertsql,param, holder);

    
    
   // tempList.add(temp);   
            
           
    }
}


}
