package lab.moviesbackend.services;

import jakarta.servlet.http.HttpSession;
import lab.moviesbackend.models.CartItem;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class CartService {

    private static final String CART_ATTRIBUTE = "cart";

    public List<CartItem> getCart(HttpSession session) {
        List<CartItem> cart = (List<CartItem>) session.getAttribute(CART_ATTRIBUTE);
        if (cart == null) {
            cart = new ArrayList<>();
            session.setAttribute(CART_ATTRIBUTE, cart);
        }
        return cart;
    }

    public void addToCart(Long movieId, String title, int price, HttpSession session) {
        List<CartItem> cart = getCart(session);
        CartItem existingItem = cart.stream()
                .filter(item -> item.getMovieId().equals(movieId))
                .findFirst()
                .orElse(null);
        if (existingItem != null) {
            existingItem.setQuantity(existingItem.getQuantity() + 1);
        } else {
            cart.add(new CartItem(movieId, title, 1, price));
        }
    }

    public void removeFromCart(Long movieId, HttpSession session) {
        List<CartItem> cart = getCart(session);
        for (CartItem item : cart) {
            if (item.getMovieId().equals(movieId)) {
                if (item.getQuantity() > 1) {
                    item.setQuantity(item.getQuantity() - 1);
                } else {
                    cart.remove(item);
                }
                break;
            }
        }
    }

    public void clearCart(HttpSession session) {
        session.removeAttribute(CART_ATTRIBUTE);
    }
}
