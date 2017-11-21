package se.softhouse.notes.resources;

import se.softhouse.notes.db.entity.Exam;
import se.softhouse.notes.services.ExamService;

import javax.validation.Valid;
import javax.validation.constraints.NotNull;
import javax.ws.rs.Consumes;
import javax.ws.rs.DELETE;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.PUT;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import java.util.List;

@Path("/exam")
@Produces(MediaType.APPLICATION_JSON)
@Consumes(MediaType.APPLICATION_JSON)
public class ExamResource {
    private final ExamService examService;

    public ExamResource(ExamService examService) {
        this.examService = examService;
    }

    @GET
    public List<Exam> getNotes() {
        return examService.getExams();
    }

    @GET
    @Path("/{id}")
    public Exam getExam(@PathParam("id") int id) {
        return examService.getExamBy(id);
    }

    @PUT
    @Path("/{id}")
    public void updateNote(@PathParam("id") int id, @Valid @NotNull Exam exam) {
        exam.setId(id);
        examService.updateExam(exam);
    }

    @POST
    public void createExam(@Valid @NotNull Exam exam) {
        examService.createExam(exam);
    }

    @DELETE
    @Path("/{id}")
    public void deleteNote(@PathParam("id") int id) {
        examService.deleteExamBy(id);
    }
}
