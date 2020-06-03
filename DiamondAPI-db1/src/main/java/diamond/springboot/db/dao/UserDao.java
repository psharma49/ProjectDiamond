package diamond.springboot.db.dao;

import java.util.List;

import diamond.springboot.db.entity.User.Lob;
import diamond.springboot.db.entity.User.User;

public interface UserDao {

	List<User> checkUser(int userid, String pswd );
	
}
