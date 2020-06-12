package diamond.springboot.db.dao;

import java.util.List;

import org.springframework.jdbc.core.namedparam.MapSqlParameterSource;
import org.springframework.jdbc.core.namedparam.NamedParameterJdbcTemplate;
import org.springframework.stereotype.Repository;

import diamond.springboot.db.entity.User.Portfolio;
import diamond.springboot.db.entity.User.Product;
import diamond.springboot.db.mapper.PortfolioRowMapper;
import diamond.springboot.db.mapper.ProductRowMapper;
import diamond.springboot.db.mapper.UserRowMapper;
@Repository
public class ProductDaoImpl {
	
	public ProductDaoImpl(NamedParameterJdbcTemplate template) {  
        this.template = template;  
}  
NamedParameterJdbcTemplate template;  

public List<Product> findAllProduct(int portfolioid) {
	MapSqlParameterSource params = new MapSqlParameterSource();
    params.addValue("PORTFOLIO_ID", portfolioid);
   
    return template.query("SELECT * from PRODUCT_MASTER  where PORTFOLIO_ID = :PORTFOLIO_ID ", params,  new ProductRowMapper());
}

}
