package com.accessjobs.pjp.services;

import com.accessjobs.pjp.domain.Job;
import com.accessjobs.pjp.exceptions.JobIdException;
import com.accessjobs.pjp.repositories.JobRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Locale;

@Service
public class JobService {
    @Autowired
    private JobRepository jobRepository;

    public Job add(Job job){
        //logic , validation and handling
        try {
            //convert the identifier to upper case
            job.setJobIdentifier(job.getJobIdentifier().toUpperCase(Locale.ROOT));
            return jobRepository.save(job);
        }catch (Exception e){
            throw new JobIdException("Job Identifier '"+job.getJobIdentifier().toUpperCase(Locale.ROOT)+"' already exists");
        }
    }

    public Job findJobByIdentifier(String jobIdentifier){
        //convert the id to upper case to avoid any error
        Job job = jobRepository.findByJobIdentifier(jobIdentifier.toUpperCase(Locale.ROOT));
        //check if there is no object in the db with the input identifier
        if(job == null){
            throw new JobIdException("Job Identifier '"+jobIdentifier.toUpperCase(Locale.ROOT)+"' not found");
        }
        return job;
    }


    public Iterable<Job> findAllJobs(){
        return jobRepository.findAll();
    }

    public void deleteJobByIdentifier(String jobIdentifier){
        Job job = jobRepository.findByJobIdentifier(jobIdentifier);

        //first check if the object exist
        if(job == null){
            throw new JobIdException("Cannot delete the job with '"+jobIdentifier.toUpperCase(Locale.ROOT)+"' identifier , it doesnt exist");
        }
        jobRepository.delete(job);
    }
}
