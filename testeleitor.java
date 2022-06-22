/*
 * faça uma função que a mesma devolva todos os possíveis números de 4 dígitos,
 * onde cada um seja menor ou igual a <maxDigit>, e a soma dos dígitos de cada
 * número gerado seja 21.
 * Exemplos com maxDigit=6: 3666,4566
 */

/*
 * function teste(maxDigit) {
 * let result = [];
 * for (let i = 0; i <= maxDigit; i++) {
 * for (let j = 0; j <= maxDigit; j++) {
 * for (let k = 0; k <= maxDigit; k++) {
 * for (let l = 0; l <= maxDigit; l++) {
 * if (i + j + k + l == 21) {
 * result.push(i + j + k + l);
 * }
 * }
 * }
 * }
 * }
 * return result;
 * }
 */

//=====================BANCO================================
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

public class Main {
    public static void main(String[] args) {

        DateTimeFormatter dtf = DateTimeFormatter.ofPattern("yyyy/MM/dd HH:mm:ss");
        System.out.println("yyyy/MM/dd HH:mm:ss-> " + dtf.format(LocalDateTime.now()));

        DateTimeFormatter dtf2 = DateTimeFormatter.ofPattern("yy/MM/dd HH:mm:ss");
        System.out.println("yy/MM/dd HH:mm:ss-> " + dtf2.format(LocalDateTime.now()));

        DateTimeFormatter dtf3 = DateTimeFormatter.ofPattern("yyyy/MMMM/dd HH:mm:ss");
        System.out.println("yyyy/MMMM/dd HH:mm:ss-> " + dtf3.format(LocalDateTime.now()));

        DateTimeFormatter dtf4 = DateTimeFormatter.ofPattern("yyyy/MM/dd HH:mm");
        System.out.println("yyyy/MM/dd HH:mm-> " + dtf4.format(LocalDateTime.now()));

        DateTimeFormatter dtf5 = DateTimeFormatter.ofPattern("yyyy/MM/dd hh:mm");
        System.out.println("yyyy/MM/dd hh:mm:ss-> " + dtf5.format(LocalDateTime.now()));
    }
}
