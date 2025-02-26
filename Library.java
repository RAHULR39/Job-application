import java.util.*;
import java.time.*;
import java.time.format.*;
public class Library{
	public static void main(String[] args) {
	Scanner sc=new Scanner(System.in);
	List<Map<String,Object>> libDetails = new ArrayList<>();
	System.out.print("Enter number of students:");
	int studCount=sc.nextInt();
	sc.nextLine();
	for(int k=1;k<=studCount;k++) {
		Map<String,Object> info=new LinkedHashMap<>();
		System.out.println("Enter Student "+k+" details....");
		System.out.print("Enter name: ");
		String name=sc.nextLine();
		info.put("StudentName", name);
		System.out.print("Enter rollnum: ");
		int roll=sc.nextInt();
		info.put("RollNum",roll);
		System.out.print("Enter number of books: ");
		int n=sc.nextInt();
		sc.nextLine();
		List<Map<String,String>> books=new ArrayList<>();
		for(int i=1;i<=n;i++) {
			Map<String,String> bookInfo = new HashMap<>();
			System.out.println("Enter book "+i+" details:");
			System.out.print("Enter book ID:");
			String id=sc.nextLine();
			bookInfo.put("book ID",id);
			System.out.print("Enter Author name:");
			String author=sc.nextLine();
			bookInfo.put("Author",author);
			books.add(bookInfo);
		}
		info.put("Books", books);
		LocalDate issueDate = LocalDate.now();
		DateTimeFormatter formDate= DateTimeFormatter.ofPattern("dd/MM/yyyy");
		info.put("Issue Date", issueDate.format(formDate));
		LocalDate dueDate=issueDate.plusDays(16);
		info.put("Due Date", dueDate.format(formDate));
		libDetails.add(info);
		}
		System.out.println(libDetails);
		sc.close();
	}
}
