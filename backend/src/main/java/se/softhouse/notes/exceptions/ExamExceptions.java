package se.softhouse.notes.exceptions;

import java.util.function.Supplier;


public enum ExamExceptions implements Supplier<RuntimeException> {
    BAD_REQUEST(with(400, "Bad request to resource")), //
    NOT_AUTHORIZED(with(401, "Unauthorized")), //
    FORBIDDEN(with(403, "Unauthorized")), //
    NOT_FOUND(with(404, "Resource not found")), //
    FATAL(new RuntimeException()), //
    NOT_IMPLEMENTED(with(501, "Not implemented yet"));

    private RuntimeException runtimeException;

    ExamExceptions(RuntimeException exception) {
        this.runtimeException = exception;
    }

    private static ExamException with(Integer statusCode) {
        return new ExamException(statusCode);
    }

    private static ExamException with(Integer statusCode, String message) {
        return new ExamException(message, statusCode);
    }

    public void raise() {
        throw runtimeException;
    }

    public void raise(String errorMessageFormat, Object... objects) {
        throw new ExamException(String.format(errorMessageFormat, objects), runtimeException);
    }

    @Override
    public RuntimeException get() {
        return runtimeException;
    }
}
