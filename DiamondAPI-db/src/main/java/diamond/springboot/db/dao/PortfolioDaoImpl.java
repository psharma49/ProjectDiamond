package diamond.springboot.db.dao;

import java.util.List;

import org.springframework.jdbc.core.namedparam.MapSqlParameterSource;
import org.springframework.jdbc.core.namedparam.NamedParameterJdbcTemplate;
import org.springframework.stereotype.Repository;

import diamond.springboot.db.entity.User.Lob;
import diamond.springboot.db.entity.User.Portfolio;
import diamond.springboot.db.mapper.LobRowMapper;
import diamond.springboot.db.mapper.PortfolioRowMapper;
import diamond.springboot.db.mapper.UserRowMapper;
@Repository
public class PortfolioDaoImpl {
	public PortfolioDaoImpl(NamedParameterJdbcTemplate template) {  
        this.template = template;  
}  
NamedParameterJdbcTemplate template;  

public List<Portfolio> findAllPortfolio(int lobid) {

	MapSqlParameterSource params = new MapSqlParameterSource();
    params.addValue("LOB_ID", lobid);
   
    return template.query("SELECT * from PORTFOLIO where LOB_ID = :LOB_ID ", params,  new PortfolioRowMapper());
}
}
