package diamond.springboot.db.entity.User;

import java.math.BigDecimal;

public class FeatureUpload {
	public FeatureUpload() {
		
	}
	
	public FeatureUpload(String feature_name, String feature_month, BigDecimal ttv, BigDecimal velocity,
			String project_type, BigDecimal business_value, String unit_of_measurement, int kpi_subcategory_id,
			int kpi_id, int product_id, int portfolio_id, int lob_id, int year, String quarter) {
		super();
		this.feature_name = feature_name;
		this.feature_month = feature_month;
		this.ttv = ttv;
		this.velocity = velocity;
		this.project_type = project_type;
		this.business_value = business_value;
		this.unit_of_measurement = unit_of_measurement;
		this.kpi_subcategory_id = kpi_subcategory_id;
		this.kpi_id = kpi_id;
		this.product_id = product_id;
		this.portfolio_id = portfolio_id;
		this.lob_id = lob_id;
		this.year = year;
		this.quarter = quarter;
	}
	public String getFeature_name() {
		return feature_name;
	}
	public void setFeature_name(String feature_name) {
		this.feature_name = feature_name;
	}
	public String getFeature_month() {
		return feature_month;
	}
	public void setFeature_month(String feature_month) {
		this.feature_month = feature_month;
	}
	public BigDecimal getTtv() {
		return ttv;
	}
	public void setTtv(BigDecimal ttv) {
		this.ttv = ttv;
	}
	public BigDecimal getVelocity() {
		return velocity;
	}
	public void setVelocity(BigDecimal velocity) {
		this.velocity = velocity;
	}
	public String getProject_type() {
		return project_type;
	}
	public void setProject_type(String project_type) {
		this.project_type = project_type;
	}
	public BigDecimal getBusiness_value() {
		return business_value;
	}
	public void setBusiness_value(BigDecimal business_value) {
		this.business_value = business_value;
	}
	public String getUnit_of_measurement() {
		return unit_of_measurement;
	}
	public void setUnit_of_measurement(String unit_of_measurement) {
		this.unit_of_measurement = unit_of_measurement;
	}
	public int getKpi_subcategory_id() {
		return kpi_subcategory_id;
	}
	public void setKpi_subcategory_id(int kpi_subcategory_id) {
		this.kpi_subcategory_id = kpi_subcategory_id;
	}
	public int getKpi_id() {
		return kpi_id;
	}
	public void setKpi_id(int kpi_id) {
		this.kpi_id = kpi_id;
	}
	public int getProduct_id() {
		return product_id;
	}
	public void setProduct_id(int product_id) {
		this.product_id = product_id;
	}
	public int getPortfolio_id() {
		return portfolio_id;
	}
	public void setPortfolio_id(int portfolio_id) {
		this.portfolio_id = portfolio_id;
	}
	public int getLob_id() {
		return lob_id;
	}
	public void setLob_id(int lob_id) {
		this.lob_id = lob_id;
	}
	public int getYear() {
		return year;
	}
	public void setYear(int year) {
		this.year = year;
	}
	public String getQuarter() {
		return quarter;
	}
	public void setQuarter(String quarter) {
		this.quarter = quarter;
	}
	private String feature_name;
	private String feature_month;
	private BigDecimal ttv;
	private BigDecimal velocity;
	private String project_type;
	private BigDecimal business_value;
	private String unit_of_measurement;
	private int kpi_subcategory_id;
	private int kpi_id;
	private int product_id;
	private int portfolio_id;
	private int lob_id;
	private int year;
	private String quarter;
	
}
