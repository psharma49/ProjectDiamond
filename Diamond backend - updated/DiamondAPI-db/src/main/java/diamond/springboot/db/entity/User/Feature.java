package diamond.springboot.db.entity.User;

import java.math.BigDecimal;

public class Feature {
	public Feature() {
		
	}
	public Feature(String feature_name, String kpi_name, BigDecimal business_value, String unit_of_measurement) {
		super();
		this.feature_name = feature_name;
		this.kpi_name = kpi_name;
		this.business_value = business_value;
		this.unit_of_measurement = unit_of_measurement;
	}
	private String feature_name;
	public String getFeature_name() {
		return feature_name;
	}
	public void setFeature_name(String feature_name) {
		this.feature_name = feature_name;
	}
	public String getKpi_name() {
		return kpi_name;
	}
	public void setKpi_name(String kpi_name) {
		this.kpi_name = kpi_name;
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
	private String kpi_name;
	private BigDecimal business_value;
	private String unit_of_measurement;
}
