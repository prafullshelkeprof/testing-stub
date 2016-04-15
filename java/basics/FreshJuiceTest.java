class FreshJuice {

   enum FreshJuiceSize{ SMALL, MEDIUM, LARGE , DUM}
   FreshJuiceSize size;
}

public class FreshJuiceTest {

   public static void main(String args[]){
      FreshJuice juice = new FreshJuice();
      juice.size = FreshJuice.FreshJuiceSize.DUM ;
      System.out.println("Size: " + juice.size);
   }
}