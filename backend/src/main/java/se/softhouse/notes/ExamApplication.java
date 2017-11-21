package se.softhouse.notes;

import com.bazaarvoice.dropwizard.assets.ConfiguredAssetsBundle;
import io.dropwizard.Application;
import io.dropwizard.jdbi.DBIFactory;
import io.dropwizard.setup.Bootstrap;
import io.dropwizard.setup.Environment;
import org.skife.jdbi.v2.DBI;
import se.softhouse.notes.db.ExamDAO;
import se.softhouse.notes.resources.ExamResource;
import se.softhouse.notes.services.ExamService;
import se.softhouse.notes.services.impl.ExamServiceDbImpl;


public class ExamApplication extends Application<ExamConfiguration> {
    @Override
    public void run(ExamConfiguration configuration, Environment environment) throws Exception {
        // setup database connection
        final DBI dbi = getDbiFor(configuration, environment);

        // data access objects
        final ExamDAO examDAO = dbi.onDemand(ExamDAO.class);

        // create table
        examDAO.createTable();

        // services
        final ExamService examService = new ExamServiceDbImpl(examDAO);

        // resources
        final ExamResource examResource = new ExamResource(examService);

        // environment
        environment.jersey().register(examResource);
    }

    private DBI getDbiFor(ExamConfiguration configuration, Environment environment) {
        return new DBIFactory().build(environment, configuration.getDataSourceFactory(), "sqlite");
    }

    @Override
    public void initialize(Bootstrap<ExamConfiguration> configuration) {
        configuration.addBundle(new ConfiguredAssetsBundle("/assets/", "/", "index.html"));
    }

    public static void main(String[] args) throws Exception {
        new ExamApplication().run(args);
    }
}
