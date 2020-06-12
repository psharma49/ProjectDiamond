package diamond.springboot.db.mapper;
import java.sql.ResultSet;
import java.sql.SQLException;

import org.springframework.jdbc.core.RowMapper;

import diamond.springboot.db.entity.User.Product;
import diamond.springboot.db.entity.User.Year;


public class YearRowMapper implements RowMapper<Year> {

	@Override
	public Year mapRow(ResultSet rs, int arg1) throws SQLException {
	Year y = new Year();
	y.setYear_id(rs.getInt("YEAR_ID"));
	y.setYear_number(rs.getInt("YEAR_NUMBER"));
	
	        return y;
	}
	
	
}
