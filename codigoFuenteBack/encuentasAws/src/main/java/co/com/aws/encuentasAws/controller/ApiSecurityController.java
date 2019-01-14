package co.com.aws.encuentasAws.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import co.com.aws.encuentasAws.dto.RespuestaApi;

@RestController
@CrossOrigin
@RequestMapping("api/security")
public class ApiSecurityController {
	
	@PostMapping(value="token", produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<RespuestaApi> verificarToken(){
		
		RespuestaApi respuesta = new RespuestaApi("OK",SecurityContextHolder.getContext().getAuthentication().getPrincipal());
		
		return new ResponseEntity<RespuestaApi>(respuesta, HttpStatus.OK);
				
	}

}
