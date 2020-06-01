package diamond.springboot.db.mapper;

import java.sql.ResultSet;
import java.sql.SQLException;

import org.springframework.jdbc.core.RowMapper;

import diamond.springboot.db.entity.User.Lob;

public class LobRowMapper implements RowMapper<Lob> {
	@Override
	public Lob mapRow(ResultSet rs, int arg1) throws SQLException {
	Lob l = new Lob();
	l.setLob_id(rs.getInt("LOB_ID"));
	l.setLob_name(rs.getString("LOB_NAME"));
	l.setLob_status(rs.getString("LOB_STATUS"));
	        return l;
	}


}
