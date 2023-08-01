package com.eightlow.decalcomanie.auth.service.implement;

import com.eightlow.decalcomanie.auth.entity.UserCredential;
import com.eightlow.decalcomanie.auth.respository.OAuthRepository;
import com.eightlow.decalcomanie.auth.service.IOAuthService;
import com.eightlow.decalcomanie.user.entity.User;
import com.eightlow.decalcomanie.user.repository.UserRepository;
import io.jsonwebtoken.Jwts;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@RequiredArgsConstructor
public class OAuthServiceImpl implements IOAuthService {

    private final OAuthRepository oAuthRepository;
    private final UserRepository userRepository;

    @Value("${jwt.secret}")
    private String secretKey;

    @Override
    @Transactional
    public void register(UserCredential userCredential, User user) {
        oAuthRepository.save(userCredential);
        userRepository.save(user);
    }

    @Override
    @Transactional(readOnly = true)
    public UserCredential isMember(String email) {
        return oAuthRepository.findByEmail(email);
    }

    @Override
    public void signIn(UserCredential userCredential) {
        oAuthRepository.save(userCredential);
    }

    @Override
    public boolean isValidRefreshToken(String refreshToken) {
        try {
            String userId = Jwts.parser().setSigningKey(secretKey).parseClaimsJws(refreshToken)
                    .getBody().get("userId", String.class);

            String checkToken = oAuthRepository.findByUserId(userId).getRefreshToken();

            return refreshToken.equals(checkToken);
        } catch (Exception e) {
           return false;
        }
    }
}