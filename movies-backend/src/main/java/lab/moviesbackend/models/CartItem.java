package lab.moviesbackend.models;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
public class CartItem {
    private Long movieId;
    private String title;
    private int quantity;
    private int price;
}
