import java.util.Scanner;
public class Main {
    public static boolean isValid(int n) {
        if (n % 2 != 0) return false; // 짝수인지 확인

        int tens = n / 10;   // 십의 자리
        int ones = n % 10;   // 일의 자리
        int sum = tens + ones;

        return sum % 5 == 0; // 합이 5의 배수인지 확인
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        // Please write your code here.
        if (isValid(n)) {
            System.out.println("Yes");
        } else {
            System.out.println("No");
        }

        sc.close();
    
    }
}