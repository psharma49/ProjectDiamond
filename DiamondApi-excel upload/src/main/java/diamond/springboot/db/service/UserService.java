package diamond.springboot.db.service;

import java.util.HashMap;
import java.util.LinkedHashMap;
import java.util.List;
import java.io.IOException;
import java.util.ArrayList;

import javax.annotation.Resource;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import diamond.springboot.db.dao.AvgDaoImpl;
import diamond.springboot.db.dao.DisplayDaoImpl;
import diamond.springboot.db.dao.ExcelUploadDaoImpl;
import diamond.springboot.db.dao.FeatureDaoImpl;
import diamond.springboot.db.dao.FeatureqDaoImpl;
import diamond.springboot.db.dao.LobDaoImpl;
import diamond.springboot.db.dao.PortfolioDaoImpl;
import diamond.springboot.db.dao.PortfolioIndiDaoImpl;
import diamond.springboot.db.dao.ProductAggreDaoImpl;
import diamond.springboot.db.dao.ProductDaoImpl;
import diamond.springboot.db.dao.ProductsGraphDaoImpl;
import diamond.springboot.db.dao.UserDaoImpl;
import diamond.springboot.db.dao.YearDaoImpl;
import diamond.springboot.db.entity.User.Avg;
import diamond.springboot.db.entity.User.Display;
import diamond.springboot.db.entity.User.Feature;
import diamond.springboot.db.entity.User.Featureq;
import diamond.springboot.db.entity.User.Lob;
import diamond.springboot.db.entity.User.Portfolio;
import diamond.springboot.db.entity.User.PortfolioIndi;
import diamond.springboot.db.entity.User.Product;
import diamond.springboot.db.entity.User.ProductAggre;
import diamond.springboot.db.entity.User.ProductsGraph;
import diamond.springboot.db.entity.User.ResponseMessage;
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
	
	@Autowired
	private DisplayDaoImpl displayDaoImpl;
	
	@Autowired
	private PortfolioIndiDaoImpl portfolioIndiDaoImpl;
	
	@Autowired
	private ProductsGraphDaoImpl productsGraphDaoImpl;
	
	@Autowired
	private ExcelUploadDaoImpl excelUploadDaoImpl;
	
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

	public List<Display> displayView(int lobid, int portfolioid, int productid,int yearid, String quarterid) {
		  return displayDaoImpl.displayView(lobid, portfolioid, productid,  yearid, quarterid);
		}
	public List<PortfolioIndi> indiPortfolioView(int lobid, int portfolioid, int yearid, String quarterid) {
		  return portfolioIndiDaoImpl.indiPortfolioView(lobid, portfolioid, yearid, quarterid);
		}
	public List<ProductsGraph> portfolioGraphView(int lobid, int portfolioid, String display_name, int yearid, String quarterid) {
		  return productsGraphDaoImpl.portfolioGraphView(lobid, portfolioid, display_name, yearid, quarterid);
		}
	public ResponseEntity<ResponseMessage> readExcel(MultipartFile file) throws IOException{
		String TYPE = "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet";
		if (TYPE.equals(file.getContentType())) {
		System.out.println("file uploading");
		excelUploadDaoImpl.readExcel(file);
		  String message = "";

		message = "Uploaded the file successfully: " + file.getOriginalFilename();
		     return ResponseEntity.status(HttpStatus.OK).body(new ResponseMessage(message));
		}
		else {
		System.out.println("file not uploading");
		String message1 = "Please upload an excel file!";
		   return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(new ResponseMessage(message1));
		}
		 }
	  
}
