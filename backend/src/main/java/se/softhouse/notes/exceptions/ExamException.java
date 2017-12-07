package se.softhouse.notes.exceptions;

import javax.ws.rs.WebApplicationException;


public class ExamException extends WebApplicationException {
    public ExamException(int status) {
        super(status);
    }

    public ExamException(String message, int status) {
        super(message, status);
    }

    public ExamException(String message, Throwable cause) {
        super(message, cause);
    }
}
