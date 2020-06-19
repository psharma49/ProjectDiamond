package diamond.springboot.db.mapper;

import java.sql.ResultSet;
import java.sql.SQLException;

import org.springframework.jdbc.core.RowMapper;


import diamond.springboot.db.entity.User.ExcelCheck;
public class ExcelCheck2RowMapper implements RowMapper<ExcelCheck>{
@Override
public ExcelCheck mapRow(ResultSet rs, int arg1) throws SQLException {
ExcelCheck ec2 = new ExcelCheck();

ec2.setId(rs.getInt("PRODUCT_ID"));
return ec2;
}

}
