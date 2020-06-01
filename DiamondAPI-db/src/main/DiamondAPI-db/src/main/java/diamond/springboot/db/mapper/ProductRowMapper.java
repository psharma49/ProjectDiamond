package diamond.springboot.db.mapper;
import diamond.springboot.db.entity.User.Portfolio;
import  diamond.springboot.db.entity.User.Product;

import java.sql.ResultSet;
import java.sql.SQLException;

import org.springframework.jdbc.core.RowMapper;
public class ProductRowMapper implements RowMapper<Product> {
	@Override
	public Product mapRow(ResultSet rs, int arg1) throws SQLException {
	Product pro = new Product();
	pro.setProduct_id(rs.getInt("PRODUCT_ID"));
	pro.setProduct_name(rs.getString("PRODUCT_NAME"));
	pro.setProduct_status(rs.getString("PRODUCT_STATUS"));
	pro.setPortfolio_id(rs.getInt("PORTFOLIO_ID"));
	pro.setLob_id(rs.getInt("LOB_ID"));
	        return pro;
	}


}
