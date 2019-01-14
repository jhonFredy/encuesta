package co.com.aws.encuentasAws.controller;


import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import co.com.aws.encuentasAws.dao.IEncuestaDao;
import co.com.aws.encuentasAws.dto.UsuarioDTO;
import co.com.aws.encuentasAws.model.Encuesta;
import co.com.aws.encuentasAws.util.AdapterUtil;

@RestController
@CrossOrigin
public class EstudianteController {
	
	@Autowired
	private IEncuestaDao encuestaDao;
	
	@PostMapping(value="api/v1/encuestas/guardarEncuesta", produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<Void> guardarEncuentas(@RequestBody UsuarioDTO usuario) {
		
		try {
			encuestaDao.save(AdapterUtil.convertirUsuarioEncuesta(usuario));
		} catch (Exception e) {
			
			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
			
		}
		
		
		return ResponseEntity.status(HttpStatus.OK).build();
		
	}
	
	@GetMapping(value="api/v1/encuestas/listarEncuestas", produces = MediaType.APPLICATION_JSON_VALUE)
	@PreAuthorize("hasRole('ROLE_ADMIN')")
	public ResponseEntity<List<UsuarioDTO>> listarEncuestas(){
		
		List<Encuesta> encuestas =encuestaDao.findAll();
		
		return ResponseEntity.ok(AdapterUtil.convertirEncuestaUsuario(encuestas));
		
		
	}

}
