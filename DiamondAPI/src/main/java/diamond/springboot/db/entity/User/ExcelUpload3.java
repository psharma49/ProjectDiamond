package diamond.springboot.db.entity.User;

public class ExcelUpload3 {
	public ExcelUpload3() {
		
	}
	public ExcelUpload3(int lobid, int portfolioid, int productid) {
		super();
		this.lobid = lobid;
		this.portfolioid = portfolioid;
		this.productid = productid;
	}
	private int lobid;
	public int getLobid() {
		return lobid;
	}
	public void setLobid(int lobid) {
		this.lobid = lobid;
	}
	public int getPortfolioid() {
		return portfolioid;
	}
	public void setPortfolioid(int portfolioid) {
		this.portfolioid = portfolioid;
	}
	public int getProductid() {
		return productid;
	}
	public void setProductid(int productid) {
		this.productid = productid;
	}
	private int portfolioid;
	private int productid;
	
}
