package se.softhouse.notes.db;

import org.skife.jdbi.v2.sqlobject.Bind;
import org.skife.jdbi.v2.sqlobject.BindBean;
import org.skife.jdbi.v2.sqlobject.SqlQuery;
import org.skife.jdbi.v2.sqlobject.SqlUpdate;
import org.skife.jdbi.v2.sqlobject.customizers.RegisterMapperFactory;
import org.skife.jdbi.v2.sqlobject.customizers.SingleValueResult;
import org.skife.jdbi.v2.tweak.BeanMapperFactory;
import se.softhouse.notes.db.entity.Exam;

import java.util.List;
import java.util.Optional;

@RegisterMapperFactory(BeanMapperFactory.class)
public interface ExamDAO {
    @SqlUpdate("CREATE TABLE IF NOT EXISTS `quiz_questionnaire`(id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT, " + //
            "title VARCHAR(12), " + //
            "text VARCHAR(255))")
    void createTable();

    @SqlQuery("SELECT * FROM `quiz_questionnaire`")
    List<Exam> selectAll();

    @SqlQuery("SELECT * FROM `quiz_questionnaire` WHERE id = :id")
    @SingleValueResult
    Optional<Exam> get(@Bind("id") int id);

    @SqlUpdate("INSERT INTO `quiz_questionnaire` (title, text) VALUES(:title, :text)")
    void insert(@BindBean Exam exam);

    @SqlUpdate("UPDATE `quiz_questionnaire` SET title = :title, text = :text WHERE id = :id")
    void update(@BindBean Exam exam);

    @SqlUpdate("DELETE FROM `quiz_questionnaire` WHERE id = :id")
    void delete(@Bind("id") int id);
}
