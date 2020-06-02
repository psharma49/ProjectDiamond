package diamond.springboot.db.mapper;

import java.sql.ResultSet;
import java.sql.SQLException;

import org.springframework.jdbc.core.RowMapper;

import diamond.springboot.db.entity.User.Product;
import diamond.springboot.db.entity.User.ProductAggre;

public class ProductAggreRowMapper implements RowMapper<ProductAggre> {
	@Override
	public ProductAggre mapRow(ResultSet rs, int arg1) throws SQLException {
	ProductAggre pa = new ProductAggre();
	pa.setKpi_name(rs.getString("KPI_NAME"));
	pa.setKpi_subcategory_name(rs.getString("KPI_SUBCATEGORY_NAME"));
	pa.setPriority(rs.getInt("PRIORITY"));
	pa.setUnit_of_measurement(rs.getString("UNIT_OF_MEASUREMENT"));
	pa.setSum(rs.getBigDecimal("SUM"));
	pa.setAvg(rs.getBigDecimal("AVG"));
	        return pa;
	}

}
