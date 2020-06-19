package diamond.springboot.db.mapper;

import java.sql.ResultSet;
import java.sql.SQLException;

import org.springframework.jdbc.core.RowMapper;

import diamond.springboot.db.entity.User.Feature;
import diamond.springboot.db.entity.User.Featureq;

public class FeatureqRowMapper implements RowMapper<Featureq> {
	@Override
	public Featureq mapRow(ResultSet rs, int arg1) throws SQLException {
	Featureq fq = new Featureq();
	fq.setFeature_name(rs.getString("FEATURE_NAME"));
	fq.setCommercial(rs.getBigDecimal("Commercial"));
	fq.setKps_commertial(rs.getString("kps_commertial"));
	fq.setUm_comm(rs.getString("um_com"));
	fq.setMarket(rs.getBigDecimal("Market"));
	fq.setKps_market(rs.getString("kps_market"));
	fq.setUm_markrt(rs.getString("um_markrt"));
	fq.setEfficiency(rs.getBigDecimal("Efficiency"));
	fq.setKps_eff(rs.getString("kps_eff"));
	fq.setUm_eff(rs.getString("um_eff"));
	fq.setCustomer_value(rs.getBigDecimal("Customer_Value"));
	fq.setKps_cv(rs.getString("kps_cv"));
	fq.setUm_cv(rs.getString("um_cv"));
	fq.setFuture_trends(rs.getBigDecimal("Future_Trends"));
	fq.setKps_ft(rs.getString("kps_ft"));
	fq.setUm_fit(rs.getString("um_ft"));
	        return fq;
	}

}
