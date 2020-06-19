package diamond.springboot.db.mapper;

import java.sql.ResultSet;
import java.sql.SQLException;

import org.springframework.jdbc.core.RowMapper;

import diamond.springboot.db.entity.User.Display;
import diamond.springboot.db.entity.User.PortfolioIndi;

public class PortfolioIndiRowMapper implements RowMapper<PortfolioIndi> {

	@Override
	public PortfolioIndi mapRow(ResultSet rs, int arg1) throws SQLException {
	PortfolioIndi pi = new PortfolioIndi();
	pi.setKpi_name(rs.getString("KPI_NAME"));
	pi.setDisplay_name(rs.getString("DISPLAY_NAME"));
	pi.setDisplay_order(rs.getInt("DISPLAY_ORDER"));
	pi.setUnit_of_measurement(rs.getString("UNIT_OF_MEASUREMENT"));
	pi.setTimeline(rs.getString("TIMELINE"));
	pi.setSum(rs.getBigDecimal("SUM"));
	pi.setAvg(rs.getBigDecimal("AVG"));
	        return pi;
	}	
}
