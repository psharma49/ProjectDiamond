package diamond.springboot.db.entity.User;

import java.math.BigDecimal;

public class Display {
	public Display(String kpi_name, String display_name, int display_order, String unit_of_measurement, BigDecimal sum,
			BigDecimal avg, String timeline) {
		super();
		this.kpi_name = kpi_name;
		this.display_name = display_name;
		this.display_order = display_order;
		this.unit_of_measurement = unit_of_measurement;
		this.timeline = timeline;
		this.sum = sum;
		this.avg = avg;
		
	}

	public Display() {
		
	}
	
	
	public String getKpi_name() {
		return kpi_name;
	}
	public void setKpi_name(String kpi_name) {
		this.kpi_name = kpi_name;
	}
	public String getDisplay_name() {
		return display_name;
	}
	public void setDisplay_name(String display_name) {
		this.display_name = display_name;
	}
	public int getDisplay_order() {
		return display_order;
	}
	public void setDisplay_order(int display_order) {
		this.display_order = display_order;
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
	private String kpi_name;
	private String display_name;
	private int display_order;
	private String unit_of_measurement;
	private String timeline;
	private BigDecimal sum;
	private BigDecimal avg;

}
