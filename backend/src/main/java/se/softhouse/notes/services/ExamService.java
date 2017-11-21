package se.softhouse.notes.services;

import se.softhouse.notes.db.entity.Exam;

import java.util.List;

public interface ExamService {
    List<Exam> getExams();

    void createExam(Exam exam);

    Exam getExamBy(int id);

    void updateExam(Exam exam);

    void deleteExamBy(int id);
}
