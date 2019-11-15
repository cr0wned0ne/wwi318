package wwi318;

import java.io.IOException;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.Random;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

public class MessageServlet extends HttpServlet {

	private static final int MAX_MESSAGES = 100;

	@Override
	protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		String message = req.getParameter("message");
		if (message != null) {
			if (message.equals("error") || message.length() > 100) {
				resp.setStatus(resp.SC_SERVICE_UNAVAILABLE);
			} else {
				System.out.println("message: " + message);
				String response = saveAndReplyFromDatabase(message);
				if (message != null) {
					resp.setStatus(resp.SC_OK);
					resp.getWriter().write(message);
					resp.getWriter().flush();
					resp.getWriter().close();
				} else {
					resp.setStatus(resp.SC_INTERNAL_SERVER_ERROR);
				}
			}
		}
	}

	private String saveAndReplyFromDatabase(String message) {
		// Step 1: Allocate a database Connection object
		try {

			Connection conn = DriverManager.getConnection("jdbc:mysql://localhost:3306/messages_db?useSSL=false",
					"root", "start123");

			// Step 2: Allocate a Statement object within the Connection
			Statement stmt = conn.createStatement();

			// Step 3: Execute SQL queries
			String findExistingMessage = "select * from messages where message = '" + message + "'";
			ResultSet existingResult = stmt.executeQuery(findExistingMessage);
			boolean existing = existingResult.first();
			existingResult.close();
			
			// More queries...
			String messages = "select * from messages";
			ResultSet countResult = stmt.executeQuery(messages);
			countResult.last();
			int currentCount = countResult.getRow();
			
			if (!existing && currentCount <= MAX_MESSAGES - 1) {
				stmt.executeUpdate("insert into messages(message) values('" + message + "')");
			}
			int random = generateRandom(currentCount);
			String getRandomMessage = "select * from messages";
			ResultSet randomReply = stmt.executeQuery(getRandomMessage);
			if(randomReply.relative(random)) {
				String replyMessage = randomReply.getString("message");
				randomReply.close();
				return replyMessage;
			};

		} catch (SQLException e) {
			e.printStackTrace();
		}
		return null;

	}

	private int generateRandom(int currentCount) {
		if (currentCount == 0 || currentCount == 1) {
			return 1;
		}
		Random r = new Random();
		int low = 1;
		int high = currentCount;
		int result = r.nextInt(high - low) + low;
		return result;
	}
}
