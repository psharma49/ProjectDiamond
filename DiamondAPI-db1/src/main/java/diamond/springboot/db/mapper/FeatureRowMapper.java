package diamond.springboot.db.mapper;

import java.sql.ResultSet;
import java.sql.SQLException;

import org.springframework.jdbc.core.RowMapper;

import diamond.springboot.db.entity.User.Feature;


public class FeatureRowMapper implements RowMapper<Feature> {

	@Override
	public Feature mapRow(ResultSet rs, int arg1) throws SQLException {
	Feature f = new Feature();
	f.setFeature_name(rs.getString("FEATURE_NAME"));
	f.setKpi_id(rs.getInt("KPI_ID"));
	f.setKpi_subcategory(rs.getString("KPI_SUBCATEGORY_NAME"));
	f.setBusiness_value(rs.getBigDecimal("BUSINESS_VALUE"));
	f.setUnit_of_measurement(rs.getString("UNIT_OF_MEASUREMENT"));
	        return f;
	}
	
}
