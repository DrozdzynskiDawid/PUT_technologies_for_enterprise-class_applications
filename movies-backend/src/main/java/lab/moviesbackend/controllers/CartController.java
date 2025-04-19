package lab.moviesbackend.controllers;

import jakarta.servlet.http.HttpSession;
import lab.moviesbackend.models.CartItem;
import lab.moviesbackend.services.CartService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/cart")
public class CartController {

    @Autowired
    CartService cartService;

    @PostMapping("/add")
    public void addToCart(@RequestParam Long movieId, @RequestParam String title, @RequestParam int price, HttpSession session) {
        cartService.addToCart(movieId, title, price, session);
        System.out.println("Cart from session: " + cartService.getCart(session));
    }

    @GetMapping("/get")
    List<CartItem> getCart(HttpSession session) {
        System.out.println("Cart from session: " + cartService.getCart(session));
        return cartService.getCart(session);
    }

    @DeleteMapping("/clear")
    void clearCart(HttpSession session) {
        cartService.clearCart(session);
        System.out.println("Cart from session: " + cartService.getCart(session));
    }

    @PostMapping("/delete")
    void deleteItem(@RequestParam Long movieId, HttpSession session) {
        cartService.removeFromCart(movieId, session);
        System.out.println("Cart from session: " + cartService.getCart(session));
    }

}
