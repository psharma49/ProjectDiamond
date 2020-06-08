package diamond.springboot.db.entity.User;

public class Year {
	public Year() {
			}
	public Year(int year_id, int year_number) {
		super();
		this.year_id = year_id;
		this.year_number = year_number;
	}
	public int getYear_id() {
		return year_id;
	}
	public void setYear_id(int year_id) {
		this.year_id = year_id;
	}
	public int getYear_number() {
		return year_number;
	}
	public void setYear_number(int year_number) {
		this.year_number = year_number;
	}
	private int year_id;
	private int year_number;
	

}
