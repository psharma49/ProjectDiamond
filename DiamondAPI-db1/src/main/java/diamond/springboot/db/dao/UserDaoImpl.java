package diamond.springboot.db.dao;
import java.sql.PreparedStatement;
import java.sql.SQLException;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import org.springframework.dao.DataAccessException;
import org.springframework.jdbc.core.PreparedStatementCallback;
import org.springframework.jdbc.core.namedparam.MapSqlParameterSource;
import org.springframework.jdbc.core.namedparam.NamedParameterJdbcTemplate;
import org.springframework.jdbc.core.namedparam.SqlParameterSource;
import org.springframework.jdbc.support.GeneratedKeyHolder;
import org.springframework.jdbc.support.KeyHolder;
import org.springframework.stereotype.Repository;

import diamond.springboot.db.entity.User.User;
import diamond.springboot.db.mapper.UserRowMapper;

@Repository
public class UserDaoImpl implements UserDao {
	public UserDaoImpl(NamedParameterJdbcTemplate template) {  
        this.template = template;  
}  
NamedParameterJdbcTemplate template;  
	
@Override
public List<User> checkUser(int userid, String pswd){

	MapSqlParameterSource params = new MapSqlParameterSource();
    params.addValue("USER_ID", userid);
    params.addValue("PASSWORD", pswd);
    return template.query("SELECT * from USERS where USER_ID = :USER_ID and PASSWORD = :PASSWORD", params,  new UserRowMapper());
}
}
