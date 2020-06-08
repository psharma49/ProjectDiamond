package diamond.springboot.db.entity.User;

public class Product {
	
	public Product() {
			}
	public Product(int product_id, String product_name, String product_status, int portfolio_id, int lob_id) {
		super();
		this.product_id = product_id;
		this.product_name = product_name;
		this.product_status = product_status;
		this.portfolio_id = portfolio_id;
		this.lob_id = lob_id;
	}
	public int getProduct_id() {
		return product_id;
	}
	public void setProduct_id(int product_id) {
		this.product_id = product_id;
	}
	public String getProduct_name() {
		return product_name;
	}
	public void setProduct_name(String product_name) {
		this.product_name = product_name;
	}
	public String getProduct_status() {
		return product_status;
	}
	public void setProduct_status(String product_status) {
		this.product_status = product_status;
	}
	public int getPortfolio_id() {
		return portfolio_id;
	}
	public void setPortfolio_id(int portfolio_id) {
		this.portfolio_id = portfolio_id;
	}
	public int getLob_id() {
		return lob_id;
	}
	public void setLob_id(int lob_id) {
		this.lob_id = lob_id;
	}
	private int product_id;
	private String product_name;
	private String product_status;
	private int portfolio_id;
	private int lob_id;

}
