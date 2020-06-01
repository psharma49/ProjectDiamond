package diamond.springboot.db.mapper;

import java.sql.ResultSet;
import java.sql.SQLException;

import org.springframework.jdbc.core.RowMapper;

import diamond.springboot.db.entity.User.Lob;
import diamond.springboot.db.entity.User.Portfolio;

public class PortfolioRowMapper implements RowMapper<Portfolio> {
	
	@Override
	public Portfolio mapRow(ResultSet rs, int arg1) throws SQLException {
	Portfolio p = new Portfolio();
	p.setPortfolio_id(rs.getInt("PORTFOLIO_ID"));
	p.setPortfolio_name(rs.getString("PORTFOLIO_NAME"));
	p.setPortfolio_status(rs.getString("PORTFOLIO_STATUS"));
	p.setLob_id(rs.getInt("LOB_ID"));
	        return p;
	}


}
