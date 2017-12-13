// 
// Class: <%= className %>
// 
// import java.util.ArrayList;
// import java.util.Scanner;

class <%= className %>{
	public <%= className %>(){
		System.out.println("<%= className %>");
	}<% if(!includeTestClass) { %>
	public static void main(String[] args){
		<%= className %> a = new <%= className %>();
	}
	<% } %>
}
<% if(includeTestClass) { %>
public class <%= className %>Test{
	public static void main(String[] args){
		<%= className %> a = new <%= className %>();
	}
}
<% } %>