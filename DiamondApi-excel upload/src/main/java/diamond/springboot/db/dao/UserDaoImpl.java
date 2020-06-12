package diamond.springboot.db.dao;
import java.sql.PreparedStatement;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import org.springframework.dao.DataAccessException;
import org.springframework.jdbc.core.PreparedStatementCallback;
import org.springframework.jdbc.core.namedparam.MapSqlParameterSource;
import org.springframework.jdbc.core.namedparam.NamedParameterJdbcTemplate;
import org.springframework.jdbc.core.namedparam.SqlParameterSource;
import org.springframework.jdbc.support.GeneratedKeyHolder;
import org.springframework.jdbc.support.KeyHolder;
import org.springframework.stereotype.Repository;
 import java.security.KeyPair;
	import java.security.KeyPairGenerator;
import java.security.NoSuchAlgorithmException;
import java.security.PublicKey;
import java.security.Signature;

	import javax.crypto.Cipher;
	

import diamond.springboot.db.entity.User.User;
import diamond.springboot.db.mapper.UserRowMapper;

@Repository
public class UserDaoImpl implements UserDao {
	public UserDaoImpl(NamedParameterJdbcTemplate template) {  
        this.template = template;  
}  
NamedParameterJdbcTemplate template;  
	
@Override
   public boolean checkUser(int userid, String pswd){
/*
	 //Creating a Signature object
    Signature sign = Signature.getInstance("SHA256withRSA");
	  
	      //Creating KeyPair generator object
	      KeyPairGenerator keyPairGen = KeyPairGenerator.getInstance("RSA");
	      
	      //Initializing the key pair generator
	      keyPairGen.initialize(2048);
	      
	      //Generate the pair of keys
	      KeyPair pair = keyPairGen.generateKeyPair();   
	      
	      //Getting the public key from the key pair
	      PublicKey publicKey = pair.getPublic();  

	      //Creating a Cipher object
	      Cipher cipher = Cipher.getInstance("RSA/ECB/PKCS1Padding");

	      //Initializing a Cipher object
	      cipher.init(Cipher.ENCRYPT_MODE, publicKey);
		  
	      //Add data to the cipher
	      byte[] input = pswd.getBytes("UTF8");	  
	      cipher.update(input);
		  
	      //encrypting the data
	      byte[] cipherText = cipher.doFinal();	
	   String pswd1 =  new String(cipherText,"UTF8");
	      System.out.println(new String(cipherText,"UTF8"));

	      //Initializing the same cipher for decryption
	      cipher.init(Cipher.DECRYPT_MODE, pair.getPrivate());
	      
	      //Decrypting the text
	      byte[] decipheredText = cipher.doFinal(cipherText);
	      System.out.println(new String(decipheredText));
	   
	
	
	*/
	
	MapSqlParameterSource params = new MapSqlParameterSource();
    params.addValue("USER_ID", userid);
    params.addValue("PASSWORD", pswd);
    List<User> U = new ArrayList<User>();
    boolean b = false;
    U = template.query("SELECT * from USERS where USER_ID = :USER_ID and PASSWORD = crypt(:PASSWORD, password)", params,  new UserRowMapper());
    if(U.isEmpty()) {
    	b = false;
    }
    else {
    	b = true;
    }
    System.out.println(b);
    return b;
  //  return template.query("SELECT * from USERS where USER_ID = :USER_ID and PASSWORD = :PASSWORD", params,  new UserRowMapper());
}

}
