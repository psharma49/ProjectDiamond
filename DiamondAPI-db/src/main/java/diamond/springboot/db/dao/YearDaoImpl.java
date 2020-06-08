package diamond.springboot.db.dao;

import java.util.List;

import org.springframework.jdbc.core.namedparam.MapSqlParameterSource;
import org.springframework.jdbc.core.namedparam.NamedParameterJdbcTemplate;
import org.springframework.stereotype.Repository;

import diamond.springboot.db.entity.User.Year;
import diamond.springboot.db.mapper.YearRowMapper;


@Repository
public class YearDaoImpl {

	public YearDaoImpl(NamedParameterJdbcTemplate template) {  
        this.template = template;  
}  
NamedParameterJdbcTemplate template;  

public List<Year> findAllYear() {
	
   
    return template.query("SELECT * from YEAR  ", new YearRowMapper());
}
}
