package diamond.springboot.db.controller;

import java.util.HashMap;
import java.util.LinkedHashMap;
import java.util.List;
import javax.annotation.Resource;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import diamond.springboot.db.entity.User.Avg;
import diamond.springboot.db.entity.User.Feature;
import diamond.springboot.db.entity.User.Featureq;
import diamond.springboot.db.entity.User.Lob;
import diamond.springboot.db.entity.User.Portfolio;
import diamond.springboot.db.entity.User.Product;
import diamond.springboot.db.entity.User.ProductAggre;
import diamond.springboot.db.entity.User.User;
import diamond.springboot.db.entity.User.Year;
import diamond.springboot.db.service.UserService;

@RestController
public class UserController {
	
@Autowired
 private UserService userService;

@RequestMapping("/users/{userid}/{pswd}")

public ResponseEntity<Void>checkUser(@PathVariable int userid, @PathVariable String pswd) {
	 if(userService.checkUser(userid,pswd)==true)
	 {
	return ResponseEntity.status(HttpStatus.OK).build();
	 }
	 else
	 {
	return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
	 }
	}
 
@RequestMapping("/viewdash_board/year")
public List<Year> findAllYear(){
	return userService.findAllYear();
}

  @RequestMapping("/viewdash_board/lob/yearid")
  public List<Lob> findAllLob() {	
	return userService.findAllLob();
}	

@RequestMapping("/viewdash_board/portfolio/{lobid}/yearid")
  public List<Portfolio> findAllPortfolio(@PathVariable int lobid) {	
	return userService.findAllPortfolio(lobid);
}	

@RequestMapping("/viewdash_board/product/{portfolioid}/yearid")
  public List<Product> findAllProduct(@PathVariable int portfolioid) {	
	return userService.findAllProduct(portfolioid);
}	

@RequestMapping("/viewdash_board/product_aggregate_view/{lobid}/{portfolioid}/{productid}/{yearid}/{quarterid}")
public List<ProductAggre> bvProductAggre(@PathVariable int lobid, @PathVariable int portfolioid, @PathVariable int productid, @PathVariable int yearid, @PathVariable String quarterid ){
	return userService.bvProductAggre(lobid, portfolioid, productid, yearid, quarterid);
}

@RequestMapping("/viewdash_board/product_feature_view/{lobid}/{portfolioid}/{productid}/{yearid}/{quarterid}")
public LinkedHashMap<String, List<Feature>> featureLevelView(@PathVariable int lobid, @PathVariable int portfolioid, @PathVariable int productid, @PathVariable int yearid, @PathVariable String quarterid){
	return userService.featureLevelView(lobid, portfolioid, productid, yearid, quarterid);
	
}


@RequestMapping("/viewdash_board/product_avg_ttv_view/{lobid}/{portfolioid}/{productid}/{yearid}/{quarterid}")
 public List<Avg> findAvg(@PathVariable int lobid, @PathVariable int portfolioid, @PathVariable int productid,@PathVariable int yearid, @PathVariable String quarterid ){
  return userService.findAvg(lobid, portfolioid,productid, yearid, quarterid);
}

@RequestMapping("/viewdash_board/product_featureq_view/{lobid}/{portfolioid}/{productid}/{yearid}/{quarterid}")
public List<Featureq> featureqLevelView(@PathVariable int lobid, @PathVariable int portfolioid, @PathVariable int productid, @PathVariable int yearid, @PathVariable String quarterid){
	return userService.featureqLevelView(lobid, portfolioid, productid, yearid, quarterid);
	
}
}
