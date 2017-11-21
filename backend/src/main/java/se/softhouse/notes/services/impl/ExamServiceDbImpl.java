package se.softhouse.notes.services.impl;

import se.softhouse.notes.db.ExamDAO;
import se.softhouse.notes.db.entity.Exam;
import se.softhouse.notes.exceptions.NoteExceptions;
import se.softhouse.notes.services.ExamService;

import java.util.List;

public class ExamServiceDbImpl implements ExamService {
    private final ExamDAO examDAO;

    public ExamServiceDbImpl(ExamDAO examDAO) {
        this.examDAO = examDAO;
    }

    @Override
    public List<Exam> getExams() {
        return examDAO.selectAll();
    }

    @Override
    public void createExam(Exam exam) {
        examDAO.insert(exam);
    }

    @Override
    public Exam getExamBy(int id) {
        return examDAO.get(id).orElseThrow(NoteExceptions.NOT_FOUND);
    }

    @Override
    public void updateExam(Exam exam) {
        examDAO.update(exam);
    }

    @Override
    public void deleteExamBy(int id) {
        examDAO.delete(id);
    }
}
