import java.util.Scanner;

public class Main {
    public static int gcd(int a, int b) {
        if(b == 0)
            return a;
        else {
            return gcd(b, a % b);
        }

    }
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        int m = sc.nextInt();
        // Please write your code here.
        System.out.print(gcd(n,m));
    }
}