package diamond.springboot.db.mapper;

import java.sql.ResultSet;
import java.sql.SQLException;

import org.springframework.jdbc.core.RowMapper;

import diamond.springboot.db.entity.User.ExcelUpload3;

public class ExcelUpload3RowMapper implements RowMapper<ExcelUpload3>{
	@Override
	public ExcelUpload3 mapRow(ResultSet rs, int arg1) throws SQLException {
	ExcelUpload3 eu3 = new ExcelUpload3();
	eu3.setLobid(rs.getInt("LOB_ID"));
	eu3.setPortfolioid(rs.getInt("PORTFOLIO_ID"));
	eu3.setProductid(rs.getInt("PRODUCT_ID"));
	        return eu3;
	}
	
}
