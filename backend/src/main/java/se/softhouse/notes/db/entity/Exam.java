package se.softhouse.notes.db.entity;

import org.hibernate.validator.constraints.Length;
import org.hibernate.validator.constraints.NotEmpty;

public class Exam {
    private int id;

    @NotEmpty
    @Length(min = 2, max = 12, message = "must be between 2 and 12 characters")
    private String title;

    @NotEmpty
    @Length(min = 8, max = 255, message = "must be between 8 and 255 characters")
    private String text;

    public Exam() {
    }

    public Exam(int id, String title, String text) {
        this.id = id;
        this.title = title;
        this.text = text;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getText() {
        return text;
    }

    public void setText(String text) {
        this.text = text;
    }
}
