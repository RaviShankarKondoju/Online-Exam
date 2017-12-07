package se.softhouse.notes.db.entity;

import org.hibernate.validator.constraints.NotEmpty;

public class Exam {
    private int id;

    @NotEmpty
    private String questions;

    @NotEmpty
    private String answers;

    public Exam() {
    }

    public Exam(int id, String questions, String answers) {
        this.id = id;
        this.questions = questions;
        this.answers = answers;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getQuestions() {
        return questions;
    }

    public void setQuestions(String questions) {
        this.questions = questions;
    }

    public String getAnswers() {
        return answers;
    }

    public void setAnswers(String answers) {
        this.answers = answers;
    }
}
