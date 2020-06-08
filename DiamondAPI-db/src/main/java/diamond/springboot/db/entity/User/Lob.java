package diamond.springboot.db.entity.User;

public class Lob {
	public Lob() {
		
	}
	public Lob(int lob_id, String lob_name, String lob_status) {
		super();
		this.lob_id = lob_id;
		this.lob_name = lob_name;
		this.lob_status = lob_status;
	}
	private int lob_id;
	public int getLob_id() {
		return lob_id;
	}
	public void setLob_id(int lob_id) {
		this.lob_id = lob_id;
	}
	public String getLob_name() {
		return lob_name;
	}
	public void setLob_name(String lob_name) {
		this.lob_name = lob_name;
	}
	public String getLob_status() {
		return lob_status;
	}
	public void setLob_status(String lob_status) {
		this.lob_status = lob_status;
	}
	private String lob_name;
	private String lob_status;
	

}
