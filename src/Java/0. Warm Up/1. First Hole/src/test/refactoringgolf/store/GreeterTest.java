package refactoringgolf.store;

import org.junit.Test;

import static org.junit.Assert.assertEquals;


public class GreeterTest {

	@Test
	public void CanGreet(){
		refactoringgolf.store.Greeter greeter=new refactoringgolf.store.Greeter();
		String greet=greeter.greet();
		assertEquals("Hello World",greet);
	}
}
