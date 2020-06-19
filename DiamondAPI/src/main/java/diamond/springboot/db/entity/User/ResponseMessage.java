package diamond.springboot.db.entity.User;

public class ResponseMessage {
	public ResponseMessage() {
		
	}

	public ResponseMessage(String message) {
		super();
		this.message = message;
	}

	private String message;

	public String getMessage() {
		return message;
	}

	public void setMessage(String message) {
		this.message = message;
	}
	

}
