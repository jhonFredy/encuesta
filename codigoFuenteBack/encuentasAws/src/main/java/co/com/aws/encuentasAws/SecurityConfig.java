package co.com.aws.encuentasAws;

import java.util.Arrays;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.method.configuration.EnableGlobalMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;

import com.auth0.jwt.JWT;
import com.auth0.jwt.JWTVerifier;
import com.auth0.jwt.algorithms.Algorithm;
import com.auth0.jwt.interfaces.RSAKeyProvider;

import co.com.aws.encuentasAws.security.AwsCognitoJwtAuthenticationFilter;
import co.com.aws.encuentasAws.security.AwsCognitoRSAKeyProvider;

@Configuration
@EnableWebSecurity
@EnableGlobalMethodSecurity(prePostEnabled = true)
public class SecurityConfig extends WebSecurityConfigurerAdapter {
	
	@Value("${userPoolId}")
	private String awsUserPoolId;
	
	@Autowired
	AwsCognitoJwtAuthenticationFilter awsCognitoJwtAuthenticationFilter;
	
	@Bean
	public JWTVerifier beanJWTVerifier() throws Exception {
		RSAKeyProvider keyProvider = new AwsCognitoRSAKeyProvider("us-east-1",awsUserPoolId);
		Algorithm algoritmo = Algorithm.RSA256(keyProvider);
		JWTVerifier jwtVerifier = JWT.require(algoritmo).build();
		return jwtVerifier;
	}

	@Override
	protected void configure(HttpSecurity http) throws Exception {

		http.headers().cacheControl();
		http.sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS).and()
			.cors().configurationSource(corsConfigurationSource()).and()
			.csrf().disable()
			.authorizeRequests()
				.antMatchers("/api/**").authenticated().and().addFilterBefore(awsCognitoJwtAuthenticationFilter, UsernamePasswordAuthenticationFilter.class);
		System.out.println("ejecutando el filtro");
	}
	
	@Bean
	public CorsConfigurationSource corsConfigurationSource() {
		CorsConfiguration configuration = new CorsConfiguration();
	    configuration.addAllowedOrigin("*");
	    configuration.addAllowedHeader("*");
	    configuration.setAllowedMethods(Arrays.asList("GET","POST","OPTIONS"));
	    UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
	    source.registerCorsConfiguration("/**", configuration);
	    return source;
	}
}