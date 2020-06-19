package diamond.springboot.db.mapper;

import java.sql.ResultSet;
import java.sql.SQLException;

import org.springframework.jdbc.core.RowMapper;

import diamond.springboot.db.entity.User.Display;
import diamond.springboot.db.entity.User.Feature;

public class DisplayRowMapper implements RowMapper<Display> {

	@Override
	public Display mapRow(ResultSet rs, int arg1) throws SQLException {
	Display d = new Display();
	d.setKpi_name(rs.getString("KPI_NAME"));
	d.setDisplay_name(rs.getString("DISPLAY_NAME"));
	d.setDisplay_order(rs.getInt("DISPLAY_ORDER"));
	d.setUnit_of_measurement(rs.getString("UNIT_OF_MEASUREMENT"));
	d.setTimeline(rs.getString("TIMELINE"));
	d.setSum(rs.getBigDecimal("SUM"));
	d.setAvg(rs.getBigDecimal("AVG"));
	        return d;
	}	
}
