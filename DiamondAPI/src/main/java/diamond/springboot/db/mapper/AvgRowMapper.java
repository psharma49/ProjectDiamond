package diamond.springboot.db.mapper;
import java.sql.ResultSet;
import java.sql.SQLException;

import org.springframework.jdbc.core.RowMapper;

import diamond.springboot.db.entity.User.Avg;
import diamond.springboot.db.entity.User.Feature;
public class AvgRowMapper implements RowMapper<Avg> {

	@Override
	public Avg mapRow(ResultSet rs, int arg1) throws SQLException {
	Avg a = new Avg();
	
	a.setTtv(rs.getBigDecimal("AVG"));
	a.setVel(rs.getBigDecimal("avg1"));
	        return a;
	}
}
