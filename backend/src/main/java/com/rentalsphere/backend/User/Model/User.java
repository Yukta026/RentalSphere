package com.rentalsphere.backend.User.Model;

import com.rentalsphere.backend.Role.Model.Role;
import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Pattern;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.*;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Table(name = "Users")
@Entity(name = "Users")
public class User implements UserDetails {
    @Id@GeneratedValue(strategy = GenerationType.UUID)
    private UUID id;
    @NotBlank(message = "firstname cannot be blank.")
    @Pattern(regexp = "[a-zA-Z]+", message = "Only characters are allowed.")
    private String firstName;
    @NotBlank(message = "lastname cannot be blank.")
    @Pattern(regexp = "[a-zA-Z]+", message = "Only characters are allowed.")
    private String lastName;
    @Column(unique = true)
    @NotBlank(message = "email cannot be blank.")
    @Pattern(regexp = "^(?=.{1,64}@)[A-Za-z0-9_-]+(\\.[A-Za-z0-9_-]+)*@[^-][A-Za-z0-9-]+(\\.[A-Za-z0-9-]+)*(\\.[A-Za-z]{2,})$", message = "Valid email required.")
    private String email;
    @NotBlank(message = "password cannot be blank.")
    private String password;
    @ManyToMany(fetch = FetchType.EAGER)
    @JoinTable(name = "user_roles", joinColumns = @JoinColumn(name = "user_id", referencedColumnName = "id"),inverseJoinColumns = @JoinColumn(name = "role_id", referencedColumnName = "id"))
    private List<Role> roles;

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        List<SimpleGrantedAuthority> authority = new ArrayList<>();
        this.getRoles().forEach(role->{
            authority.add(new SimpleGrantedAuthority("ROLE_" + role.getName()));
        });
        return authority;
    }

    @Override
    public String getPassword() {
        return this.password;
    }

    @Override
    public String getUsername() {
        return this.email;
    }

    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    public boolean isEnabled() {
        return true;
    }
}
