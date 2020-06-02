package diamond.springboot.db.entity.User;

import java.math.BigDecimal;

public class Feature {
	public Feature() {
		
	}
	
	public Feature(String feature_name, int kpi_id, String kpi_subcategory, BigDecimal business_value,
			String unit_of_measurement) {
		super();
		this.feature_name = feature_name;
		this.kpi_id = kpi_id;
		this.kpi_subcategory = kpi_subcategory;
		this.business_value = business_value;
		this.unit_of_measurement = unit_of_measurement;
	}
	public String getFeature_name() {
		return feature_name;
	}
	public void setFeature_name(String feature_name) {
		this.feature_name = feature_name;
	}
	public int getKpi_id() {
		return kpi_id;
	}
	public void setKpi_id(int kpi_id) {
		this.kpi_id = kpi_id;
	}
	public String getKpi_subcategory() {
		return kpi_subcategory;
	}
	public void setKpi_subcategory(String kpi_subcategory) {
		this.kpi_subcategory = kpi_subcategory;
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
	private String feature_name;
	private int kpi_id;
	private String kpi_subcategory;
	private BigDecimal business_value;
	private String unit_of_measurement;
	

}
