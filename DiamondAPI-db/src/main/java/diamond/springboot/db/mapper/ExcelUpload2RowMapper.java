package diamond.springboot.db.mapper;

import java.sql.ResultSet;
import java.sql.SQLException;

import org.springframework.jdbc.core.RowMapper;

import diamond.springboot.db.entity.User.ExcelUpload2;



public class ExcelUpload2RowMapper implements RowMapper<ExcelUpload2>{

	@Override
	public ExcelUpload2 mapRow(ResultSet rs, int arg1) throws SQLException {
	ExcelUpload2 eu2 = new ExcelUpload2();
	eu2.setKpi_id(rs.getInt("KPI_ID"));
	eu2.setKpi_subcategory_id(rs.getInt("KPI_SUBCATEGORY_ID"));
	
	        return eu2;
	}
}
