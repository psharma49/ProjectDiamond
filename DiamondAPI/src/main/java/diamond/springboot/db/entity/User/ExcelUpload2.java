package diamond.springboot.db.entity.User;

public class ExcelUpload2 {
	public ExcelUpload2() {
		
	}
	public ExcelUpload2(int kpi_id, int kpi_subcategory_id) {
		super();
		this.kpi_id = kpi_id;
		this.kpi_subcategory_id = kpi_subcategory_id;
	}
	private int kpi_id;
	public int getKpi_id() {
		return kpi_id;
	}
	public void setKpi_id(int kpi_id) {
		this.kpi_id = kpi_id;
	}
	public int getKpi_subcategory_id() {
		return kpi_subcategory_id;
	}
	public void setKpi_subcategory_id(int kpi_subcategory_id) {
		this.kpi_subcategory_id = kpi_subcategory_id;
	}
	private int kpi_subcategory_id;
	

}
