<<<<<<< HEAD:DiamondAPI-db1/src/main/java/diamond/springboot/db/controller/UserController.java
package diamond.springboot.db.controller;

import java.util.List;
import javax.annotation.Resource;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import diamond.springboot.db.entity.User.Lob;
import diamond.springboot.db.entity.User.Portfolio;
import diamond.springboot.db.entity.User.Product;
import diamond.springboot.db.entity.User.ProductAggre;
import diamond.springboot.db.entity.User.User;
import diamond.springboot.db.service.UserService;

@RestController
public class UserController {
	
@Autowired
 private UserService userService;

@RequestMapping("/users/{userid}/{pswd}")

public List<User> checkUser(@PathVariable int userid, @PathVariable String pswd) {	
	return userService.checkUser(userid,pswd);
}	
 
  @RequestMapping("/viewdash_board/lob")
  public List<Lob> findAllLob() {	
	return userService.findAllLob();
}	

@RequestMapping("/viewdash_board/portfolio/{lobid}")
  public List<Portfolio> findAllPortfolio(@PathVariable int lobid) {	
	return userService.findAllPortfolio(lobid);
}	

@RequestMapping("/viewdash_board/product/{portfolioid}")
  public List<Product> findAllProduct(@PathVariable int portfolioid) {	
	return userService.findAllProduct(portfolioid);
}	

@RequestMapping("/viewdash_board/product_aggregate_view/{lobid}/{portfolioid}/{productid}")
public List<ProductAggre> bvProductAggre(@PathVariable int lobid, @PathVariable int portfolioid, @PathVariable int productid ){
	return userService.bvProductAggre(lobid, portfolioid, productid);
}
}
=======
package diamond.springboot.db.controller;

import java.util.HashMap;
import java.util.LinkedHashMap;
import java.util.List;
import javax.annotation.Resource;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import diamond.springboot.db.entity.User.Feature;
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

public List<User> checkUser(@PathVariable int userid, @PathVariable String pswd) {	
	return userService.checkUser(userid,pswd);
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

@RequestMapping("/viewdash_board/product_aggregate_view/{lobid}/{portfolioid}/{productid}/yearid")
public LinkedHashMap<String, List<ProductAggre>> bvProductAggre(@PathVariable int lobid, @PathVariable int portfolioid, @PathVariable int productid ){
	return userService.bvProductAggre(lobid, portfolioid, productid);
}

@RequestMapping("/viewdash_board/product_feature_view/{lobid}/{portfolioid}/{productid}/yearid")
public LinkedHashMap<String, List<Feature>> featureLevelView(@PathVariable int lobid, @PathVariable int portfolioid, @PathVariable int productid){
	return userService.featureLevelView(lobid, portfolioid, productid);
	
}


}
>>>>>>> e31035e7cec9f951d72e301ce3a0666c4c939688:DiamondAPI-db/src/main/java/diamond/springboot/db/controller/UserController.java
