package diamond.springboot.db.entity.User;

import java.math.BigDecimal;

public class ProductsGraph {
	
	public ProductsGraph() {
		
	}
	public ProductsGraph(String product_name, String unit_of_measurement, String timeline, BigDecimal sum,
			BigDecimal avg) {
		super();
		this.product_name = product_name;
		this.unit_of_measurement = unit_of_measurement;
		this.timeline = timeline;
		this.sum = sum;
		this.avg = avg;
	}
	public String getProduct_name() {
		return product_name;
	}
	public void setProduct_name(String product_name) {
		this.product_name = product_name;
	}
	public String getUnit_of_measurement() {
		return unit_of_measurement;
	}
	public void setUnit_of_measurement(String unit_of_measurement) {
		this.unit_of_measurement = unit_of_measurement;
	}
	public String getTimeline() {
		return timeline;
	}
	public void setTimeline(String timeline) {
		this.timeline = timeline;
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
	private String product_name;
	private String unit_of_measurement;
	private String timeline;
	private BigDecimal sum;
	private BigDecimal avg;
	
}
