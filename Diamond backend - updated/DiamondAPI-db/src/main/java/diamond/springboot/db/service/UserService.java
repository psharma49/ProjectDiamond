package diamond.springboot.db.service;

import java.util.HashMap;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.ArrayList;

import javax.annotation.Resource;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import diamond.springboot.db.dao.AvgDaoImpl;
import diamond.springboot.db.dao.FeatureDaoImpl;
import diamond.springboot.db.dao.FeatureqDaoImpl;
import diamond.springboot.db.dao.LobDaoImpl;
import diamond.springboot.db.dao.PortfolioDaoImpl;
import diamond.springboot.db.dao.ProductAggreDaoImpl;
import diamond.springboot.db.dao.ProductDaoImpl;
import diamond.springboot.db.dao.UserDaoImpl;
import diamond.springboot.db.dao.YearDaoImpl;
import diamond.springboot.db.entity.User.Avg;
import diamond.springboot.db.entity.User.Feature;
import diamond.springboot.db.entity.User.Featureq;
import diamond.springboot.db.entity.User.Lob;
import diamond.springboot.db.entity.User.Portfolio;
import diamond.springboot.db.entity.User.Product;
import diamond.springboot.db.entity.User.ProductAggre;
import diamond.springboot.db.entity.User.User;
import diamond.springboot.db.entity.User.Year;

@Service
public class UserService {
	@Autowired
	private UserDaoImpl userDaoImpl;
	@Autowired
	private YearDaoImpl yearDaoImpl;
	@Autowired
	private LobDaoImpl lobDaoImpl;
	@Autowired
	private PortfolioDaoImpl portfolioDaoImpl;
	@Autowired
	private ProductDaoImpl productDaoImpl;
	
	@Autowired
	private ProductAggreDaoImpl productAggreDaoImpl; 
	
	@Autowired
	private FeatureDaoImpl featureDaoImpl;
	
	@Autowired
	private AvgDaoImpl avgDaoImpl;
	
	@Autowired
	private FeatureqDaoImpl featureqDaoImpl;
	
	public boolean checkUser(int userid, String pswd){
		return userDaoImpl.checkUser(userid, pswd);
	}

	public List<Year> findAllYear(){
		return yearDaoImpl.findAllYear();
	}
	public List<Lob> findAllLob() {	
		return lobDaoImpl.findAllLob();
	}
	public List<Portfolio> findAllPortfolio(int lobid) {	
		return portfolioDaoImpl.findAllPortfolio(lobid);
	}	
		
	public List<Product> findAllProduct(int portfolioid) {	
		return productDaoImpl.findAllProduct(portfolioid);
	}
	
	public List<ProductAggre> bvProductAggre(int lobid, int portfolioid, int productid, int yearid, String quarterid){
		return productAggreDaoImpl.bvProductAggre(lobid, portfolioid, productid, yearid, quarterid);
	}

	public LinkedHashMap<String, List<Feature>> featureLevelView(int lobid, int portfolioid, int productid,int yearid, String quarterid) {
	  return featureDaoImpl.featureLevelView(lobid, portfolioid, productid,  yearid, quarterid);
	}
	
	
	public List<Avg> findAvg(int lobid, int portfolioid, int productid, int yearid, String quarterid){
		return avgDaoImpl.findAvg(lobid, portfolioid, productid,  yearid, quarterid);
	}
	
	public List<Featureq> featureqLevelView(int lobid, int portfolioid, int productid,int yearid, String quarterid) {
		  return featureqDaoImpl.featureqLevelView(lobid, portfolioid, productid,  yearid, quarterid);
		}

}
