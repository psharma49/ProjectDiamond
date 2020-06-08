package diamond.springboot.db.dao;

import java.util.List;

import org.springframework.jdbc.core.namedparam.MapSqlParameterSource;
import org.springframework.jdbc.core.namedparam.NamedParameterJdbcTemplate;
import org.springframework.stereotype.Repository;

import diamond.springboot.db.entity.User.Lob;
import diamond.springboot.db.entity.User.User;
import diamond.springboot.db.mapper.LobRowMapper;
import diamond.springboot.db.mapper.UserRowMapper;

@Repository
public class LobDaoImpl {
	
	public LobDaoImpl(NamedParameterJdbcTemplate template) {  
        this.template = template;  
}  
NamedParameterJdbcTemplate template;  


public List<Lob> findAllLob(){

	
    return template.query("SELECT * from LOB",  new LobRowMapper());
}
}
