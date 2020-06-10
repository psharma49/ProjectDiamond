package diamond.springboot.db.mapper;
import java.sql.ResultSet;
import java.sql.SQLException;

import org.springframework.jdbc.core.RowMapper;


import diamond.springboot.db.entity.User.ProductsGraph;

public class ProductsGraphRowMapper implements RowMapper<ProductsGraph> {
	@Override
	public ProductsGraph mapRow(ResultSet rs, int arg1) throws SQLException {
		ProductsGraph pg = new ProductsGraph();
	pg.setProduct_name(rs.getString("PRODUCT_NAME"));
	pg.setUnit_of_measurement(rs.getString("UNIT_OF_MEASUREMENT"));
	pg.setTimeline(rs.getString("TIMELINE"));
	pg.setSum(rs.getBigDecimal("SUM"));
	pg.setAvg(rs.getBigDecimal("AVG"));
	        return pg;
	}	

}
