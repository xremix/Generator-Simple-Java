// <%= className %>
// import java.util.ArrayList;
// import java.util.Scanner;

class <%= className %>{
	public <%= className %>(){
		System.out.println("<%= className %>");
	}
	<% if(!includeExercise) { %>
	public static void main(String[] args){
		<%= className %> a = new <%= className %>();
	}
	<% } %>
}
<% if(includeExercise) { %>
public class <%= className %>Excercise{
	public static void main(String[] args){
		<%= className %> a = new <%= className %>();
	}
}
<% } %>