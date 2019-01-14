package co.com.aws.encuentasAws.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import co.com.aws.encuentasAws.model.Encuesta;


@Repository
public interface IEncuestaDao extends JpaRepository<Encuesta, Integer> {

}
