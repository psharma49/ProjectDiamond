package diamond.springboot.db.entity.User;

public class Portfolio {
	public Portfolio() {
		
	}
	public Portfolio(int portfolio_id, String portfolio_name, String portfolio_status, int lob_id) {
		super();
		this.portfolio_id = portfolio_id;
		this.portfolio_name = portfolio_name;
		this.portfolio_status = portfolio_status;
		this.lob_id = lob_id;
	}
	public int getPortfolio_id() {
		return portfolio_id;
	}
	public void setPortfolio_id(int portfolio_id) {
		this.portfolio_id = portfolio_id;
	}
	public String getPortfolio_name() {
		return portfolio_name;
	}
	public void setPortfolio_name(String portfolio_name) {
		this.portfolio_name = portfolio_name;
	}
	public String getPortfolio_status() {
		return portfolio_status;
	}
	public void setPortfolio_status(String portfolio_status) {
		this.portfolio_status = portfolio_status;
	}
	public int getLob_id() {
		return lob_id;
	}
	public void setLob_id(int lob_id) {
		this.lob_id = lob_id;
	}
	private int portfolio_id;
	private String portfolio_name;
	private String portfolio_status;
	private int lob_id;
	

}
