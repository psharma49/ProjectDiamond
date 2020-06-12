package diamond.springboot.db.entity.User;

import java.math.BigDecimal;

public class Avg {
	
	public Avg() {
		
	}
	public Avg(BigDecimal ttv, BigDecimal vel) {
		super();
		this.ttv = ttv;
		this.vel = vel;
	}
	public BigDecimal getTtv() {
		return ttv;
	}
	public void setTtv(BigDecimal ttv) {
		this.ttv = ttv;
	}
	public BigDecimal getVel() {
		return vel;
	}
	public void setVel(BigDecimal vel) {
		this.vel = vel;
	}
	private BigDecimal ttv;
	private BigDecimal vel;
	

}
