package diamond.springboot.db.mapper;

import java.sql.ResultSet;
import java.sql.SQLException;

import org.springframework.jdbc.core.RowMapper;

import diamond.springboot.db.entity.User.ExcelUpload3;
import diamond.springboot.db.entity.User.ExcelCheck;
public class ExcelCheckRowMapper implements RowMapper<ExcelCheck>{
@Override
public ExcelCheck mapRow(ResultSet rs, int arg1) throws SQLException {
ExcelCheck ec = new ExcelCheck();
ec.setId(rs.getInt("LOB_ID"));

       return ec;
}

}
