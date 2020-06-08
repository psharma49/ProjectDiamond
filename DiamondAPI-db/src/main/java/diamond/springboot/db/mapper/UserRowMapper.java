package diamond.springboot.db.mapper;

import java.sql.ResultSet;
import java.sql.SQLException;
import org.springframework.jdbc.core.RowMapper;
import diamond.springboot.db.entity.User.User;


public class UserRowMapper implements RowMapper<User> {

public User mapRow(ResultSet rs, int arg1) throws SQLException {
		User u = new User();
		u.setUser_id(rs.getInt("USER_ID"));
		u.setUser_name(rs.getString("USER_NAME"));
		u.setPassword(rs.getString("PASSWORD"));
		u.setFirst_name(rs.getString("FIRST_NAME"));
		u.setLast_name(rs.getString("LAST_NAME"));
		u.setSatus(rs.getString("STATUS"));
		        return u;
}
}
