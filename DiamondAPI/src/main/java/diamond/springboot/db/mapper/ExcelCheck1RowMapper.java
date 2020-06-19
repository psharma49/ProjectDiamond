package diamond.springboot.db.mapper;

import java.sql.ResultSet;
import java.sql.SQLException;

import org.springframework.jdbc.core.RowMapper;


import diamond.springboot.db.entity.User.ExcelCheck;
public class ExcelCheck1RowMapper implements RowMapper<ExcelCheck>{
@Override
public ExcelCheck mapRow(ResultSet rs, int arg1) throws SQLException {
ExcelCheck ec1 = new ExcelCheck();

ec1.setId(rs.getInt("PORTFOLIO_ID"));
return ec1;
}

}
