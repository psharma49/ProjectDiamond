package diamond.springboot.db.entity.User;

import java.math.BigDecimal;

public class ExcelUpload {
	public ExcelUpload() {
		
	}
public ExcelUpload(String date, String lob, String portfolio, String product, String feature1_name, double ttv,
			double vel, String project_type, String kpi, String sub_kpi, double bv, String uom) {
		super();
		this.date = date;
		this.lob = lob;
		this.portfolio = portfolio;
		this.product = product;
		this.feature1_name = feature1_name;
		this.ttv = ttv;
		this.vel = vel;
		this.project_type = project_type;
		this.kpi = kpi;
		this.sub_kpi = sub_kpi;
		this.bv = bv;
		this.uom = uom;
	}
private String date;
public String getDate() {
	return date;
}
public void setDate(String date) {
	this.date = date;
}
public String getLob() {
	return lob;
}
public void setLob(String lob) {
	this.lob = lob;
}
public String getPortfolio() {
	return portfolio;
}
public void setPortfolio(String portfolio) {
	this.portfolio = portfolio;
}
public String getProduct() {
	return product;
}
public void setProduct(String product) {
	this.product = product;
}
public String getFeature1_name() {
	return feature1_name;
}
public void setFeature1_name(String feature_name) {
	this.feature1_name = feature_name;
}
public double getTtv() {
	return ttv;
}
public void setTtv(double d) {
	this.ttv = d;
}
public double getVel() {
	return vel;
}
public void setVel(double d) {
	this.vel = d;
}
public String getProject_type() {
	return project_type;
}
public void setProject_type(String project_type) {
	this.project_type = project_type;
}
public String getKpi() {
	return kpi;
}
public void setKpi(String kpi) {
	this.kpi = kpi;
}
public String getSub_kpi() {
	return sub_kpi;
}
public void setSub_kpi(String sub_kpi) {
	this.sub_kpi = sub_kpi;
}
public double getBv() {
	return bv;
}
public void setBv(double bv) {
	this.bv = bv;
}
public String getUom() {
	return uom;
}
public void setUom(String uom) {
	this.uom = uom;
}
private String lob;
private String portfolio;
private String product;
private String feature1_name;
private double ttv;
private double vel;
private String project_type;
private String kpi;
private String sub_kpi;
private double bv;
private String uom;


}
