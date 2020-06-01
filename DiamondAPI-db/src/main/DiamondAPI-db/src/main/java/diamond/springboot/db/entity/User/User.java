package diamond.springboot.db.entity.User;

public class User {
	public User() {
		
	}
	
	
	public User(int user_id, String user_name, String password, String first_name, String last_name, String satus) {
		super();
		this.user_id = user_id;
		this.user_name = user_name;
		this.password = password;
		this.first_name = first_name;
		this.last_name = last_name;
		this.satus = satus;
	}
	private int user_id;
	public int getUser_id() {
		return user_id;
	}
	public void setUser_id(int user_id) {
		this.user_id = user_id;
	}
	public String getUser_name() {
		return user_name;
	}
	public void setUser_name(String user_name) {
		this.user_name = user_name;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public String getFirst_name() {
		return first_name;
	}
	public void setFirst_name(String first_name) {
		this.first_name = first_name;
	}
	public String getLast_name() {
		return last_name;
	}
	public void setLast_name(String last_name) {
		this.last_name = last_name;
	}
	public String getSatus() {
		return satus;
	}
	public void setSatus(String satus) {
		this.satus = satus;
	}
	private String user_name;
	private String password;
	private String first_name;
	private String last_name;
	private String satus;
	
	

}
