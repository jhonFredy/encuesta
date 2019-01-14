package co.com.aws.encuentasAws.util;

import java.util.ArrayList;
import java.util.List;

import co.com.aws.encuentasAws.dto.UsuarioDTO;
import co.com.aws.encuentasAws.model.Encuesta;

public class AdapterUtil {
	
	public static List<UsuarioDTO> convertirEncuestaUsuario(List<Encuesta> encuestas){
		
		ArrayList<UsuarioDTO> usuarios = new ArrayList<>();
		
		for (Encuesta encuesta : encuestas) {
			
			UsuarioDTO usuario = new UsuarioDTO();
			usuario.setNombres(encuesta.getNombres());
			usuario.setApellidos(encuesta.getApellidos());
			usuario.setEdad(encuesta.getEdad());
			usuario.setLenguaje(encuesta.getLenguaje());
			
			usuarios.add(usuario);
			
		}
		
		return usuarios;
		
	}
	
	
	public static Encuesta convertirUsuarioEncuesta(UsuarioDTO usuario) {
		
		
		Encuesta encuesta = new Encuesta();
		encuesta.setNombres(usuario.getNombres());
		encuesta.setApellidos(usuario.getApellidos());
		encuesta.setEdad(usuario.getEdad());
		encuesta.setLenguaje(usuario.getLenguaje());
		
		return encuesta;
		
		
	}
	
	
	

}
