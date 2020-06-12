package diamond.springboot.db.entity.User;

import java.math.BigDecimal;

public class Featureq {
	public Featureq() {
		
	}
	public Featureq(String feature_name, BigDecimal commercial, String kps_commertial, String um_comm,
			BigDecimal market, String kps_market, String um_markrt, BigDecimal efficiency, String kps_eff,
			String um_eff, BigDecimal customer_value, String kps_cv, String um_cv, BigDecimal future_trends,
			String kps_ft, String um_fit) {
		super();
		this.feature_name = feature_name;
		this.commercial = commercial;
		this.kps_commertial = kps_commertial;
		this.um_comm = um_comm;
		this.market = market;
		this.kps_market = kps_market;
		this.um_markrt = um_markrt;
		this.efficiency = efficiency;
		this.kps_eff = kps_eff;
		this.um_eff = um_eff;
		this.customer_value = customer_value;
		this.kps_cv = kps_cv;
		this.um_cv = um_cv;
		this.future_trends = future_trends;
		this.kps_ft = kps_ft;
		this.um_fit = um_fit;
	}

	public String getFeature_name() {
		return feature_name;
	}

	public void setFeature_name(String feature_name) {
		this.feature_name = feature_name;
	}

	public BigDecimal getCommercial() {
		return commercial;
	}

	public void setCommercial(BigDecimal commercial) {
		this.commercial = commercial;
	}

	public String getKps_commertial() {
		return kps_commertial;
	}

	public void setKps_commertial(String kps_commertial) {
		this.kps_commertial = kps_commertial;
	}

	public String getUm_comm() {
		return um_comm;
	}

	public void setUm_comm(String um_comm) {
		this.um_comm = um_comm;
	}

	public BigDecimal getMarket() {
		return market;
	}

	public void setMarket(BigDecimal market) {
		this.market = market;
	}

	public String getKps_market() {
		return kps_market;
	}

	public void setKps_market(String kps_market) {
		this.kps_market = kps_market;
	}

	public String getUm_markrt() {
		return um_markrt;
	}

	public void setUm_markrt(String um_markrt) {
		this.um_markrt = um_markrt;
	}

	public BigDecimal getEfficiency() {
		return efficiency;
	}

	public void setEfficiency(BigDecimal efficiency) {
		this.efficiency = efficiency;
	}

	public String getKps_eff() {
		return kps_eff;
	}

	public void setKps_eff(String kps_eff) {
		this.kps_eff = kps_eff;
	}

	public String getUm_eff() {
		return um_eff;
	}

	public void setUm_eff(String um_eff) {
		this.um_eff = um_eff;
	}

	public BigDecimal getCustomer_value() {
		return customer_value;
	}

	public void setCustomer_value(BigDecimal customer_value) {
		this.customer_value = customer_value;
	}

	public String getKps_cv() {
		return kps_cv;
	}

	public void setKps_cv(String kps_cv) {
		this.kps_cv = kps_cv;
	}

	public String getUm_cv() {
		return um_cv;
	}

	public void setUm_cv(String um_cv) {
		this.um_cv = um_cv;
	}

	public BigDecimal getFuture_trends() {
		return future_trends;
	}

	public void setFuture_trends(BigDecimal future_trends) {
		this.future_trends = future_trends;
	}

	public String getKps_ft() {
		return kps_ft;
	}

	public void setKps_ft(String kps_ft) {
		this.kps_ft = kps_ft;
	}

	public String getUm_fit() {
		return um_fit;
	}

	public void setUm_fit(String um_fit) {
		this.um_fit = um_fit;
	}

	private String feature_name;
	private BigDecimal commercial;
	private String kps_commertial;
	private String um_comm;
	
	private BigDecimal market;
	private String kps_market;

	private String um_markrt;
	private BigDecimal efficiency;
	private String kps_eff;

	private String um_eff;
	private BigDecimal customer_value;
	private String kps_cv;

	private String um_cv;
	private BigDecimal future_trends;
	private String kps_ft;

	private String um_fit;
}
