<<<<<<< HEAD:DiamondAPI-db1/src/main/java/diamond/springboot/db/entity/User/ProductAggre.java
package diamond.springboot.db.entity.User;

import java.math.BigDecimal;

public class ProductAggre {
	
	public ProductAggre() {
		
	}
	public ProductAggre(String kpi_name, String kpi_subcategory_name, String unit_of_measurement, BigDecimal sum,
			BigDecimal avg) {
		super();
		this.kpi_name = kpi_name;
		this.kpi_subcategory_name = kpi_subcategory_name;
		this.unit_of_measurement = unit_of_measurement;
		this.sum = sum;
		this.avg = avg;
	}
	public String getKpi_name() {
		return kpi_name;
	}
	public void setKpi_name(String kpi_name) {
		this.kpi_name = kpi_name;
	}
	public String getKpi_subcategory_name() {
		return kpi_subcategory_name;
	}
	public void setKpi_subcategory_name(String kpi_subcategory_name) {
		this.kpi_subcategory_name = kpi_subcategory_name;
	}
	public String getUnit_of_measurement() {
		return unit_of_measurement;
	}
	public void setUnit_of_measurement(String unit_of_measurement) {
		this.unit_of_measurement = unit_of_measurement;
	}
	public BigDecimal getSum() {
		return sum;
	}
	public void setSum(BigDecimal sum) {
		this.sum = sum;
	}
	public BigDecimal getAvg() {
		return avg;
	}
	public void setAvg(BigDecimal avg) {
		this.avg = avg;
	}
	private String kpi_name;
	private String kpi_subcategory_name;
	private String unit_of_measurement;
	private BigDecimal sum;
	private BigDecimal avg;
	

}
=======
package diamond.springboot.db.entity.User;

import java.math.BigDecimal;

public class ProductAggre {
	
	public ProductAggre(String kpi_name, String kpi_subcategory_name, int priority, String unit_of_measurement,
			BigDecimal sum, BigDecimal avg) {
		super();
		this.kpi_name = kpi_name;
		this.kpi_subcategory_name = kpi_subcategory_name;
		this.priority = priority;
		this.unit_of_measurement = unit_of_measurement;
		this.sum = sum;
		this.avg = avg;
	}

	public ProductAggre() {
		
	}
	
	public String getKpi_name() {
		return kpi_name;
	}
	public void setKpi_name(String kpi_name) {
		this.kpi_name = kpi_name;
	}
	public String getKpi_subcategory_name() {
		return kpi_subcategory_name;
	}
	public void setKpi_subcategory_name(String kpi_subcategory_name) {
		this.kpi_subcategory_name = kpi_subcategory_name;
	}
	public String getUnit_of_measurement() {
		return unit_of_measurement;
	}
	public void setUnit_of_measurement(String unit_of_measurement) {
		this.unit_of_measurement = unit_of_measurement;
	}
	public BigDecimal getSum() {
		return sum;
	}
	public void setSum(BigDecimal sum) {
		this.sum = sum;
	}
	public BigDecimal getAvg() {
		return avg;
	}
	public void setAvg(BigDecimal avg) {
		this.avg = avg;
	}
	private String kpi_name;
	private String kpi_subcategory_name;
	public int getPriority() {
		return priority;
	}
	public void setPriority(int priority) {
		this.priority = priority;
	}
	private int priority;
	private String unit_of_measurement;
	private BigDecimal sum;
	private BigDecimal avg;
	

}
>>>>>>> e31035e7cec9f951d72e301ce3a0666c4c939688:DiamondAPI-db/src/main/java/diamond/springboot/db/entity/User/ProductAggre.java
